import { NextPage } from "next";
import MostPopular from "@/components/MostPopular";
import RecentPosts from "@/components/RecentPosts";

interface Props {
  searchParams: Record<string, string>;
}

const Home: NextPage<Props> = ({ searchParams }) => {
  const page = Number(searchParams.page ?? 1);
  const { cat } = searchParams;
  return (
    <>
      <RecentPosts page={page} cat={cat} />
      <MostPopular />
    </>
  );
};

export default Home;
