import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Input = ({ label, type }: any) => {
  const [show, setShow] = useState(false);
  const [typeChange, setTypeChange] = useState(type);
  const handleShow = () => {
    setShow(!show);
    setTypeChange(type);
  };
  const handleHide = () => {
    setShow(!show);
    setTypeChange("text");
  };
  return (
    <>
      <label className="relative cursor-pointer w-fit font-Manrope">
        <input
          type={typeChange}
          placeholder=" "
          className="h-[48px] w-[90vw] sm:w-[320px] px-6 text-[13px] font-normal text-[#454545] bg-[#FAFAFA] border-[#D8D8D8] border-[1px] rounded-[8px] border-opacity-50 outline-none focus:border-[#454545] placeholder-[#666666] placeholder transition duration-200"
        />
        {type === "Password" && (
          <>
            {show ? (
              <FiEye
                onClick={handleShow}
                className="absolute top-4 h-4 w-4 right-4"
              />
            ) : (
              <FiEyeOff
                onClick={handleHide}
                className="absolute top-4 h-4 w-4 right-4"
              />
            )}
          </>
        )}
        <span className="text-[13px] text-[#454545] text-opacity-80 bg-[#FAFAFA] absolute left-5 top-3 px-1 flex justify-between transition duration-200 input-text cursor-text">
          {label}
        </span>
      </label>
    </>
  );
};

export default Input;
