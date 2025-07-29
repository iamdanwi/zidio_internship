import { NextRequest, NextResponse } from "next/server";
import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
    const createUserUrl = `${process.env.BACKEND_URL}/api/user/register`;

    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("token")?.value;

        if (!token) {
            return NextResponse.json({ message: "Unauthorized: No token" }, { status: 401 });
        }


        const decoded = jwt.verify(token, process.env.JWT_SECRET!);
        const adminId = (decoded as { id: string }).id;

        if (!adminId) {
            return NextResponse.json({ message: "Invalid token" }, { status: 401 });
        }

       
        const body = await req.json();
        const { name, email } = body;

        if (!name || !email) {
            return NextResponse.json(
                { message: "Name and email are required" },
                { status: 400 }
            );
        }
        const res = await axios.post(
            createUserUrl,
            {
                name,
                email,
                admin: adminId,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return NextResponse.json(
            { message: "User created", user: res.data },
            { status: 201 }
        );
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError<{ message: string }>;
            return NextResponse.json(
                { message: axiosError.response?.data?.message || "Failed to create user" },
                { status: axiosError.response?.status || 500 }
            );
        }

        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
