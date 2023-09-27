"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export interface CategoryProps {
  title: string;
  _id?: string;
  slug: string;
}

const Category: React.FC<CategoryProps> = ({ title, slug }) => {
  const params = useSearchParams();
  const catParams = params.get("cat");
  return (
    <Link
      href={`?cat=${slug}`}
      className={`
        p-2 
        rounded-md 
        font-medium 
        cursor-pointer
      hover:text-rose-700 
        transition
        ${slug === catParams ? "text-rose-700" : ""}
      `}
    >
      {title}
    </Link>
  );
};

export default Category;
