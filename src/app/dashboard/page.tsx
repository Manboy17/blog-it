"use client";

import { app } from "@/utils/firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useSession } from "next-auth/react";
import error from "next/error";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { AiFillFileImage } from "react-icons/ai";

const Dashboard = () => {
  const [media, setMedia] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const storage = getStorage(app);
  const router = useRouter();
  const session = useSession();
  const [state, setState] = useState("");
  const [progress, setProgress] = useState(0);

  const status = useMemo(() => {
    if (state === "paused") return "Upload is paused";
    return `Upload is ${progress.toFixed(2)}% done`;
  }, [progress, state]);

  if (session.status === "unauthenticated") {
    router.push("/");
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on("state_changed", (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
        setState(snapshot.state);
      });
      uploadTask.then(() => {
        console.log("upload complete");
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("set media", downloadURL);
          setMedia(downloadURL);
        });
      });
    }
  };

  const convertTitleToSlug = (title: string) =>
    title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (progress !== 100) {
      return setError("Please upload an image");
    }
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        desc: content,
        img: media,
        slug: convertTitleToSlug(title),
        catSlug: category.toLowerCase() || "experience",
      }),
    });
    router.push("/");
  }, [category, content, media, progress, router, title]);

  return (
    <div className="flex items-center justify-center w-full p-4">
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <h1 className="text-lg font-medium py-5">Create New Post</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            className="p-2 w-full border-[1px] border-gray-500 rounded-lg placeholder:text-sm"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            className="p-2 w-full border-[1px] border-gray-500 rounded-lg placeholder:text-sm"
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <input
            className="hidden"
            type="file"
            id="image"
            onChange={handleChange}
          />
          <label
            htmlFor="image"
            className="flex items-center gap-2 text-rose-800 cursor-pointer"
          >
            <AiFillFileImage size={20} />
            <span>Choose the image for the post</span>
            {status && <span>{status}</span>}
          </label>
          <textarea
            className="p-2 placeholder:text-sm border-[1px] rounded-lg border-gray-500"
            placeholder="Content"
            rows={10}
            cols={30}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          {error && <span className="text-red-600">{error}</span>}
          <button className="w-full bg-blue-400 text-white font-medium py-2 px-4 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
