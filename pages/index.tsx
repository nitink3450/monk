import CloudWrapper from "@/components/Animations/btn";
import PlaneWrapper from "@/components/Animations/plane";
import Footer from "@/components/global/footer";
import CarauselComp from "@/components/pages/task1/Carausel";
import Cloud from "@/components/pages/task1/clouds";
import Form from "@/components/pages/task1/form";
import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Task 1</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[url('/images/background.jpg')] bg-no-repeat lg:bg-[100%,100%] overflow-hidden">
        <div className="text-black h-fit lg:h-screen flex justify-around items-center gap-10 lg:gap-0 px-3 flex-col lg:flex-row py-12 relative">
          {/* left side */}
          <div className=" gap-[10px] sm:mt-[60px] h-fit w-fit flex justify-between items-center flex-col ">
            <PlaneWrapper>
              <div className="w-fit  z-10 h-fit">
                <Image
                  src="/images/plane.png"
                  height={196}
                  width={535}
                  alt=""
                  className="object-cover z-10"
                />
              </div>
            </PlaneWrapper>

            <div className=" w-[300px] sm:w-[590px]">
              <CarauselComp />
            </div>
          </div>

          {/* right side form */}
          <Form />
          <Cloud
            height={19}
            width={38}
            position={"top-[150px] cloud25 left-[580px]"}
            flip={true}
          />
          <Cloud
            height={19}
            width={38}
            position={"top-[180px] cloud25 left-[70px]"}
            flip={true}
          />
          <Cloud
            height={32}
            width={64}
            position={"top-[250px] cloud25  left-[750px]"}
            flip={false}
          />
          <Cloud
            height={15}
            width={30}
            position={"top-[320px] z-1 cloud20  left-[350px]"}
            flip={true}
          />
          <Cloud
            height={50}
            width={100}
            position={"top-[320px] cloud20 left-[550px]"}
            flip={false}
          />
          <Cloud
            height={32}
            width={64}
            position={"top-[320px] cloud10 right-[10px]"}
            flip={true}
          />
          <Cloud
            height={31}
            width={62}
            position={"top-[350px] cloud10 left-[100px]"}
            flip={true}
          />

          <Cloud
            height={31}
            width={62}
            position={"top-[400px] cloud10 left-[730px]"}
            flip={true}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
