import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prismadb";

export const GET = async (
  req: NextRequest,
  { params }: { params: { slug: string } }
) => {
  const { slug } = params;

  const post = await prisma.post.findUnique({
    where: { slug },
  });

  try {
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
