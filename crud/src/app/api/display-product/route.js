import connectMongoDB from "@/lib/mongodb";
import model from "@/lib/model";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const products = await model.find();
  return NextResponse.json({ products });
}

export async function POST(request) {
  const { name, image, price, category } = await request.json();
  await connectMongoDB();
  await model.create({ name, image, price, category });
  return NextResponse.json({ message: "Product Created" }, { status: 201 });
}
