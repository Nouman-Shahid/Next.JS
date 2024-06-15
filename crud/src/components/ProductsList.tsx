"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Containers {
  $id: string;
  title: string;
  description: string;
}

const ProductsList = () => {
  const [containers, setContainers] = useState<Containers[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContainers = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/container");
        if (!response.ok) {
          throw new Error("Failed to fetch Containers");
        }
        const data = await response.json();
        setContainers(data);
      } catch (error) {
        console.error(error); // Log error for debugging
        setError("Failed to load Containers");
      } finally {
        setIsLoading(false);
      }
    };

    fetchContainers();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/container/${id}`, { method: "DELETE" });
      setContainers((prevContainers) =>
        prevContainers.filter((item) => item.$id !== id)
      );
    } catch (error) {
      setError("Failed to delete");
    }
  };

  return (
    <main className="flex flex-col items-center w-screen">
      <div className="flex justify-between items-center px-20 w-full mt-20">
        <p className="font-bold text-[2.5vh]">
          Nextjs-14 Crud Operations (Create, Read, Update, Delete) using
          AppWrite and Tailwind css
        </p>
        <Link href={"/addproducts"}>
          <button className="p-2 bg-green-500 text-gray-800 font-bold rounded-lg">
            Add Product
          </button>
        </Link>
      </div>

      <div className="flex w-full p-20">
        <div className="overflow-x-auto w-[90%] flex justify-center">
          {isLoading ? (
            <>
              <p className="text-[2vh] text-green-500 my-28">
                Fetching Data. Please Wait!
              </p>
            </>
          ) : containers.length > 0 ? (
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Buttons</th>
                </tr>
              </thead>
              <tbody>
                {error && (
                  <tr>
                    <td className="p-6" colSpan={4}>
                      {error}
                    </td>
                  </tr>
                )}
                {containers.map((item) => (
                  <tr key={item.$id}>
                    <td>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar"></div>
                        <div>
                          <div className="font-bold">{item.title}</div>
                        </div>
                      </div>
                    </td>
                    <td>{item.description}</td>
                    <td className="flex space-x-9">
                      <Link href={`/editproducts/${item.$id}`}>
                        <button className="py-1 px-2 bg-slate-200 text-gray-800 font-bold rounded-[1vh]">
                          Edit
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(item.$id)}
                        className="py-1 px-2 bg-red-500 text-gray-200 font-bold rounded-[1vh]"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="flex justify-center my-28">
              <p className="text-[2vh] text-red-500">No data found</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProductsList;
