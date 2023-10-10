"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import useSWR from "swr";
import { AiOutlineDelete } from "react-icons/ai";

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

  const data: CommentProps[] = await res.json();

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return data;
};

const Components: React.FC<Props> = ({ postSlug }) => {
  const [desc, setDesc] = useState("");
  const [error, setError] = useState("");
  const session = useSession();

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const handleSubmit = async () => {
    if (session.status === "authenticated") {
      await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ desc, postSlug }),
      });
      mutate();
      setDesc("");
    } else {
      setError("You must be logged in to comment!");
    }
  };

  const handleClick = async (id: string) => {
    await fetch("api/comments", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
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

      {error && <span className="text-red-700">{error}</span>}

      <div className="pt-6">
        {data?.length === 0 ? (
          <h1>No comments yet!</h1>
        ) : (
          <>
            <div className="font-bold text-base text-black py-2 border-b-[2px]">
              Comments
            </div>
            <div>
              {data?.map((comment) => (
                <div
                  className="py-3 w-full flex items-center justify-between"
                  key={comment.id}
                >
                  <div className="flex flex-col items-start">
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
                  <div
                    className="cursor-pointer text-rose-700"
                    onClick={() => handleClick(comment.id)}
                  >
                    <AiOutlineDelete size={20} />
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
