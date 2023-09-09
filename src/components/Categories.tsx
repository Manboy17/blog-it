import { BiLogoPython, BiLogoJavascript } from "react-icons/bi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { LiaRobotSolid } from "react-icons/lia";
import { GoProjectSymlink } from "react-icons/go";
import Category from "./Category";
import { AiFillApple } from "react-icons/ai";
import { GiBookStorm } from "react-icons/gi";

const categories = [
  {
    id: 1,
    icon: BiLogoPython,
    label: "Python",
    // iconColor: "yellow-500",
  },
  {
    id: 2,
    icon: BiLogoJavascript,
    label: "Javascript",
    // iconColor: "yellow-400",
  },
  {
    id: 3,
    icon: MdOutlineTravelExplore,
    label: "Travel",
    // iconColor: "blue-500",
  },
  {
    id: 4,
    icon: LiaRobotSolid,
    label: "Coding",
    // iconColor: "green-500",
  },
  {
    id: 5,
    icon: GoProjectSymlink,
    label: "Projects",
    // iconColor: "indigo-500",
  },
  {
    id: 6,
    icon: AiFillApple,
    label: "Laptop",
    // iconColor: "gray-700",
  },
  {
    id: 7,
    icon: GiBookStorm,
    label: "Experience",
    // iconColor: "purple-500",
  },
];

const Categories = () => {
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
        <Category key={cat.id} {...cat} />
      ))}
    </div>
  );
};

export default Categories;
