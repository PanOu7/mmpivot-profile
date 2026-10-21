"use client";
import { usePathname } from "next/navigation";
import Container from "./Container";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { title: "Home", link: "/" },
    { title: "News", link: "/news" },
    { title: "Services", link: "/services" },
    { title: "About", link: "/about-us" },
    { title: "Contact", link: "/contact-us" },
  ];
  return (
    <header
      className={` relative lg:px-0 py-4 border-b-3 border-blue-300`}
    >
      <Container className={` flex justify-between items-center`}>
        <Link href={`/`} className="">
          <img src="/images/logo.png" className=" h-12" alt="" />
        </Link>
        <div
          className={`absolute z-20 lg:static bottom-0 left-0  w-full lg:w-auto p-5 lg:px-0 shadow lg:shadow-none bg-white flex flex-col lg:flex-row duration-200 lg:translate-y-0 lg:opacity-100 lg:pointer-events-auto ${
            menuOpen
              ? " opacity-100 pointer-events-auto translate-y-[102%]"
              : " opacity-0 pointer-events-none translate-y-[120%]"
          }`}
        >
          {menuItems.map((menuItem) => (
            <Link
              className={`font-semibold text-xl font-heading uppercase border-3 px-6 py-1 ${
                path === menuItem.link
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600"
              }`}
              href={menuItem.link}
              key={menuItem.title}
            >
              {menuItem.title}
            </Link>
          ))}
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className=" flex lg:hidden pointer-events-auto lg:pointer-events-none"
        >
          {!menuOpen ? <Menu className=" size-8" /> : <X className=" size-8" />}
        </button>
      </Container>
    </header>
  );
};

export default Header;
