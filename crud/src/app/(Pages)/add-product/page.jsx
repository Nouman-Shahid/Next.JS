"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const addProducts = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !image) {
      alert("Name and Image fileds can't be empty");
    }
    try {
      const res = await fetch("http://localhost:3000/api/display-product", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, image, price, category }),
      });

      if (res.ok) {
        router.push("/display-product");
      } else {
        throw new Error("FAILED TO CREATE A PRODUCT");
      }
    } catch (error) {
      console.log;
    }
  };

  return (
    <div className="flex flex-col items-center w-screen space-y-6">
      <h1 className="text-gray-200 text-[7vh]">Add Product</h1>
      <form
        action="POST"
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-6"
      >
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          type="text"
          placeholder="Enter Product's Name"
          className="input input-bordered input-error w-full max-w-xs"
        />
        <input
          onChange={(e) => {
            setImage(e.target.value);
          }}
          value={image}
          type="text"
          placeholder="Select Product's Image"
          className="input input-bordered input-error w-full max-w-xs"
        />
        <input
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          value={price}
          type="number"
          placeholder="ENter Product's Price"
          className="input input-bordered input-error w-full max-w-xs"
        />
        <input
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          value={category}
          type="text"
          placeholder="Enter Product's Category"
          className="input input-bordered input-error w-full max-w-xs"
        />
        <button
          type="submit"
          className="btn btn-active btn-primary w-[20rem]"
          sub
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default addProducts;
