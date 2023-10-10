import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prismadb";

export const GET = async (req: NextRequest) => {
  try {
    const popularPosts = await prisma.post.findMany({
      take: 3,
      orderBy: {
        views: "desc",
      },
    });
    return new NextResponse(JSON.stringify({ posts: popularPosts }), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
