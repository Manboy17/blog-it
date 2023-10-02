import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prismadb";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get("postSlug");

  const comments = await prisma.comment.findMany({
    where: {
      ...(postSlug && { postSlug }),
    },
    include: { user: true },
  });

  try {
    return new NextResponse(JSON.stringify(comments), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
