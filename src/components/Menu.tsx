"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { links } from "./Navbar";
import Link from "next/link";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="block sm:hidden">
      {!open ? (
        <RxHamburgerMenu
          size={25}
          className="cursor-pointer"
          onClick={() => setOpen(true)}
        />
      ) : (
        <AiOutlineClose
          size={25}
          className="cursor-pointer"
          onClick={() => setOpen(false)}
        />
      )}

      {open && (
        <div
          className="
            absolute
            top-12
            left-0
            flex
            items-center
            justify-center
            gap-8
            bg-blue-100
            w-full
            h-[150px]
            z-99
          "
        >
          {links.map((link) => (
            <Link
              href={link.href}
              className="bg-transparent text-lg text-black font-normal hover:text-rose-800 transition hover:underline"
              key={link.id}
            >
              {link.text}
            </Link>
          ))}
          <Link
            href="/login"
            className="text-lg  py-2 px-3 rounded-md hover:text-rose-800 transition font-normal"
          >
            Log in
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
