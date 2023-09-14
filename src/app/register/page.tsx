"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";

const page = () => {
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
      <h1 className="text-xl font-semibold">First time here?</h1>
      <form
        className="
        flex
        flex-col
        gap-4
        w-full
      "
      >
        <input
          type="text"
          placeholder="Username"
          className="border-[1px] border-gray-800 rounded-lg p-4 outline-none"
        />
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
        Already have an account?
        <Link
          href="/login"
          className="pl-2 text-gray-700 hover:underline cursor-pointer transition"
        >
          Log in here!
        </Link>
      </div>
    </div>
  );
};

export default page;
