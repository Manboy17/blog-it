"use client";

import useSWR from "swr";

interface CommentProps {
  _id: string;
  createdAt: string;
  title: string;
  user: {
    name: string;
  };
}

const fetcher = async (url: string) => {
  const res = await fetch(url);

  const data = res.json();

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return data;
};

const Components = () => {
  const { data, isLoading } = useSWR(
    "http://localhost:3000/api/comments",
    fetcher
  );

  return (
    <div className="py-6">
      <div className="flex items-center justify-between gap-2">
        <input
          type="text"
          placeholder="Leave a reply..."
          className="p-2 md:p-4 bg-gray-200 rounded-md w-full outline-none placeholder:text-sm md:placeholder:text-base"
        />
        <button className="p-2 text-white font-medium md:p-4 text-sm  bg-rose-700 rounded-md">
          Submit
        </button>
      </div>

      <div className="py-6">
        <div className="font-bold text-base text-black py-2 border-b-[2px]">
          Comments
        </div>
        <div>
          {data?.map((comment: CommentProps) => (
            <div className="py-4 w-full" key={comment._id}>
              <div className="text-black font-medium text-sm flex items-center gap-2">
                {comment.user.name}
                <span className="text-gray-500 font-medium">
                  on {comment.createdAt.toString().substring(0, 10)}
                </span>
              </div>
              <div className="text-sm text-gray-500 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                maxime at porro tenetur facere tempore exercitationem eveniet
                doloremque neque. Rerum!
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Components;
