"use client";

import { signIn, useSession } from "next-auth/react";
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
      <br />
      <span>Login with one of the social media below:</span>

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
    </div>
  );
};

export default page;
