"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";
import qs from "query-string";

interface CategoryProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

const Category: React.FC<CategoryProps> = ({ icon: Icon, label, selected }) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [router, params, label]);

  return (
    <div
      onClick={handleClick}
      className={`
    flex
    items-center
    justify-center
    gap-3
    p-2
    cursor-pointer
    hover:text-rose-800
    transition
    border-b-2
    border-color-rose-800
    ${selected ? "text-rose-800" : "text-black"}
    ${selected ? "border-b-rose-800" : "border-transparent"}
    `}
    >
      <Icon size={20} />
      <div className="bg-transparent font-normal">{label}</div>
      <div className="flex items-start" onClick={() => {}}></div>
    </div>
  );
};

export default Category;
