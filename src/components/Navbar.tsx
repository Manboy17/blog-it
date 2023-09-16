"use client";

import Link from "next/link";
import Menu from "./Menu";
import { signOut, useSession } from "next-auth/react";

export const links = [
  {
    id: 1,
    text: "Contact",
    href: "/",
  },
  {
    id: 2,
    text: "About",
    href: "/",
  },
];

const Navbar = () => {
  const { status } = useSession();
  return (
    <div className="h-12 flex items-center justify-between border-b-2">
      <Link href="/" className="font-semibold text-lg text-rose-700">
        Luminary
      </Link>

      <div className="hidden sm:flex items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className="text-base hover:text-rose-800 transition font-normal"
          >
            {link.text}
          </Link>
        ))}
        {status === "authenticated" ? (
          <>
            <Link
              className="text-base hover:text-rose-800 transition font-normal"
              href="dashboard"
            >
              Dashboard
            </Link>
            <div
              onClick={() => signOut()}
              className="text-base py-1 px-2 bg-blue-100 rounded-md hover:text-rose-800 transition cursor-pointer"
            >
              Log out
            </div>
          </>
        ) : (
          <Link
            href="/login"
            className="text-base py-1 px-2 bg-blue-100 rounded-md hover:text-rose-800 transition"
          >
            Log in
          </Link>
        )}
      </div>
      <Menu />
    </div>
  );
};

export default Navbar;
