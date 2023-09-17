import React from "react";

export interface CategoryProps {
  title: string;
  _id?: string;
  slug: string;
}

const Category: React.FC<CategoryProps> = ({ title, slug }) => {
  console.log(slug);
  return (
    <div className={`${slug} p-2 rounded-md font-medium cursor-pointer`}>
      {title}
    </div>
  );
};

export default Category;
