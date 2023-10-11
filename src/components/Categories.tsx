import Category, { CategoryProps } from "./Category";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const Categories = async () => {
  const categories: CategoryProps[] = await getData();

  return (
    <div
      className="
        flex
        items-center
        justify-between
        gap-8
        py-10
        overflow-x-auto
    "
    >
      {categories.map((cat) => (
        <Category title={cat.title} key={cat._id} slug={cat.slug} />
      ))}
    </div>
  );
};

export default Categories;
