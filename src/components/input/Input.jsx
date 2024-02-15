import React from "react";

const Input = ({ label, type, placeholder, onChange, name, className }) => {
  return (
    <div className="h-2 my-4 w-[100%] ">
      <label className="absolute ml-6 bg-white w-max flex  text-tc3 lg:absolute lg:left-[20px] lg:bg-white lg:w-max lg:text-center lg:flex lg:justify-center lg:ml-[600px] z-10">
        {label}
      </label>
      <div className="w-[100%] p-2">
        <input
          type={type}
          name={name}
          required
          placeholder={placeholder}
          onChange={onChange}
          className={`"relatiive lg:relative rounded-[6px] border border-solid text-textClr bg-bgClr1 p-2 border-borderClr w-[100%] mt-1 " + ${className}`}
        />
      </div>
    </div>
  );
};

export default Input;
