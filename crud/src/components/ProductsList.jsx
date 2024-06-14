import Link from "next/link";
import React from "react";

const ProductsList = () => {
  return (
    <main className="flex flex-col">
      <div className="flex justify-between items-center px-20  mt-20">
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

      <div className="flex w-[90%]">
        <div className="overflow-x-auto ">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Description</th>
                <th>Buttons</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar"></div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td className="flex space-x-9">
                  <button className="py-1 px-2 bg-slate-200 text-gray-800 font-bold rounded-[1vh]">
                    Edit
                  </button>{" "}
                  <button className="py-1 px-2 bg-red-500 text-gray-200 font-bold  rounded-[1vh]">
                    Delete
                  </button>
                </td>
              </tr>
              {/* row 2 */}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default ProductsList;
