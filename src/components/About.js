import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className=" p-20">
      <div className="flex justify-center mb-20 text-4xl text-black font-bold">
        <u>What We Do</u>
      </div>

      <div className="text-2xl mb-20">
        It is our mission to leave your home looking better than it has ever
        been. At Clean Line Painting we strive for perfection in every project,
        hence Clean Line. Let me ask, have you ever hired painters and they just
        take forever? Or they get the job done fairly quick but their cut lines
        are just not right, god forbid any client requests contrasting colors.
        You will never have to worry about any of this again. We guarantee our
        lines and the flexibility for you to express your creative side.
      </div>

      <div className="flex mb-20">
        <Image
          className=" w-[1200px] h-[250px] object-cover  "
          src="/AboutImages/Stairwell.jpg"
          width={1000}
          height={500}
          alt="logo"
        />
        <Image
          className=" w-[570px] h-[250px] object-cover  "
          src="/AboutImages/HouseFront.jpg"
          width={1000}
          height={500}
          alt="logo"
        />
      </div>

      <div className="flex justify-between mb-20">
        <Image
          className=" w-[500px] h-[500px] object-cover  "
          src="/AboutImages/Entrance.jpg"
          width={1000}
          height={500}
          alt="logo"
        />

        <div className="text-center content-center text-6xl">
          Paint It Right
          <br />
          The First Time
        </div>

        <Image
          className=" w-[500px] h-[500px] object-cover  "
          src="/AboutImages/Kitchen.jpg"
          width={1000}
          height={500}
          alt="logo"
        />
      </div>

      <div className="grid grid-cols-3">
        <div className=" text-xl p-5 text-center place-content-center">
          "From the Heartland of British Columbia Canada, we strive to bring the
          look and feel of nature's beauty to your home."{" "}
        </div>

        <div className="relative col-span-2">
          <Image
            className=" w-full h-[550px] object-cover "
            src="/AboutImages/Canada.jpg"
            width={1000}
            height={500}
            alt="logo"
          />
          <div className="absolute top-[150px] left-[50px]">
            <div className="flex-col relative">
              <Image
                className=" w-[250px] h-[250px] object-cover  rounded-full "
                src="/AboutImages/me.jpg"
                width={1000}
                height={500}
                alt="logo"
              />

              <div className="bg-slate-900 text-white text-sm top-[200px] mx-auto rounded-full  p-2 px-4 text-center absolute">
                Sevren Roberge<br></br>Founder
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
