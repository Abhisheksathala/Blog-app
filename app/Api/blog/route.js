import { NextResponse } from "next/server";
import IndexDB from "./../../../lib/DB/IndexDB";
import { writeFile } from "fs/promises";
import path from "path";
import { Buffer } from "buffer";
import Blog_Model from "./../../../lib/Models/BlogModel";

const loadDb = async () => {
  await IndexDB();
};

loadDb();

export async function GET(request) {
  return NextResponse.json({
    msg: "API working",
  });
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const timestamps = Date.now();
    const image = formData.get("image");
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const filePath = path.join(
      process.cwd(),
      "public",
      `${timestamps}_${image.name}`
    );
    await writeFile(filePath, buffer);
    const imgUrl = `/${timestamps}_${image.name}`;

    const blogData = {
      title: formData.get("title"),
      category: formData.get("category"),
      author: formData.get("author"),
      image: imgUrl,
      authorImg: formData.get("authorImg"),
      date: Date.now(),
    };

    await Blog_Model.create(blogData);
    console.log("blog_saved");

    return NextResponse.json({ success: true, message: "blog added" });
  } catch (error) {
    console.error("Error saving blog:", error);
    return NextResponse.json({ success: false, message: "Error saving blog", error: error.message });
  }
}
