import React, { useState } from "react";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import { setItem } from "../localStorage/seItem/setItem";
import { useNavigate } from "react-router-dom";

const SignUpScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();
  const handleSumbit = async (e) => {
    e.preventDefault();
    await setItem("name", name);
    await setItem("email", email);
    history("/profile");
  };
  return (
    <div className="container lg:flex lg:flex-col lg:justify-center lg:items-center">
      <div className=" sm:min-w-full sm:min-h-full lg:flex  lg:justify-center lg:items-center  bg-[#F7F8F9]  ">
        <div className="lg:w-[375px] lg:h-[812px] lg:border-2 bg-[#F7F8F9]  lg:border-zinc-300">
          <div>
            <h1 className="mt-840px] ml-[20px] font-bold h-[69px] w-[188px] text-2xl">
              Create your PopX account
            </h1>
            <form>
              {" "}
              <div className="w-[335px] mt-8 h-[40px] ml-[20px] mx-auto ">
                <Input
                  label="Full Name"
                  placeholder="Ex: Marry Doe"
                  className="font-normal"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="w-[335px] mt-8 h-[40px] ml-[20px] mx-auto ">
                <Input
                  label="Phone number"
                  placeholder="Ex: 96.."
                  className="font-normal"
                />
              </div>
              <div className="w-[335px] mt-8 h-[40px] ml-[20px] mx-auto ">
                <Input
                  label="Email address"
                  placeholder="Ex : name@gmail.com"
                  className="font-normal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="w-[335px]  mt-8 h-[40px] ml-[20px] mx-auto ">
                <Input
                  label="PassWord"
                  type="password"
                  placeholder="password"
                  className="font-normal"
                />
              </div>
              <div className="w-[335px] mt-8 h-[40px] ml-[20px] mx-auto ">
                <Input
                  label="Company Name"
                  placeholder="Ex: Educase India"
                  className="font-normal"
                />
              </div>
              <p className="ml-[30px] mt-6  w-[125px] text-[13px] h-[15px]">
                Are you an Agency?*
              </p>
              <div className="flex">
                <div className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    className="rounded-full ml-[30px] mt-4"
                  />
                  <label className="ml-2 mt-2">Yes</label>
                </div>
                <div className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    className="rounded-full ml-[30px] mt-4"
                  />
                  <label className="ml-2 mt-2">No</label>
                </div>
              </div>
              <div className="w-[335px] h-[46px] ml-[20px] mt-32 mx-auto font-bold ">
                <Button
                  children="Create Account"
                  className="font-semibold bg-btClr1 text-white"
                  link="/profile"
                  onClick={(e) => handleSumbit(e)}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;
