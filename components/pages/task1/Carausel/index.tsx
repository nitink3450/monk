import React from "react";
import { Carousel } from "antd";
const CarauselComp = () => {
  const contentStyle: React.CSSProperties = {
    color: "#00000",
    textAlign: "start",
    background: "transperent",
    fontSize: "35px",
    fontWeight: 500,
    fontFamily: "Manrope",
    lineHeight: "48px",
  };
  return (
    <>
      <Carousel autoplay>
        {[...Array(3)].map((item: any, i: any) => {
          return (
            <div key={i} className="">
              <span className="text-[35px] font-Manrope font-medium relative top-12 left-[-2px]">
                “
              </span>
              <div className="p-3">
                <div style={contentStyle} className="sm:h-[144px] h-fit">
                  We have been using this service to book flights and can
                  {"’"}t imagine working without it.
                  <span className="tracking-[-0.05em]">{"’’"}</span>
                </div>
                <p className="font-normal mt-[30px] text-[18px] text-black">
                  Olivia
                </p>
                <p className="font-normal text-[18px] text-black">
                  Brand Manager, Yatra
                </p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default CarauselComp;
