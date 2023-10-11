import Category from "./Category";
import prisma from "@/utils/prismadb";

const Categories = async () => {
  const categories = await prisma.category.findMany();

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
        <Category title={cat.title} key={cat.id} slug={cat.slug} />
      ))}
    </div>
  );
};

export default Categories;
