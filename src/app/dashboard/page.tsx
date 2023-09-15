import Image from "next/image";
import { AiFillDelete } from "react-icons/ai";

const page = () => {
  return (
    <div className="flex flex-col md:flex-row items-start w-full gap-5 justify-between p-4">
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <h1 className="text-lg font-medium py-5">Your Latest Posts</h1>

        <div className="flex flex-row items-center justify-between gap-2 border-[1px] rounded-md p-2">
          <div className="relative w-[150px] h-[100px]">
            <Image src="/text.jpeg" alt="image" fill className="object-cover" />
          </div>
          <div className="text-base text-gray-700 font-light text-center">
            Post Title Test
          </div>
          <AiFillDelete size={25} className="cursor-pointer text-rose-800" />
        </div>

        <div className="flex flex-row items-center justify-between gap-2 border-[1px] rounded-md p-2">
          <div className="relative w-[150px] h-[100px]">
            <Image src="/text.jpeg" alt="image" fill />
          </div>
          <div className="text-base text-gray-700 font-light text-center">
            Post Title Test
          </div>
          <AiFillDelete size={25} className="cursor-pointer text-rose-800" />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <h1 className="text-lg font-medium py-5">Create New Post</h1>
        <form className="flex flex-col gap-4">
          <input
            className="p-2 w-full border-[1px] border-gray-500 rounded-lg placeholder:text-sm"
            type="text"
            placeholder="Title"
          />
          <input
            className="p-2 w-full border-[1px] border-gray-500 rounded-lg placeholder:text-sm"
            type="text"
            placeholder="Short Description"
          />
          <input
            className="p-2 w-full border-[1px] border-gray-500 rounded-lg placeholder:text-sm"
            type="text"
            placeholder="Image"
          />
          <textarea
            className="p-2 placeholder:text-sm border-[1px] rounded-lg border-gray-500"
            placeholder="Content"
            rows={10}
            cols={30}
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default page;
