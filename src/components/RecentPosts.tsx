import Image from "next/image";
import Link from "next/link";
import Pagination from "./Pagination";

const RecentPosts = () => {
  return (
    <div className="w-full md:w-2/3 p-4">
      <div className="py-4 text-xl font-semibold">Recent Posts</div>
      <div className="flex flex-col gap-4">
        <div className="shadow p-4 flex flex-col md:flex-row gap-4">
          <div className="relative w-full md:w-[50%] h-[300px]">
            <Image src="/text.jpeg" alt="text" fill className="object-cover" />
          </div>
          <div className="flex items-start flex-col gap-8 w-full md:w-[50%]">
            <div className="flex items-center gap-2 text-sm pt-5">
              2023.08.06 -
              <span className="text-rose-700 uppercase font-bold">Coding</span>
            </div>

            <div className="text-xl font-semibold">Some sort of Title</div>
            <p className="text-gray-600 py-2 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus voluptatibus...
            </p>

            <Link
              href="/"
              className="text-black relative border-b-[2px] border-rose-600 transition hover:border-b-[3px]"
            >
              Read More
            </Link>
          </div>
        </div>

        <div className="shadow p-4 flex flex-col md:flex-row gap-4">
          <div className="relative w-full md:w-[50%] h-[300px]">
            <Image src="/text.jpeg" alt="text" fill className="object-cover" />
          </div>
          <div className="flex items-start flex-col gap-8 w-full md:w-[50%]">
            <div className="flex items-center gap-2 text-sm pt-5">
              2023.08.06 -
              <span className="text-rose-700 uppercase font-bold">Coding</span>
            </div>

            <div className="text-xl font-semibold">Some sort of Title</div>
            <p className="text-gray-600 py-2 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus voluptatibus...
            </p>

            <Link
              href="/"
              className="text-black relative border-b-[2px] border-rose-600 transition hover:border-b-[3px]"
            >
              Read More
            </Link>
          </div>
        </div>

        <div className="shadow p-4 flex flex-col md:flex-row gap-4">
          <div className="relative w-full md:w-[50%] h-[300px]">
            <Image src="/text.jpeg" alt="text" fill className="object-cover" />
          </div>
          <div className="flex items-start flex-col gap-8 w-full md:w-[50%]">
            <div className="flex items-center gap-2 text-sm pt-5">
              2023.08.06 -
              <span className="text-rose-700 uppercase font-bold">Coding</span>
            </div>

            <div className="text-xl font-semibold">Some sort of Title</div>
            <p className="text-gray-600 py-2 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus voluptatibus...
            </p>

            <Link
              href="/"
              className="text-black relative border-b-[2px] border-rose-600 transition hover:border-b-[3px]"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default RecentPosts;
