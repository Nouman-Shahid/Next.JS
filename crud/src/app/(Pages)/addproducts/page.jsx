"use client";
import { useRouter } from "next/router";
import { useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const router = useRouter(); // Correctly initialize the router instance

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: productName }),
      });

      if (!response.ok) {
        throw new Error(`Failed to create a Product: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Product created:", data);

      // Redirect or navigate using router.push
      router.push("/success"); // Redirect to the success page or any other route
    } catch (error) {
      console.error("Error:", error);
      // Display error to the user
    }
  }
  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col items-center space-y-6 h-[70vh] justify-center"
        >
          <input
            type="text"
            placeholder="Product Name"
            className="input input-bordered input-primary w-full max-w-xs"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="text"
            placeholder="Image"
            className="input input-bordered input-primary w-full max-w-xs"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
          <input
            type="number"
            placeholder="1"
            className="input input-bordered input-primary w-full max-w-xs"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          <input
            type="text"
            placeholder="Product Category"
            className="input input-bordered input-primary w-full max-w-xs"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />
          <button type="submit" className="btn btn-primary w-full max-w-xs">
            Add Product
          </button>
        </form>
      </div>
    </>
  );
};

export default page;
