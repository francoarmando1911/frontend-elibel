"use client"

import { Heart, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import MenuList from "./menu-list";
import { useRouter } from "next/navigation";
import ItemsMenuMobile from "./items-menu-mobile";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
      {/* Logo con Link */}
      <Link href="/">
        <Image
          src="/logo1.png"  
          alt="Logo de Elibel"
          width={120}
          height={40}
          className="object-contain"
        />
      </Link>

      <div className="items-center justify-between hidden sm:flex">
        <MenuList />
      </div>
      <div className="flex sm:hidden">
        <ItemsMenuMobile />
      </div>
      <div className="flex items-center justify-between gap-2 sm:gap-7">
        <ShoppingCart strokeWidth="1" className="cursor-pointer" onClick={() => router.push("/cart")} />
        <Heart strokeWidth="1" className="cursor-pointer" onClick={() => router.push("/loved-products")} />
        <User strokeWidth="1" className="cursor-pointer" />
      </div>
    </div>
  );
}

export default Navbar;
