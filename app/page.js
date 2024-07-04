"use client";
import BlogList from "@/components/BlogItem/BlogItem";
import Herader from "../components/Header/Herader";
import Footer from "@/components/Footer/Footer";

const page = () => {
  return (
    <div>
      <Herader />
      <BlogList />
      <Footer/>
    </div>
  );
};

export default page;
