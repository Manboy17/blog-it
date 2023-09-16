"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";

const page = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    router.push("/");
  }

  if (status === "loading") {
    return <div className="text-xl">Loading...</div>;
  }

  return (
    <div
      className="
    h-full
    mx-auto
    p-4
    flex
    flex-col
    gap-4
    items-center
    justify-center
  "
    >
      <h1 className="text-xl font-semibold">Welcome Back!</h1>
      <form
        className="
        flex
        flex-col
        gap-4
        w-full
      "
      >
        <input
          className="border-[1px] border-gray-800 rounded-lg p-4 outline-none"
          type="email"
          placeholder="Email"
        />
        <input
          className="border-[1px] border-gray-800 rounded-lg p-4 outline-none"
          type="password"
          placeholder="Password"
        />
      </form>

      <div
        onClick={() => signIn("google")}
        className="
        p-4
        flex
        items-center
        gap-4
        justify-center
        w-full
        border-[1px]
        border-black
        rounded-lg
        font-medium
        text-sm
        cursor-pointer
      "
      >
        <FcGoogle size={25} />
        Continue with google
      </div>

      <div
        onClick={() => signIn("github")}
        className="
        p-4
        flex
        items-center
        gap-4
        justify-center
        w-full
        border-[1px]
        border-black
        rounded-lg
        font-medium
        text-sm
        cursor-pointer
      "
      >
        <GrGithub size={25} />
        Continue with github
      </div>

      <div className="font-base text-sm text-center">
        Do not have an account?
        <Link
          href="/register"
          className="pl-2 text-gray-700 hover:underline cursor-pointer transition"
        >
          Register here!
        </Link>
      </div>
    </div>
  );
};

export default page;
