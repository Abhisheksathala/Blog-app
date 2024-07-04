import React from "react";
import Image from "next/image";
import { assets } from "../../Assets/assets";
import { motion } from "framer-motion";
import "./hearder.css";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-5 px-5 md:px-12 lg:px-28 bg-white"
    >
      <div className="flex justify-between items-center">
        <Image
          src={assets.logo}
          alt="Logo"
          width={180}
          className="w-[130px] sm:w-auto"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-[#28A745] text-[#28A745] shadow-[-7px_7px_0px_#28A745]"
        >
          Get Started{" "}
          <Image src={assets.arrow} alt="Arrow" width={20} height={20} />
        </motion.button>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium  text-[#FFC107] font-cartoon">
          <span className="">Latest Blogs</span>
        </h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base text-[#4A4A4A] font-roboto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque rerum
          numquam iusto totam culpa, minima fuga? Quos optio at corrupti magni
          maxime, alias asperiores modi dolor aliquam voluptatem necessitatibus.
          Quos.
        </p>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 max-w-[400px] m-auto flex border border-solid border-[#28A745]  items-center shadow-[-7px_7px_0px_#28A745]"
        >
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="px-3 py-2 rounded-l-md flex-1 focus:outline-none"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className=" text-[#28A745] py-2 px-4  shadow-md active:bg-green-600 hover:text-white focus:outline-none "
          >
            Subscribe
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Header;
