import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prismadb";

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
