import React from "react";
import Button from "../components/button/Button";

const LandingPage = () => {
  return (
    <div className="container lg:flex lg:flex-col lg:justify-center lg:items-center">
      <div className=" sm:min-w-full sm:min-h-full lg:flex  lg:justify-center lg:items-center  bg-[#F7F8F9]  ">
        <div className="lg:w-[375px] lg:h-[812px] lg:border-2 bg-[#F7F8F9]  lg:border-zinc-300">
          <div className="">
            <h1 className="font-bold flex mt-[549px] ml-[20px] w-[231px] h-[33px]">
              Welcome to PopX
            </h1>
            <p className="mt-4 w-[232px] ml-[20px] h-[48px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
            <div className="w-[335px] h-[46px] ml-[20px] mt-8 mx-auto ">
              <Button
                children="Create Account"
                className="font-semibold bg-btClr1 text-tc1 "
                link="/signup"
              />
            </div>
            <div className="w-[335px] h-[46px] ml-[20px] mt-[1px] mx-auto font-bold ">
              <Button
                children="Already Registered? Login"
                className="font-semibold bg-btClr2 text-tc2"
                link="/login"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
