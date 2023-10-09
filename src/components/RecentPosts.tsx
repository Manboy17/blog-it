import Image from "next/image";
import Link from "next/link";
import Pagination from "./Pagination";

interface RecentPostsProps {
  page: number;
  cat: string;
}

interface PostProps {
  _id: string;
  createdAt: number;
  slug: string;
  catSlug: string;
  title: string;
  desc: string;
  img?: string;
  views: number;
}

interface ApiProps {
  posts: PostProps[];
  count: number;
}

const getData = async (page: number, cat: string): Promise<ApiProps> => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

const RecentPosts: React.FC<RecentPostsProps> = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);

  const POST_PER_PAGE = 3;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className="w-full md:w-2/3 p-4">
      {posts.length === 0 ? (
        <h1 className="flex items-center justify-center h-full text-lg">
          No posts found!
        </h1>
      ) : (
        <>
          <div className="py-4 text-xl font-semibold">Recent Posts {page}</div>
          <div className="flex flex-col gap-4">
            {posts?.map((post) => (
              <div
                key={post._id}
                className="shadow p-4 flex flex-col md:flex-row gap-4"
              >
                <div className="relative w-full md:w-[50%] h-[300px]">
                  <Image
                    src={post.img || ""}
                    alt="text"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-start flex-col gap-8 w-full md:w-[50%]">
                  <div className="flex items-center gap-2 text-sm pt-5">
                    {post.createdAt.toString().substring(0, 10)} -
                    <span className="text-rose-700 uppercase font-bold">
                      {post.catSlug}
                    </span>
                  </div>

                  <div className="text-xl font-semibold">{post.title}</div>
                  <p className="text-gray-600 py-4 text-sm line-clamp-1">
                    {post.desc}
                  </p>

                  <Link
                    href={`/${post.slug}`}
                    className="text-black relative border-b-[2px] border-rose-600 transition hover:border-b-[3px]"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <Pagination
            page={page}
            hasPrev={hasPrev}
            hasNext={hasNext}
            cat={cat}
          />
        </>
      )}
    </div>
  );
};

export default RecentPosts;
