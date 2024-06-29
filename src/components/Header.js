import React from "react";
import ExportedImage from "next-image-export-optimizer";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../public/Fonts/Cinzel_Decorative/CinzelDecorative-Bold.ttf",
});

export default function Header() {
  return (
    <div>
      <div className="bg-secondary  text-text text-center text-md min-h-8 grid grid-flow-col grid-cols-3">
        <div className="place-self-center  p-2 mr-4">
          <div className="p-2  hidden ">Call Us Today!</div>
          <div className="items-center hidden  ">805-406-9107</div>
          <a href="tel:805-406-9107">
            <div className="flex items-center group bg-base hover:bg-text rounded-full cursor-pointer px-10 py-2">
              <button>
                <i className="fa-solid fa-phone group-hover:text-base"></i>
              </button>
            </div>
          </a>
        </div>

        <div className="flex items-center justify-center ">
          <div className="flex justify-center cursor-pointer hover:bg-text group min-w-[60px] h-full">
            <button>
              <i className="fa-brands group-hover:text-white text-alt fa-facebook"></i>
            </button>
          </div>
          <div className="flex justify-center cursor-pointer hover:bg-alt  group min-w-[60px] h-full">
            <button>
              <i className="fa-brands group-hover:text-white text-alt fa-instagram"></i>
            </button>
          </div>
          <a
            href="mailto:sr2012evo@gmail.com"
            className="flex justify-center hover:bg-base group cursor-pointer min-w-[60px] h-full"
          >
            <div className="flex ">
              <button>
                <i class="fa-solid text-alt group-hover:text-white fa-envelope"></i>
              </button>
            </div>
          </a>
        </div>

        <div className=" none items-center flex w-full bg-base opacity-0  justify-center">*Free Estimates*</div>
      </div>

     
        <div className="grid bg-base grid-cols-3">
          <div className="place-self-center	">
            <ExportedImage
              className="m-5 object-cover rounded min-h-[50px] min-w-[50px] "
              src="/CLPLogoWhite1.png"
              width={130}
              height={130}
              alt="logo"
            />
          </div>
          <div
            style={myFont.style}
            className="text-3xl  text-alt ml-10 sm:ml-0 leading-loose tracking-widest sm:text-5xl col-start-2 col-end-4 place-content-center"
          >
            CLEAN LINE PAINTING
          </div>
        </div>
      
      <div className=" flex justify-center items-center  text-text bg-secondary ">
        <div className="w-[90px] py-3 cursor-pointer justify-center flex hover:bg-alt hover:text-secondary hover:rounded-t-full">
          <a href="#About">
            <button className="">About</button>
          </a>
        </div>
        <div className="w-[90px] py-3 justify-center flex hover:bg-alt hover:text-base hover:rounded-t-full">
          <a href="#Services">
            <button className="">Services</button>
          </a>
        </div>
        <div className="w-[90px] py-3 justify-center flex hover:bg-alt hover:text-base hover:rounded-t-full">
          <a href="#Projects">
            <button className="">Projects</button>
          </a>
        </div>
      </div>
    </div>
  );
}
