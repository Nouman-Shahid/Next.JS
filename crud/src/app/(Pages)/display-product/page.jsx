import React from "react";

const getProducts = async () => {
  try {
    const res = await fetch("http://local:3000/api/display-product", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("failed to fetch products");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function displayProducts() {
  const { products } = await getProducts();

  return (
    <main className="flex flex-wrap items-center justify-center">
      {products.map((item) => {
        <div className="card w-96 glass">
          <img src={item.image} alt="car!" />
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p>{item.category}</p>
            <p>{item.price}</p>

            <div className="card-actions justify-end">
              <button className="btn btn-warning">Edit</button>
              <button className="btn btn-error">Delete</button>
            </div>
          </div>
        </div>;
      })}
    </main>
  );
}
