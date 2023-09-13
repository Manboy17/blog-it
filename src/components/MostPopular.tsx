import PopularEditors from "./PopularEditors";

const MostPopular = () => {
  return (
    <div className="w-full md:w-1/3 p-4">
      <div className="text-sm font-light text-gray-700">🔥 Here's hot</div>
      <div className="text-lg font-semibold pb-2">Most Popular</div>
      <div className="py-4 cursor-pointer">
        <div className="p-1 bg-green-500 text-white max-w-fit rounded-lg text-xs">
          Coding
        </div>
        <p className="text-sm py-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          minus..
        </p>
        <div className="text-xs text-gray-800 flex items-center gap-1">
          <div className="text-black font-medium">Denys Hlushchenko</div> -
          2023.14.07
        </div>
      </div>

      <PopularEditors />
    </div>
  );
};

export default MostPopular;
