import React from "react";

const footer = () => {
  const icons = [
    {
      path: "image/fb.png",
    },
    {
      path: "image/insta.png",
    },
    {
      path: "image/x.png",
    },
    {
      path: "image/li.png",
    },
    {
      path: "image/yt.png",
    },
  ];

  return (
    <footer className="flex flex-col w-screen h-36  justify-between px-10 py-4 items-center ">
      <hr className="w-[90%] m-auto bg-slate-500" />

      <div className="flex space-x-5 items-end">
        <p>You can follow us on : </p>
        {icons.map((items) => (
          <img
            src={items.path}
            className="cursor-pointer h-[3vh] hover:scale-125"
          />
        ))}
      </div>
    </footer>
  );
};

export default footer;
