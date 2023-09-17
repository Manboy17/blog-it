import { NextResponse } from "next/server";
import prisma from "@/utils/prismadb";

export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();
    return new NextResponse(JSON.stringify(categories));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" })
    );
  }
};
