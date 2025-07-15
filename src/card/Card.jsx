import React from 'react';
import java  from "../image/Javaicon.png";
import { GrLocation } from "react-icons/gr";

const Card = () => {
  return (
    <>
    <div className="">
            <div className="relative w-[500px] h-[140px] rounded-[10px]  overflow-hidden 
                          before:absolute before:top-[-50%] before:right-[-50%] before:bottom-[-50%] before:left-[-50%] 
                          before:bg-[conic-gradient(transparent,transparent,#FFFFFF)] before:animate-spin-slow">
              <div className="absolute flex space-x-10 items-center  top-[5px] right-[5px] bottom-[5px] left-[5px] 
                              rounded-[10px] px-4 bg-gradient-to-tr from-blue-950 to-blue-800">
                <img src={java} alt="Tailwind Logo" className="h-[50px]"/>
                <div className="text-white flex flex-col space-y-2">
                    <h1>(2023-2024)</h1>
                    <h2 className="font-bold text-xl">Hall Booking Console </h2>
                    <div className="flex items-center space-x-2 text-yellow-300">
                        <GrLocation />
                        <p>ISTAD</p>
                    </div>
                </div>
              </div>
            </div>
    </div>
    </>
  );
};

export default Card;
