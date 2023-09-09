import { IconType } from "react-icons";

interface CategoryProps {
  icon: IconType;
  label: string;
}

const Category: React.FC<CategoryProps> = ({ icon: Icon, label }) => {
  return (
    <div className="flex items-center gap-3 cursor-pointer hover:text-rose-800 transition">
      <Icon size={20} />
      <div className="bg-transparent font-normal">{label}</div>
    </div>
  );
};

export default Category;
