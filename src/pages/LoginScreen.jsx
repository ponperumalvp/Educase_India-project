import React, { useState } from "react";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import { setItem } from "../localStorage/seItem/setItem";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const history = useNavigate();
  const handleSumbit = async (e) => {
    e.preventDefault();
    await console.log(setItem("email", email));
    history("/profile");
  };

  return (
    <div className="container lg:flex lg:flex-col lg:justify-center lg:items-center">
      <div className=" sm:min-w-full sm:min-h-full lg:flex  lg:justify-center lg:items-center  bg-[#F7F8F9]  ">
        <div className="lg:w-[375px] lg:h-[812px] lg:border-2 bg-[#F7F8F9]  lg:border-zinc-300">
          <div>
            <h1 className="mt-[40px] ml-[20px] font-bold h-[69px] w-[188px] text-2xl">
              Signin to your PopX account
            </h1>
            <p className="text-#1D2226 opacity-[0.6] w-[232px] h-[48px] ml-[20px] mt-1 text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
            <div className="w-[335px]  h-[40px] ml-[20px] mx-auto ">
              <Input
                label="Email Address"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {email}
            <div className="w-[335px]  h-[40px] ml-[20px] mx-auto ">
              <Input
                label="Password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {password}
            <div className="w-[335px] h-[46px] ml-[20px] mt-10 mx-auto font-bold ">
              <Button
                children="Login"
                className="font-semibold bg-borderClr"
                onClick={(e) => handleSumbit(e)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
