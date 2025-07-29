import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    const loginUrl = `${process.env.BACKEND_URL}/api/user/login`;

    try {
        const body = await req.json();
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json(
                { message: "Email and password are required" },
                { status: 400 }
            );
        }

        const res = await axios.post(loginUrl, {
            email,
            password,
        });

        const { token, data } = res.data;

        if (!token) {
            return NextResponse.json(
                { message: "Authentication failed, no token received" },
                { status: 401 }
            );
        }

        const cookie = await cookies();
        cookie.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/",
            maxAge: 60 * 60 * 24 * 7,
        });

        return NextResponse.json(
            { message: "Login successful", user: data },
            { status: 200 }
        );
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError<{ message: string }>;
            return NextResponse.json(
                { message: axiosError.response?.data?.message || "An error occurred during login." },
                { status: axiosError.response?.status || 500 }
            );
        }
        console.error("Login API route error:", error);
        return NextResponse.json({ message: "An internal server error occurred." }, { status: 500 });
    }
}