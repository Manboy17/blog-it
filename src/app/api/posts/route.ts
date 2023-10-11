import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prismadb";
import { getSessionAuth } from "../auth/[...nextauth]/route";

// Create a new Post
export const POST = async (req: NextRequest) => {
  const session = await getSessionAuth();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const post = await prisma.post.create({
      // @ts-ignore
      data: { ...body, userEmail: session.user.email },
    });
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
