import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prismadb";
import { getSessionAuth } from "../auth/[...nextauth]/route";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const page = searchParams?.get("page");
  const cat = searchParams?.get("cat");
  const parsedPage = page ? parseInt(page, 10) : null;
  const POST_PER_PAGE = 3;

  try {
    let posts;
    let count;

    if (parsedPage !== null) {
      let query = {
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (parsedPage - 1),
        where: {
          ...(cat && { catSlug: cat }),
        },
      };

      [posts, count] = await prisma.$transaction([
        prisma.post.findMany(query),
        prisma.post.count({
          where: query.where,
        }),
      ]);
    } else {
      posts = await prisma.post.findMany();
    }

    return new NextResponse(JSON.stringify({ posts, count }), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

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
