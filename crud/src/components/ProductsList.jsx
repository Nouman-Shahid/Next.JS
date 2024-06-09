import Link from "next/link";
import React from "react";

const ProductsList = () => {
  return (
    <>
      <div className="flex justify-between items-center px-20  mt-20">
        <p className="font-bold text-[2.5vh]">
          Nextjs-14 Crud Operations (Create, Read, Update, Delete) using Mongodb
          and Tailwind css
        </p>
        <Link href={"/addproducts"}>
          <button className="p-2 bg-green-500 text-gray-800 font-bold rounded-lg">
            Add Product
          </button>
        </Link>
      </div>
    </>
  );
};

export default ProductsList;
