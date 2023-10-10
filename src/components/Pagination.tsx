"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface PaginationProps {
  page: number;
  hasPrev: boolean;
  hasNext: boolean;
  cat: string;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  hasPrev,
  hasNext,
  cat,
}) => {
  const router = useRouter();

  const setPage = useCallback(
    (page: number) => {
      if (cat) {
        router.push(`?page=${page}&cat=${cat}`);
      } else {
        router.push(`?page=${page}`);
      }
    },
    [router, cat]
  );

  return (
    <div className="flex items-center justify-between pt-5">
      <button
        className={`py-1 px-3 bg-rose-700 text-white rounded-md ${
          !hasPrev ? "opacity-60 cursor-not-allowed" : ""
        }`}
        onClick={() => hasPrev && setPage(page - 1)}
      >
        Back
      </button>
      <button
        className={`py-1 px-3 bg-rose-700 text-white rounded-md ${
          !hasNext ? "opacity-60 cursor-not-allowed" : ""
        }`}
        onClick={() => hasNext && setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
