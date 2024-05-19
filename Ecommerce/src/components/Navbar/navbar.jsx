import Link from "next/link";
import React from "react";

const navbar = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/About",
    },
    {
      title: "Blogs",
      path: "/Blogs",
    },
    {
      title: "Contact",
      path: "/Contact",
    },
  ];
  return (
    <div>
      {links.map((item) => (
        <Link href={item.path}>{item.title}</Link>
      ))}
    </div>
  );
};

export default navbar;
