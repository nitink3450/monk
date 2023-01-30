import Image from "next/image";
import React from "react";
import { Carousel } from "antd";
const Card = () => {
  return (
    <>
      <Carousel autoplay className="card bottom-[150px] absolute z-10 ">
        {[...Array(4)].map((item, i) => {
          return (
            <div key={i} className="flex">
              <div className="flex  mx-auto flex-row w-fit">
                <div className="h-fit w-fit">
                  <Image
                    alt="cake"
                    src="/images/cake1.png"
                    height={68}
                    width={64}
                  />
                </div>
                <div className="p-[12px] text-white font-Poppins bg-black bg-opacity-50">
                  <p className="font-normal text-[12px]">Monster Energy</p>
                  <p className="font-normal text-[10px]">500gm</p>
                  <div className="font-normal flex flex-row relative gap-3 w-[190px] text-[12px]">
                    <div>Rs 1599</div>
                    <div className="text-[#BEFD4F]">Rs 1299</div>
                    <div className=" absolute bottom-0 right-0 h-fit w-fit">
                      <Image
                        alt="plus"
                        src="/icons/Plus.png"
                        height={30}
                        width={30}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default Card;
