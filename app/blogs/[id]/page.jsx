"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { assets, blog_data } from "@/Assets/assets";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

const Page = ({ params }) => {
  const [data, setData] = useState(null);
  const [shareLink, setShareLink] = useState("");

  const fetchBlogData = async () => {
    const blog = blog_data.find((blog) => blog.id === Number(params.id));
    if (blog) {
      setData(blog);
    } else {
      console.error("Blog not found");
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, [params.id]);

  // Function to handle sharing
  const handleShare = () => {
    // Example: Open share dialog or redirect to a social media platform
    const url = "https://example.com"; // Replace with the actual URL
    window.open(url, "_blank");
  };

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-[#FFD7C2] py-8 px-4 sm:px-8 lg:px-12">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href={"/"}>
            <Image
              src={assets.logo}
              width={180}
              height={50}
              alt="Logo"
              className="cursor-pointer"
            />
          </Link>
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center gap-2 font-medium py-2 px-4 sm:py-3 sm:px-6 border border-[#28A745] shadow-[-7px_7px_0px_#28A745] rounded-md"
        >
          Get started
          <Image src={assets.arrow} width={16} height={16} alt="Arrow" />
        </motion.button>
      </div>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto">
        {/* Blog Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl sm:text-5xl font-bold text-center mb-6"
        >
          {data.title}
        </motion.h1>

        {/* Author Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center space-x-4 mb-6"
        >
          <Image
            className="rounded-full"
            src={data.author_img.src}
            width={data.author_img.width}
            height={data.author_img.height}
            alt="Author"
          />
          <p className="text-sm sm:text-base font-medium text-[#4A4A4A]">
            {data.author}
          </p>
        </motion.div>

        {/* Blog Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-6 overflow-hidden rounded-lg shadow-md"
        >
          <Image
            src={data.image.src}
            width={data.image.width}
            height={data.image.height}
            alt="Blog Image"
          />
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-lg leading-relaxed text-[#4A4A4A] mb-8"
        >
          <h2 className="text-xl font-semibold mb-4">Introduction:</h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-3"
          >
            {data.description}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-3"
          >
            <strong>1. Identify Your Goal:</strong> Start by defining the
            specific technology or skill you want to learn. Whether it's
            mastering a new programming language, diving into machine learning,
            or understanding cloud computing, clarity on your goal is essential.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="mt-3"
          >
            <strong>2. Research and Resources:</strong> Gather resources such as
            online courses, tutorials, books, and documentation. Choose
            reputable sources that offer comprehensive coverage of the
            technology you're interested in.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="mt-3"
          >
            <strong>3. Hands-on Practice:</strong> Theory alone isn't enough.
            Dedicate time to hands-on practice. Build small projects,
            participate in coding challenges, or contribute to open-source
            projects to apply what you learn in real-world scenarios.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="mt-3"
          >
            <strong>4. Stay Updated:</strong> Technologies evolve rapidly.
            Follow industry blogs, attend webinars, and join forums to stay
            updated with the latest trends and best practices in your chosen
            technology.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.0 }}
            className="mt-3"
          >
            <strong>5. Seek Mentorship:</strong> Learning from experienced
            professionals can accelerate your growth. Seek mentors or join
            communities where you can ask questions, receive feedback, and
            network with like-minded individuals.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.2 }}
            className="mt-3"
          >
            <strong>6. Continuous Learning:</strong> Learning is a lifelong
            journey. Allocate time regularly to expand your knowledge base,
            explore advanced topics, and continuously improve your skills.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.4 }}
            className="mt-3"
          >
            By following these steps, you can effectively learn new technologies
            and position yourself for career growth in the competitive field of
            software development.
          </motion.p>
        </motion.div>

        {/* Share Article Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.6 }}
          className="text-center my-24"
          style={{
            background:
              "repeating-linear-gradient(45deg, #FFD7C2, #FFD7C2 10px, #F6EFD3 10px, #F6EFD3 20px)",
          }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.8 }}
            className="text-xl font-semibold text-[#4A4A4A] mb-4"
          >
            Share this article on social media
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 3 }}
          >
            <button
              onClick={handleShare}
              className="bg-[#28A745] text-white py-3 px-6 rounded-md shadow-md hover:bg-[#218838] transition-colors duration-300"
            >
              <Image src={assets.facebook_icon} alt="Share on Facebook" />
            </button>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
