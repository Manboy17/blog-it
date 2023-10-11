import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prismadb";
import { getSessionAuth } from "../auth/[...nextauth]/route";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get("postSlug");

  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { user: true },
    });
    return new NextResponse(JSON.stringify(comments), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

// Create a Comment
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
    const comment = await prisma.comment.create({
      // @ts-ignore
      data: { ...body, userEmail: session.user.email },
    });
    return new NextResponse(JSON.stringify(comment), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

// Delete a post
export const DELETE = async (req: NextRequest) => {
  const body = await req.json();

  try {
    const comment = await prisma.comment.delete({
      where: { id: body.id },
    });
    return new NextResponse(JSON.stringify(comment), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
