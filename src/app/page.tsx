import Categories from "@/components/Categories";
import MostPopular from "@/components/MostPopular";
import Navbar from "@/components/Navbar";
import RecentPosts from "@/components/RecentPosts";

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <Navbar />
      <Categories />
      <div className="mt-12 flex flex-col md:flex-row gap-4">
        <RecentPosts />
        <MostPopular />
      </div>
    </div>
  );
}
