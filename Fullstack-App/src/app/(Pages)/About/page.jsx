"use client";
import React, { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import Image from "next/image";

const AnimatedNumber = ({ number }) => {
  const [springProps, setSpringProps, reset] = useSpring(() => ({
    animatedNumber: 0,
  }));

  useEffect(() => {
    setTimeout(() => {
      setSpringProps({ animatedNumber: number });
    }, 1000);
  }, [number, setSpringProps, reset]);

  return (
    <animated.div className="text-blue-500 text-[3vh] font-bold">
      {springProps.animatedNumber.to((n) => n.toFixed(0))}
    </animated.div>
  );
};

const About = () => {
  return (
    <main className="flex flex-col justify-evenly items-center w-screen h-auto p-14 lg:flex-row  ">
      <div className="flex flex-col px-[4vh] justify-center space-y-28 ">
        <h1 className="text-blue-500 font-bold text-[3vh]  italic w-[80vh]">
          About Us
        </h1>
        <h1 className="text-white font-bold text-[5vh] xl:text-[6vh]  italic w-[80vh]">
          Creative community, unique features, worldwide connections.
        </h1>
        <h1 className="text-gray-300 font-bold text-[2vh]  italic w-[80vh]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
          voluptatum ullam dolor sapiente fugit? Placeat iure aliquid
        </h1>
        <div className="flex space-x-14">
          <div className=" text-white  flex flex-col items-center">
            <AnimatedNumber number={10000} />
            <label className="text-[1.5vh]">Year Of Experience</label>
          </div>
          <div className=" text-white text-[2vh] flex flex-col items-center">
            <AnimatedNumber number={24000} />
            <label className="text-[1.5vh]">People Reached</label>
          </div>
          <div className=" text-white text-[2vh] flex flex-col items-center">
            <AnimatedNumber number={5000} />
            <label className="text-[1.5vh]">Services & Plugins</label>
          </div>
        </div>
      </div>
      <Image
        src="/image/page-img/about.png"
        alt="Home Image"
        width={700}
        height={700}
      />
    </main>
  );
};

export default About;
