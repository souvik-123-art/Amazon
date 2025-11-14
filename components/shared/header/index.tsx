import { APP_NAME } from "@/lib/constants";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import Search from "./search";
import { Menu } from "./menu";
import { Button } from "@/components/ui/button";
import data from "@/lib/data";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-black text-white">
      <div className="px-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href={"/"}
              className="flex items-center header-button font-extrabold tex2xl m-1"
            >
              <Image
                src={"/icons/logo.png"}
                width={80}
                height={80}
                alt={`${APP_NAME} logo`}
              />
            </Link>
          </div>
          <div className="flex-1 hidden md:block max-w-xl">
            <Search />
          </div>
          <Menu />
        </div>
        <div className="md:hidden block py-2">
          <Search />
        </div>
      </div>
      <div className="flex items-center px-3 mb-[1px] bg-gray-800 ">
        <Button
          variant={"ghost"}
          className="header-button dark flex items-center gap-1 text-base [&_svg]:size-6"
        >
          <MenuIcon />
          All
        </Button>
        <div className="flex items-center flex-wrap gap-3 overflow-hidden max-h-[42px]">
          {data.headerMenus.map((menu) => (
            <Link
              href={menu.href}
              key={menu.href}
              className="header-button !p-2"
            >
              {menu.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
