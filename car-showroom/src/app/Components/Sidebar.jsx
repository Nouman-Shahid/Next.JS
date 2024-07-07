import React from "react";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { BiSolidUserCircle } from "react-icons/bi";
import { IoCarSportSharp } from "react-icons/io5";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { BiSolidCart } from "react-icons/bi";
import { FcServices } from "react-icons/fc";
import { AiFillCalendar } from "react-icons/ai";
import { PiChatTextFill } from "react-icons/pi";

const Sidebar = () => {
  let navLinks = [
    {
      name: "Dashboard",
      icon: TbLayoutDashboardFilled,
    },
    {
      name: "Assets",
      icon: BiSolidUserCircle,
    },
    {
      name: "Booking",
      icon: IoCarSportSharp,
    },
    {
      name: "Sell Cars",
      icon: PiSuitcaseSimpleFill,
    },
    {
      name: "Buy Cars",
      icon: BiSolidCart,
    },
    {
      name: "Service",
      icon: FcServices,
    },
    {
      name: "Calender",
      icon: AiFillCalendar,
    },
    {
      name: "Messages",
      icon: PiChatTextFill,
    },
  ];

  return (
    <div>
      <div className="flex flex-col w-[15vw] h-screen border border-red-500 p-5 justify-between ">
        <div className="flex space-x-1 items-center">
          <img src="images/logo.png" className="h-10 " />
          <h1 className="font-mono font-bold text-[3vh] bg-blue-500 text-white">
            oterex
          </h1>
        </div>
        <ul className="flex flex-col space-y-3">
          {navLinks.map((items) => (
            <li className="w-full flex space-x-3 items-center h-10 ">
              <items.icon size="2.3vh" />
              <h1>{items.name}</h1>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
