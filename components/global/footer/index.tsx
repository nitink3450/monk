import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="font-Manrope text-[0.875rem] font-medium  text-[#878B95] leading-[1rem] tracking-[-0.01em] bottom-[1.875rem] left-0 right-0 flex justify-center gap-[1.875rem] mt-[30px] border relative">
      <div className="z-10">About Us</div>
      <div className="z-10">Privacy Policy</div>
      <div className="z-10">Terms & Conditions</div>
      <div className="absolute transform cloud25 -scale-x-100 -z-1 left-14  h-fit w-fit">
        <Image
          height={137}
          width={304}
          src={"/images/bigCloud.png"}
          alt="clouds"
        />
      </div>
      <div className="absolute cloud25 -z-1 right-[-60px] h-fit w-fit">
        <Image
          height={137}
          width={304}
          src={"/images/bigCloud.png"}
          alt="clouds"
        />
      </div>
      <div className="absolute -z-1 cloud25 left-[600px] top-[-10px]  transform -scale-x-100  h-fit w-fit">
        <Image
          height={137}
          width={304}
          src={"/images/bigCloud.png"}
          alt="clouds"
        />
      </div>
      <div className="absolute -z-1 cloud25 left-[440px] top-[-30px]  h-fit w-fit">
        <Image
          height={137}
          width={304}
          src={"/images/bigCloud.png"}
          alt="clouds"
        />
      </div>
    </div>
  );
};

export default Footer;
