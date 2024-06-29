import React from "react";
import ExportedImage from "next-image-export-optimizer";
import localFont from "next/font/local";

const myFont = localFont({src: "../../public/Fonts/Cinzel_Decorative/CinzelDecorative-Bold.ttf"})

export default function About() {
  return (
    <div id='About' className=" p-20 bg-base text-text">
      <div className="flex text-alt justify-center mb-16 text-3xl font-bold">
        <u style={myFont.style}>Why Us</u>
      </div>

      <div className="text-lg mb-20">
        It is our mission to leave your home looking better than it has ever
        been. At Clean Line Painting we strive for perfection in every project,
        hence Clean Line. Let me ask, have you ever hired painters and they just
        take forever? Or they get the job done fairly quick but their cut lines
        are just not right, god forbid any client requests contrasting colors.
        You will never have to worry about any of this again. We guarantee our
        lines and the flexibility for you to express your creative side.
      </div>

      <div className="mb-20 max-w-full flex-wrap ">
        <ExportedImage
          className=" w-[1200px] h-[250px] object-cover hidden "
          src="/AboutImages/Stairwell.jpg"
          width={1000}
          height={500}
          alt="logo"
        />
        <ExportedImage
          className=" w-[570px] h-[250px] object-cover rounded-lg flex"
          src="/AboutImages/HouseFront.jpg"
          width={1000}
          height={500}
          alt="logo"
        />
      </div>

      <div className="mb-20 max-w-full">
        <ExportedImage
          className=" w-[500px] h-[250px] object-cover  rounded-lg"
          src="/AboutImages/Entrance.jpg"
          width={1000}
          height={500}
          alt="logo"
        />

        <div style={myFont.style} className=" text-center text-lg content-center p-10">
          Paint It Right
          <br />
          The First Time
        </div>

        <ExportedImage
          className=" w-[500px] h-[250px] object-cover  rounded-lg"
          src="/AboutImages/Kitchen.jpg"
          width={1000}
          height={500}
          alt="logo"
        />
      </div>

      <div className="">
        <div className=" text-lg p-5 text-center place-content-center mb-5">
          &ldquo;From the Heartland of British Columbia Canada, we strive to
          bring the look and feel of nature&apos;s beauty to your home.&ldquo;
        </div>

        <div className="grid col-span-2 row-span-1 items-center">
          <ExportedImage
            className=" w-full h-[350px] rounded-lg object-cover row-start-1 row-end-1 col-start-1 col-end-1"
            src="/AboutImages/Canada.jpg"
            width={1000}
            height={500}
            alt="logo"
          />
          <div className="relative row-start-1 row-end-1 col-start-1 col-end-1 m-10">
            <ExportedImage
              className=" w-[175px] h-[175px] object-cover  rounded-full  "
              src="/AboutImages/me.jpg"
              width={1000}
              height={500}
              alt="logo"
            />
            <div className="bg-slate-900 text-white text-xs bottom-0 rounded-full absolute p-1 px-4 text-center ">
              Sevren Roberge<br></br>Founder
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
