import Components from "@/components/Components";
import MostPopular from "@/components/MostPopular";
import Image from "next/image";
import { AiFillCalendar } from "react-icons/ai";
import prisma from "@/utils/prismadb";

interface PostProps {
  params: {
    slug: string;
    views: number;
  };
}

const page: React.FC<PostProps> = async ({ params }) => {
  const { slug } = params;
  const post = await prisma.post.update({
    where: { slug },
    data: { views: { increment: 1 } },
    include: { user: true },
  });

  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="w-full md:w-2/3 shadow p-4">
        <div className="relative w-full h-[450px]">
          {post.img && (
            <Image src={post.img} alt="image" fill className="object-cover" />
          )}
        </div>
        <div className="flex items-center justify-between pt-3">
          <div className="flex items-center gap-2">
            {post?.user?.image ? (
              <Image
                src={post.user.image}
                alt="user"
                width={30}
                height={30}
                className="rounded-full"
              />
            ) : (
              <Image
                src="/placeholder.jpg"
                alt="user"
                width={30}
                height={30}
                className="rounded-full"
              />
            )}
            <span className="text-gray-500 font-medium text-sm">
              {post.user.name}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <AiFillCalendar size={25} className="text-rose-800" />
            <span className="text-gray-500 font-medium text-sm">
              {post.createdAt.toString().substring(0, 10)}
            </span>
          </div>
        </div>
        <div className="pt-5 flex flex-col gap-4">
          <h1 className="font-semibold text-black text-2xl">{post.title}</h1>
          <p className="text-sm text-gray-500">{post.desc}</p>
        </div>
        <Components postSlug={slug} />
      </div>
      <MostPopular />
    </div>
  );
};

export default page;
