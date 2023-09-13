import Link from "next/link";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BiLogoTiktok } from "react-icons/bi";

const icons = [
  {
    id: 1,
    icon: <AiFillInstagram />,
    href: "/",
  },
  {
    id: 2,
    icon: <AiFillFacebook />,
    href: "/",
  },
  {
    id: 3,
    icon: <AiFillTwitterCircle />,
    href: "/",
  },
  {
    id: 4,
    icon: <BiLogoTiktok />,
    href: "/",
  },
];

function Footer() {
  return (
    <div className="flex items-center flex-col sm:flex-row gap-4 justify-between py-5">
      <div className="flex items-center gap-4">
        {icons.map((icon) => (
          <Link href={icon.href} key={icon.id}>
            <div className="text-xl md:text-2xl text-rose-800 cursor-pointer">
              {icon.icon}
            </div>
          </Link>
        ))}
      </div>
      <div className="text-black text-sm md:text-base">
        Made by Denys Hlushchenko &copy; 2023
      </div>
    </div>
  );
}

export default Footer;
