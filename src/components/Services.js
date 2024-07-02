import React from "react";
import localFont from "next/font/local";

const myFont = localFont({src: "../../public/Fonts/Cinzel_Decorative/CinzelDecorative-Bold.ttf"})

export default function Services() {
  return (
    <div id='Services' className="bg-primary p-20">
      <div className="flex justify-center text-center text-3xl mb-16 font-bold text-alt xl:text-4xl">
        <u style={myFont.style}>Our Services</u>
      </div>

      <div className="sm:grid sm:grid-cols-2 justify-items-center gap-x-20">
        <div className="">
          <div className="text-white border-b-2 sm:text-xl max-w-64 mx-auto text-center text-lg sm:max-w-72 font-semibold mb-4 text-nowrap	xl:text-2xl">
            Pressure Washing / Cleaning
          </div>
          <div className="text-white text-sm flex justify-center xl:text-lg">
            <ul className="list-disc">
              <li>Asphalt and Clay Shingles</li>
              <li>Moss and Algae Removal</li>
              <li>Wood and Vinyl Siding </li>
              <li>Concrete and Driveway</li>
              <li>Brick and Stone</li>
              <li>Metal</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 sm:mt-0 ">
          <div className="text-white border-b-2 sm:text-xl text-lg text-center font-semibold mb-4 max-w-60 mx-auto sm:text-nowrap xl:text-2xl">
            Interior / Exterior Painting
          </div>

          <div className="text-white flex text-sm justify-center xl:text-lg">
            <ul className="list-disc">
              <li>Priming</li>
              <li>Stucco and Siding</li>
              <li>Brick Stone and Concrete</li>
              <li>Walls, Ceiling, Trim</li>
              <li>Stain and Clear Coating</li>
              <li>Metal</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
