"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  let handlenavigation = () => {
    router.push("/display-product");
  };
  return (
    <div className="hero min-h-screen bg-base-200 w-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://cdn.dribbble.com/users/942643/screenshots/4501246/dashboard.gif"
          className=" rounded-lg shadow-2xl size-[55vh] ml-[10vh]"
        />
        <div>
          <h1 className="text-5xl font-bold">Welcome to Admin Dashboard</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary" onClick={handlenavigation}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
