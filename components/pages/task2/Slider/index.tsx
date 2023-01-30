import React, { useState } from "react";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { AiOutlineSound, AiTwotoneHeart } from "react-icons/ai";
import Image from "next/image";
import BtnWrapper from "@/components/Animations/btn";
import Card from "@/components/pages/task2/card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VidSlider = () => {
  const [counter, setCounter] = useState(100);
  const [isliked, setIsliked] = useState(false);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    vertical: true,
    verticalSwiping: true,
  };
  
  return (
    <>
      <Slider className=" h-fit overflow-hidden " {...settings}>
        {[...Array(12)].map((item, i) => {
          return (
            <div
              key={i}
              className="relative bg-black flex h-[100vh] overflow-hidden"
            >
              <video
                src="/vidios/cakee.mp4"
                controls
                autoPlay
                muted
                loop
                className="z-0 h-fit w-fit"
              />
              <div className="ml-[10px]">
                <div className="mt-[30px] top-0 absolute z-10 flex justify-between w-screen  ">
                  <div className="flex justify-center items-center gap-2">
                    <div className="h-[20px] w-[20px] bg-[#3d3d3d] rounded-full flex justify-center items-center text-[10px] text-white">
                      <Image
                        alt="h"
                        src="/icons/user.png"
                        height={20}
                        width={20}
                      />
                    </div>
                    <div className="font-Poppins font-normal leading-[18px] tracking-[0.0015em] text-[12px] text-[#FFFEFE]">
                      Cakes & Cheese
                    </div>
                    <button className="py-2 px-4 font-Poppins font-normal bg-[#2c3033] rounded-[32px] text-[12px] text-[#FFFEFE]">
                      Follow
                    </button>
                  </div>
                  <div className="flex justify-center items-center gap-2 mr-[30px]">
                    <HiOutlineDotsCircleHorizontal className="text-white h-6 w-6" />
                    <AiOutlineSound className="text-white h-6 w-6" />
                  </div>
                </div>
                <div className=" mt-[10px] font-Poppins font-normal leading-[18px] tracking-[0.004em] text-[12px] text-[#FFFEFE] top-16 absolute z-10">
                  Get your fresh birthday cake today
                </div>
                <div className="text-white absolute right-2 bottom-[200px] flex flex-col gap-5 z-10">
                  <div className="flex w-fit flex-col items-center justify-center">
                    <BtnWrapper>
                      <div
                        onClick={() => {
                          setCounter(counter + 1);
                          setIsliked(true);
                        }}
                        className="bg-[#a29d95] bg-opacity-30 h-[36px] w-[36px] rounded-[8px] flex justify-center cursor-pointer items-center"
                      >
                        <AiTwotoneHeart
                          className={`text-white ${
                            isliked && "text-red-500"
                          } h-[25px] w-[25px]`}
                        />
                      </div>
                    </BtnWrapper>
                    <span>{counter}</span>
                  </div>
                  <div className="flex w-fit flex-col items-center justify-center">
                    <BtnWrapper>
                      <div className="bg-[#a29d95] bg-opacity-30 h-[36px] w-[36px] rounded-[8px] cursor-pointer flex justify-center items-center">
                        <Image
                          alt="h"
                          src="/icons/chat.png"
                          height={20}
                          width={20}
                        />
                      </div>
                    </BtnWrapper>
                    <span>200</span>
                  </div>
                  <BtnWrapper>
                    <div className="bg-[#a29d95] bg-opacity-30 h-[36px] w-[36px] rounded-[8px] cursor-pointer flex justify-center items-center">
                      <Image
                        alt="h"
                        src="/icons/Logout.png"
                        height={20}
                        width={20}
                      />
                    </div>
                  </BtnWrapper>
                </div>
                <Card />
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default VidSlider;
