const COmponents = () => {
  return (
    <div className="py-6">
      <div className="flex items-center justify-between gap-2">
        <input
          type="text"
          placeholder="Leave a reply..."
          className="p-2 md:p-4 bg-gray-200 rounded-md w-full outline-none placeholder:text-sm md:placeholder:text-base"
        />
        <button className="p-2 text-white font-medium md:p-4 text-sm  bg-rose-700 rounded-md">
          Submit
        </button>
      </div>

      <div className="py-6">
        <div className="font-bold text-base text-black py-2 border-b-[2px]">
          3 Comments
        </div>
        <div className="py-4">
          <div className="text-black font-medium text-sm flex items-center gap-2">
            Denys Hlushchenko
            <span className="text-gray-500 font-medium">on Oct 08, 2023</span>
          </div>
          <div className="text-sm text-gray-500 font-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur, asperiores.
          </div>
        </div>

        <div className="py-4">
          <div className="text-black font-medium text-sm flex items-center gap-2">
            Denys Hlushchenko
            <span className="text-gray-500 font-medium">on Oct 08, 2023</span>
          </div>
          <div className="text-sm text-gray-500 font-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur, asperiores.
          </div>
        </div>

        <div className="py-4">
          <div className="text-black font-medium text-sm flex items-center gap-2">
            Denys Hlushchenko
            <span className="text-gray-500 font-medium">on Oct 08, 2023</span>
          </div>
          <div className="text-xs md:text-sm text-gray-500 font-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur, asperiores.
          </div>
        </div>
      </div>
    </div>
  );
};

export default COmponents;
