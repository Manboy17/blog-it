"use client";

import { BiLogoPython, BiLogoJavascript } from "react-icons/bi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { LiaRobotSolid } from "react-icons/lia";
import { GoProjectSymlink } from "react-icons/go";
import Category from "./Category";
import { AiFillApple } from "react-icons/ai";
import { GiBookStorm } from "react-icons/gi";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";

const categories = [
  {
    icon: BiLogoPython,
    label: "Python",
    // iconColor: "yellow-500",
  },
  {
    icon: BiLogoJavascript,
    label: "Javascript",
    // iconColor: "yellow-400",
  },
  {
    icon: MdOutlineTravelExplore,
    label: "Travel",
    // iconColor: "blue-500",
  },
  {
    icon: LiaRobotSolid,
    label: "Coding",
    // iconColor: "green-500",
  },
  {
    icon: GoProjectSymlink,
    label: "Projects",
    // iconColor: "indigo-500",
  },
  {
    icon: AiFillApple,
    label: "Laptop",
    // iconColor: "gray-700",
  },
  {
    icon: GiBookStorm,
    label: "Experience",
    // iconColor: "purple-500",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <div
      className="
        flex
        items-center
        justify-between
        gap-8
        pt-10
        overflow-x-auto
    "
    >
      {categories.map((cat) => (
        <Category
          icon={cat.icon}
          label={cat.label}
          key={cat.label}
          selected={category === cat.label}
        />
      ))}
    </div>
  );
};

export default Categories;
