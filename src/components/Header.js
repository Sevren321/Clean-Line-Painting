import React from "react";

import Image from "next/image";

export default function Header() {
  return (
    <div>
      <div className="bg-orange-600 text-white text-xl flex justify-between">
        <div className="p-2  flex ml-20">
          Call Us Today! &nbsp; &nbsp; 805-406-9107
        </div>
        <div className="flex items-center mr-20 p-2">*Free Estimates*</div>
      </div>

      <div className="bg-sky-950 text-orange-600">
        <div className="flex justify-center p-4">
          <Image
            className=" object-cover rounded "
            src="/CleanLinePaintingLogo.png"
            width={150}
            height={100}
            alt="logo"
          />
        </div>

        <div className="justify-center text-5xl font-extrabold p-5 flex">
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
