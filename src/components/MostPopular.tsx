import Link from "next/link";
import { BiCategory } from "react-icons/bi";
import prisma from "@/utils/prismadb";

const MostPopular: React.FC = async () => {
  const data = await prisma.post.findMany({
    take: 3,
    orderBy: {
      views: "desc",
    },
  });

  const res = data;

  return (
    <div className="w-full md:w-1/3 p-4">
      <div className="text-sm font-light text-gray-700">🔥 Here is hot</div>
      <div className="text-lg font-semibold pb-2">Most Popular</div>
      <div className="flex flex-col gap-[10px]">
        {res.map((post: any) => (
          <Link href={`/${post.slug}`} key={post.id} className="cursor-pointer">
            <div className="flex items-center flex-reverse p-1 text-green-500  max-w-fit rounded-lg text-xs">
              <BiCategory size={20} />
              {post.catSlug}
            </div>
            <p className="text-sm py-1 line-clamp-2">{post.desc}</p>
            <div className="text-xs text-gray-800 flex items-center gap-1">
              <div className="text-black font-medium">Check the author</div> -{" "}
              {post.createdAt.toString().substring(0, 10)}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MostPopular;
