import React from "react";

import Image from "next/image";

export default function Header() {
  return (
    <div>
      <div className="bg-alt text-text text-center text-md flex ">
        <div className="p-2  flex ml-20">
          Call Us Today!
        </div>
        <div className="items-center flex">805-406-9107</div>
        <div className="flex items-center mr-20 p-2">*Free Estimates*</div>
      </div>

      <div className="bg-base text-alt">
        <div className="flex justify-center p-4">
          <Image
            className=" object-cover rounded "
            src="/CleanLinePaintingLogo.png"
            width={150}
            height={100}
            alt="logo"
          />
        </div>

        <div className="justify-center text-4xl font-extrabold text-center p-5 flex">
          CLEAN LINE PAINTING
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
    </div>
  );
}
