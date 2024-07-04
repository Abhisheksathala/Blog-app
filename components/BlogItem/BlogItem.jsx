import { useState } from "react";
import Image from "next/image";
import { assets, blog_data } from "../../Assets/assets";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const BlogItem = ({
  title,
  description,
  image,
  date,
  category,
  author,
  author_img,
  id,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "-7px 7px 0px #28A745" }}
      className="max-w-[330px] sm:max-w-[300px] h-[530px]  border border-solid border-[#28A745] p-4 rounded-md"
    >
      <Link href={`/blogs/${id}`}>
        <motion.div whileHover={{ opacity: 0.8 }}>
          <Image
            src={image}
            alt={title}
            className="w-full h-40 object-cover rounded-md mb-4"
          />
        </motion.div>
      </Link>
      <p className="text-xs text-[#e2e6e3] mb-2 bg-[#4A4A4A] inline-flex px-4 rounded-md">
        {category}
      </p>
      <h2 className="text-xl font-medium text-[#4A4A4A] mb-2">{title}</h2>
      <p className="text-base text-[#4A4A4A] mb-4">{description}</p>
      <div className="flex items-center mb-4">
        <Image
          src={author_img}
          alt={author}
          className="w-8 h-8 rounded-full mr-2"
        />
        <div className="text-sm text-[#4A4A4A]">
          <p>{author}</p>
          <p>{new Date(date).toLocaleDateString()}</p>
        </div>
      </div>
      <Link
        href={`/blogs/${id}`}
        className="mt-4 flex items-center justify-between gap-2 bg-[#28A745] text-white py-2 px-2 text-3m sm:px-4 rounded-md shadow-md hover:bg-green-600 focus:outline-none active:bg-green-600"
      >
        Read More <Image src={assets.arrow} alt="image" />
      </Link>
    </motion.div>
  );
};

const BlogList = () => {
  const [menu, setMenu] = useState("All");

  const categories = ["All", "Technology", "Startup", "Lifestyle"];

  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="flex justify-center gap-6 capitalize my-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setMenu(category)}
            className={
              menu === category
                ? "bg-[#28A745] text-white py-1 px-4 rounded-sm"
                : ""
            }
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        <AnimatePresence>
          {blog_data
            .filter((item) => (menu === "All" ? true : item.category === menu))
            .map((blog, index) => (
              <motion.div
                key={blog.id}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants}
                transition={{ duration: 0.3 }}
              >
                <BlogItem
                  id={blog.id}
                  title={blog.title}
                  description={blog.description}
                  image={blog.image}
                  date={blog.date}
                  category={blog.category}
                  author={blog.author}
                  author_img={blog.author_img}
                />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </>
  );
};

export default BlogList;
