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
        been before. At Clean Line Painting we strive for perfection in every project,
        hence Clean Line. Let me ask, have you ever hired painters and they just
        take forever? Or they get the job done fairly quick but their cut lines
        are just not right, god forbid any client requests contrasting colors.
        You will never have to worry about any of this again. We guarantee our
        lines and the flexibility for you to express your creative side.
      </div>

      <div className="mb-20 max-w-full gap-10 flex place-content-center">
        <ExportedImage
          className=" w-2/3 h-[250px] object-cover rounded-lg hidden lg:flex"
          src="/AboutImages/Stairwell.jpg"
          width={1000}
          height={500}
          alt="logo"
        />
        <ExportedImage
          className=" w-full h-full lg:w-1/3 lg:h-[250px] object-cover rounded-lg flex"
          src="/AboutImages/HouseFront.jpg"
          width={1000}
          height={500}
          alt="logo"
        />
      </div>

      <div className="mb-20 w-full flex place-content-center flex-col lg:flex-row">
        <ExportedImage
          className=" w-full h-full lg:w-[275px] lg:h-[275px] xl:w-[450px] xl:h-full place-self-center object-cover  rounded-lg"
          src="/AboutImages/Entrance.jpg"
          width={1000}
          height={500}
          alt="logo"
        />

        <div style={myFont.style} className="  text-center text-alt text-2xl items-center p-10 relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-alt after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-alt md:my-32 my-24 sm:text-3xl md:text-4xl lg:text-2xl lg:before:bg-base lg:after:bg-base xl:text-4xl  "  >
          
            
              <span className="text-nowrap">Paint It Right</span>
              <br />
              The First Time
            
        </div>

        <ExportedImage
          className=" w-full h-full items-center object-cover place-self-center rounded-lg lg:w-[275px] lg:h-[275px] xl:w-[450px] xl:h-full"
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
