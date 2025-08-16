import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body ?? {};
    console.log("Contact submission:", { name, email, phone, message });
    return NextResponse.json({ message: "Thanks! We'll be in touch shortly." });
  } catch {
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 400 }
    );
  }
}
