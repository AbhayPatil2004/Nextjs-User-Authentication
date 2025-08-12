import { NextResponse } from "next/server";
import connectDatabase from "@/dbConfig/dbConfig";

export async function GET() {
  await connectDatabase();
  return NextResponse.json({ status: "MongoDB connection attempted" });
}
