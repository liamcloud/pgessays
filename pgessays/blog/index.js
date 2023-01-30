import React from "react";
import essays from "../../public/essays.json";
import Link from "next/link";
import Image from "next/image";

const Blogs = () => {
  return (
    <div className="blog-wrapper">
      {essays?.map((item, index) => {
        return (
          <div key={index} className="blog-card">
            <Image src={item.image} alt={item.title} width={300} height={250} />
            <Link href={`/blog/${item?.slug}`}>{item?.title}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;
