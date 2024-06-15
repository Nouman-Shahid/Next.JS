import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FcTodoList } from "react-icons/fc";
import { SlCalender } from "react-icons/sl";
import { FaStickyNote } from "react-icons/fa";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { AiFillProject } from "react-icons/ai";
import { HiUsers } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";

const Sidebar = () => {
  let tasks = [
    {
      name: "Up coming",
      image: MdKeyboardDoubleArrowRight,
    },
    {
      name: "Today",
      image: FcTodoList,
    },
    {
      name: "Calender",
      image: SlCalender,
    },
    {
      name: "Sticky Notes",
      image: FaStickyNote,
    },
  ];
  let lists = [
    {
      name: "Personal",
      image: FaStickyNote,
      color: "gray-300",
    },
    {
      name: "Work",
      image: FaStickyNote,
      color: "red-500",
    },
    {
      name: "List 1",
      image: FaStickyNote,
      color: "gray-500",
    },
    {
      name: "List 2",
      image: FaStickyNote,
      color: "red-500",
    },
  ];
  let meetings = [
    {
      name: "Office",
      image: PiBuildingOfficeFill,
      color: "gray-500",
    },
    {
      name: "Project 1",
      image: AiFillProject,
      color: "red-500",
    },
    {
      name: "Clients",
      image: HiUsers,
      color: "red-100",
    },
  ];

  return (
    <div className="h-[85vh] w-[45vh]  bg-gray-800 mt-5 flex flex-col items-center space-y-7 p-4 rounded-xl">
      <div className="flex justify-between w-full p-2">
        <h1 className="text-[2vh] text-gray-300 font-bold">Menu</h1>
        <IoMenuSharp className="size-[3vh] cursor-pointer" />
      </div>
      <div className="flex w-full">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          className="text-[1.5vh] bg-gray-200 rounded-xl w-full p-[0.8vh] text-gray-800"
        />
      </div>
      <div className="flex flex-col  w-full">
        <h1 className="font-bold text-[1.6vh]">Tasks</h1>
        <ul>
          {tasks.map((item) => (
            <li className="flex p-1 items-center hover:bg-gray-100 cursor-pointer">
              <item.image className="mx-3" />
              <p className="text-[1.8vh]">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col  w-full">
        <h1 className="font-bold text-[1.6vh]">Lists</h1>
        <ul className="space-y-3">
          {lists.map((item) => (
            <li className="flex p-1 items-center  hover:bg-gray-100 cursor-pointer ">
              <item.image className={`text-${item.color} mx-3`} />
              <p className="text-[1.8vh]">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col  w-full">
        <h1 className="font-bold text-[1.6vh]">Meetings</h1>
        <ul className="space-y-3">
          {meetings.map((item, index) => (
            <li
              key={index}
              className="flex p-1 items-center hover:bg-gray-100 cursor-pointer"
            >
              {item.image({ className: `text-${item.color} mx-3` })}{" "}
              <p className="text-[1.8vh]">{item.name}</p>{" "}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col w-full px-2 h-full justify-end space-y-1">
        <div className="flex space-x-2 items-center hover:bg-slate-100 p-1 cursor-pointer">
          <IoMdSettings />
          <h1>Settings</h1>
        </div>
        <div className="flex space-x-2 items-center hover:bg-slate-100 p-1 cursor-pointer">
          <FaSignOutAlt />
          <h1>Sign out</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
