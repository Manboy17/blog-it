import Categories from "@/components/Categories";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <Navbar />
      <Categories />
    </div>
  );
}
