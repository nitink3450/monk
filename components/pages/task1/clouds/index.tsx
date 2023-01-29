import Image from "next/image";
import React from "react";

const Cloud = ({ height, width, flip, position }: any) => {
  return (
    <div className={`w-fit h-fit absolute -mt-[250px] sm:mt-0  ${position}`}>
      <Image
        src="/images/smallCloud.png"
        height={height}
        width={width}
        alt=""
        className={`object-cover ${flip && "transform -scale-x-100"}`}
      />
    </div>
  );
};

export default Cloud;
