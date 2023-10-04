"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";

interface CommentProps {
  id: string;
  createdAt: string;
  desc: string;
  user: {
    name: string;
  };
}

interface Props {
  postSlug: string;
}

const fetcher = async (url: string) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return data;
};

const Components: React.FC<Props> = ({ postSlug }) => {
  const [desc, setDesc] = useState("");
  const session = useSession();

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
  };

  return (
    <div className="py-6">
      <div className="flex items-center justify-between gap-2">
        <input
          type="text"
          placeholder="Leave a reply..."
          className="p-2 md:p-4 bg-gray-200 rounded-md w-full outline-none placeholder:text-sm md:placeholder:text-base"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          className="p-2 text-white font-medium md:p-4 text-sm  bg-rose-700 rounded-md"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      <div className="py-6">
        {session.status === "unauthenticated" ? (
          <p>
            <Link href="/login" className="text-rose-700">
              Login
            </Link>{" "}
            to read and leave a comment!
          </p>
        ) : (
          <>
            <div className="font-bold text-base text-black py-2 border-b-[2px]">
              Comments
            </div>
            <div>
              {data?.map((comment: CommentProps) => (
                <div className="py-4 w-full" key={comment.id}>
                  <div className="text-black font-medium text-sm flex items-center gap-2">
                    {comment.user.name}
                    <span className="text-gray-500 font-medium">
                      on {comment.createdAt.toString().substring(0, 10)}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 font-light">
                    {comment.desc}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Components;
