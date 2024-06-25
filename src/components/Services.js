import React from "react";

export default function Services() {
  return (
    <div className="bg-slate-800 p-20">
      <div className="flex justify-center text-4xl mb-20 font-bold text-white">
        <u>Our Services</u>
      </div>

      <div className="grid grid-cols-2 justify-items-center">
        <div className="">
          <div className="text-white border-b text-2xl font-bold mb-4">
            Pressure Washing / Cleaning
          </div>
          <div className="text-white flex justify-center">
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
          <div className="text-white border-b text-2xl font-bold mb-4">
            Interior / Exterior Painting
          </div>

          <div className="text-white flex justify-center">
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
