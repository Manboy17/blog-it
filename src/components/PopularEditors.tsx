import Image from "next/image";

const PopularEditors = () => {
  return (
    <div>
      <div className="text-lg font-semibold">Explore Popular Editors</div>
      <div className="flex items-center gap-4 pt-4 cursor-pointer">
        <div className="relative w-[50px] h-[50px]">
          <Image
            src="/text.jpeg"
            alt="author"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-xs text-white bg-blue-500 p-1 rounded-md">
            Travel
          </span>
          <div className="text-black text-sm">
            Lorem ipsum dolor sit amet consecrate.
          </div>
          <div className="text-xs text-gray-700">2023.13.08</div>
        </div>
      </div>

      <div className="flex items-center gap-4 pt-4 cursor-pointer">
        <div className="relative w-[50px] h-[50px]">
          <Image
            src="/text.jpeg"
            alt="author"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-xs text-white bg-blue-500 p-1 rounded-md">
            Travel
          </span>
          <div className="text-black text-sm">
            Lorem ipsum dolor sit amet consecrate.
          </div>
          <div className="text-xs text-gray-700">2023.13.08</div>
        </div>
      </div>

      <div className="flex items-center gap-4 pt-4 cursor-pointer">
        <div className="relative w-[50px] h-[50px]">
          <Image
            src="/text.jpeg"
            alt="author"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-xs text-white bg-blue-500 p-1 rounded-md">
            Travel
          </span>
          <div className="text-black text-sm">
            Lorem ipsum dolor sit amet consecrate.
          </div>
          <div className="text-xs text-gray-700">2023.13.08</div>
        </div>
      </div>
    </div>
  );
};

export default PopularEditors;
