import React from "react";
import localFont from "next/font/local";

const myFont = localFont({src: "../../public/Fonts/Cinzel_Decorative/CinzelDecorative-Bold.ttf"})

export default function Services() {
  return (
    <div id='Services' className="bg-primary p-20">
      <div className="flex justify-center text-3xl mb-16 font-bold text-alt">
        <u style={myFont.style}>Our Services</u>
      </div>

      <div className="grid grid-cols-2 justify-items-center gap-x-10">
        <div className="">
          <div className="text-white border-b text-center text-xl font-bold mb-4">
            Pressure Washing / Cleaning
          </div>
          <div className="text-white text-sm flex justify-center">
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

        <div className="">
          <div className="text-white border-b text-xl text-center font-bold mb-4">
            Interior / Exterior Painting
          </div>

          <div className="text-white flex text-sm justify-center">
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
