import Components from "@/components/Components";
import MostPopular from "@/components/MostPopular";
import Image from "next/image";
import { AiFillCalendar } from "react-icons/ai";

const page = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2">
      <div className="w-full md:w-2/3 shadow p-4">
        <div className="relative w-full h-[450px]">
          <Image src="/text.jpeg" alt="image" fill className="object-cover" />
        </div>
        <div className="flex items-center justify-between pt-3">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.jpg"
              alt="user"
              width={30}
              height={30}
              className="rounded-full"
            />
            <span className="text-gray-500 font-medium text-sm">
              Denys Hlushchenko
            </span>
          </div>
          <div className="flex items-center gap-2">
            <AiFillCalendar size={25} className="text-rose-800" />
            <span className="text-gray-500 font-medium text-sm">
              Oct 08, 2023
            </span>
          </div>
        </div>
        <div className="pt-5 flex flex-col gap-4">
          <h1 className="font-semibold text-black text-2xl">Test Title</h1>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            quod atque possimus aliquam at pariatur dicta illum esse explicabo
            hic, perferendis tempore, id quam corrupti ducimus optio quisquam
            voluptatem. Neque tempora nulla totam tempore expedita debitis
            quibusdam sapiente!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero,
            repudiandae maiores iure excepturi tempora rem dolor beatae sed
            eaque perferendis rerum. Itaque rerum, fugit assumenda sint unde aut
            maiores ea? orem ipsum dolor sit amet consectetur, adipisicing elit.
            Libero, repudiandae maiores iure excepturi tempora rem dolor beatae
            sed eaque perferendis rerum. Itaque rerum, fugit assumenda sint unde
            aut maiores
          </p>
        </div>
        <Components />
      </div>
      <MostPopular />
    </div>
  );
};

export default page;
