import React from "react";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-200">
      <div className="px-2 py-3 border border-black">
        <Image src={assets.logo} alt="ima" />
      </div>
      <div className="w-28 sm:w-80 h-[100vh] relative py-12 border border-black">
        <div className="w-[50%] sm:w-[80%] absolute right-0">
          <Link
            href="/Admin/addproducts"
            className="flex item-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000]"
          >
            <Image src={assets.add_icon} width={28} alt="mm" /> <p>Add blog</p>
          </Link>
          <Link
            href="/Admin/blogList"
            className="mt-5 flex item-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000]"
          >
            <Image src={assets.blog_icon} width={28} alt="mm" />{" "}
            <p>blog_list</p>
          </Link>
          <Link
            href="/Admin/sub"
            className="mt-5 flex item-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000]"
          >
            <Image src={assets.email_icon} width={28} alt="mm" />{" "}
            <p> Subscribstion</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
