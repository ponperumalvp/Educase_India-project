import React from "react";
import EllipseImg from "../assets/Ellipse 114.png";
import GroupImg from "../assets/Group 1585.png";
import { getItem } from "../localStorage/getItem/getItem";
const Profile = () => {
  const email = getItem("email");
  const name = getItem("name");
  return (
    <div className="container lg:flex lg:flex-col lg:justify-center lg:items-center">
      <div className=" sm:min-w-full sm:min-h-full lg:flex  lg:justify-center lg:items-center  bg-[#F7F8F9]  ">
        <div className="lg:w-[375px] lg:h-[812px] lg:border-2 bg-[#F7F8F9]  lg:border-zinc-300">
          <div className="h-[68px] shadow-lg">
            <h5 className="mt-840px] ml-[20px]  h-[22px] w-[146px] mt-6 ">
              Account Settings
            </h5>
          </div>
          <div className="flex items-center gap-8 ml-[20px] mt-10">
            <div className="flex w-[76px] h-[76px]">
              <img
                src={EllipseImg}
                alt="Ellipse image"
                className="relative mt-4"
              />

              <img
                src={GroupImg}
                alt="Group image"
                className="absolute ml-12 mt-14 z-10 "
              />
            </div>
            <div>
              {!name ? (
                <h4 className="h-[18px] w-[73px]">Ponperumal</h4>
              ) : (
                <h4 className="h-[18px] w-[73px]">{name}</h4>
              )}

              {!email ? (
                <h4 className="h-[17px] w-[118px]">ponperumal1998@gmail.com</h4>
              ) : (
                <h4 className="h-[17px] w-[118px]">{email}</h4>
              )}
            </div>
          </div>
          <p className="text-#1D2226 opacity-[0.6] w-[337px] h-[63px] ml-[20px] mt-10 text-[14px]">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
