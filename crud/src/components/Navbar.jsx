import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 w-screen px-10">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Admin Dashboard</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <details>
              <summary>Plans</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <a>Free</a>
                </li>
                <li>
                  <a>Premium</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
