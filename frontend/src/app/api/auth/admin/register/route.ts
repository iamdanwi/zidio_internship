import { NextRequest, NextResponse } from "next/server";
import axios, { AxiosError } from "axios";

export async function POST(req: NextRequest){
    const registerUrl = `${process.env.BACKEND_URL}/api/admin/register`;
    
    try {
        const body = await req.json();
        const {name, email, password} = body;

        const res = await axios.post(registerUrl, {
            name,
            email,
            password
        });

        if(res.status === 201){
            return NextResponse.json({message: "success"});
        }

    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError<{ message: string }>;
            return NextResponse.json(
                { message: axiosError.response?.data?.message || "An error occurred during registeration." },
                { status: axiosError.response?.status || 500 }
            );
        }
        console.error("Login API route error:", error);
        return NextResponse.json({ message: "An internal server error occurred." }, { status: 500 });
    }
}