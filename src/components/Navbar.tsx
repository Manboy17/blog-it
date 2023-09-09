import Link from "next/link";
import Menu from "./Menu";

export const links = [
  {
    id: 1,
    text: "Contact",
    href: "/",
  },
  {
    id: 2,
    text: "About",
    href: "/",
  },
];

const Navbar = () => {
  return (
    <div className="h-12 flex items-center justify-between border-b-2">
      <div className="font-semibold text-lg text-rose-700">Luminary</div>

      <div className="hidden sm:flex items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className="text-base hover:text-rose-800 transition font-normal"
          >
            {link.text}
          </Link>
        ))}
        <Link
          href="/login"
          className="text-base py-1 px-2 bg-blue-100 rounded-md hover:text-rose-800 transition"
        >
          Log in
        </Link>
      </div>
      <Menu />
    </div>
  );
};

export default Navbar;

// text-lg bg-slate-100 py-2 px-3 rounded-md hover:text-rose-800 transition
