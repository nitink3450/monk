import React from "react";
import Input from "@/components/pages/task1/input";
import Link from "next/link";
import BtnWrapper from "@/components/Animations/btn";

const Form = () => {
  return (
    <>
      <div className="shadow-[0_24px_34px_rgba(0,0,0,0.04)] z-[100] m-3 sm:m-0 px-2 sm:px-[65px] py-[31px] flex flex-col gap-5 font-Manrope justify-center items-center w-full sm:w-[450px] bg-[#FFFFFF] rounded-[10px]">
        <div className="font-semibold text-[24px] leading-[33px] mt-[37px] text-[#2D2D2D]">
          Hello, Again!
        </div>
        <p className="font-normal text-[13px] text-center leading-[18px] text-[#666666] -mt-[15px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <Input label={"Cusomer ID"} type={"text"} />
        <Input label={"Email"} type={"Email"} />
        <Input label={"Password"} type={"Password"} />
        <div className="flex justify-end items-center w-full -mt-2">
          <p className="font-normal text-[12px]  leading-[16px] text-[#666666] cursor-pointer">
            Forgot Password?
          </p>
        </div>
        <BtnWrapper>
          <button className="w-full sm:w-[320px] h-[48px] border text-white rounded-[8px] mt-[73px] bg-[#25A0DA]">
            Sign In
          </button>
        </BtnWrapper>
        <p className="text-[#666666] font-normal mt-[6px] text-[13px] leading-[18px]">
          Don{"’"}t have an account?{" "}
          <Link href={"#"} className=" text-[#23A1DD]">
            Register
          </Link>
        </p>
      </div>
    </>
  );
};

export default Form;
