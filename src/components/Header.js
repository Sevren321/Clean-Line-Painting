import React from "react";
import Image from "next/image";
import localFont from "next/font/local";

const myFont = localFont({src: "../../public/Fonts/Cinzel_Decorative/CinzelDecorative-Bold.ttf"})

export default function Header() {
  return (
    <div>
      <div className="bg-alt  text-text text-center text-md min-h-8 grid grid-flow-col grid-cols-3">
        <div className="place-self-center  p-2 mr-4">
          <div className="p-2 ml-20 hidden">Call Us Today!</div>
          <div className="items-center hidden">805-406-9107</div>
          <div className="flex items-center group bg-base hover:bg-white rounded-full cursor-pointer px-10 py-2">
            <a href="tel:805-406-9107">
              <button>
                <i className="fa-solid fa-phone group-hover:text-slate-900"></i>
              </button>
            </a>
          </div>
        </div>

        <div className="flex  bg-base justify-around">
          <div className="flex items-center">
            <button>
              <i className="fa-brands fa-facebook"></i>
            </button>
          </div>
          <div className="flex items-center">
            <button>
              <i className="fa-brands fa-instagram"></i>
            </button>
          </div>
          <div className="flex items-center">
            <button>
              <i class="fa-solid fa-envelope"></i>
            </button>
          </div>
        </div>

        <div className=" items-center mr-20 hidden p-2">*Free Estimates*</div>
      </div>

      <div className="bg-base text-text">
        <div className="flex p-4">
          <Image
            className=" ml-10 py-4 object-cover rounded min-h-[100px] min-w-[100px] p- "
            src="/CLPLogoWhite1.png"
            width={200}
            height={200}
            alt="logo"
          />
          <div style={myFont.style} className="text-4xl  font-extrabold  items-center leading-relaxed tracking-widest p-5 flex">
            CLEAN<br/>LINE<br/>PAINTING
          </div>
        </div>
      </div>
      <div>
        <ul className="p-2 flex justify-center gap-10 pb-5">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
