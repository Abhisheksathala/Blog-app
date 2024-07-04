"use client";
import React, { useState, useRef } from "react";
import { assets } from "./../../../Assets/assets";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";

const Page = () => {
  const [Data, setData] = useState({
    title: "",
    category: "",
    authour: "",
    description: "",
    image: null, // Keeping image in state
    authourImg: "/author_img.png", // Default author image
  });

  return (
    <div className="max-w-lg mx-auto bg-white p-8 mt-10 w-[80%] border border-gray-200 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Submit an Article
      </h2>

      <form action="">
        <h3>upload an image</h3>
        <label htmlFor="image">
          <Image className="mt-4" src={assets.upload_area}  width={140} height={70} alt="image" />
        </label>
        input
      </form>
    </div>
  );
};

export default Page;
