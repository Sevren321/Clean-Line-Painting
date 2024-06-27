"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects() {
  const settings = {
    
    infinite: true,

    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          
        },
      },
    ],
  };

  return (
    <div className="bg-sky-950 p-20">
      <div className="text-3xl flex font-bold mb-16 justify-center text-white">
        <u>Projects</u>
      </div>

      <div className="m-w-100 container mx-auto ">
        <Slider {...settings}>
          <div>
            <Image
              className=" w-[250px] h-[250px] object-cover  "
              src="/ProjectImages/1.png"
              width={1000}
              height={500}
              alt="logo"
            />
          </div>
          <div>
            <Image
              className=" w-[250px] h-[250px] object-cover  "
              src="/ProjectImages/2.png"
              width={1000}
              height={500}
              alt="logo"
            />
          </div>
          <div>
            <Image
              className=" w-[250px] h-[250px] object-cover  "
              src="/ProjectImages/3.jpg"
              width={1000}
              height={500}
              alt="logo"
            />
          </div>
          <div>
            <Image
              className=" w-[250px] h-[250px] object-cover  "
              src="/ProjectImages/4.jpg"
              width={1000}
              height={500}
              alt="logo"
            />
          </div>
          <div>
            <Image
              className=" w-[250px] h-[250px] object-cover  "
              src="/ProjectImages/5.jpg"
              width={1000}
              height={500}
              alt="logo"
            />
          </div>
          <div>
            <Image
              className=" w-[250px] h-[250px] object-cover  "
              src="/ProjectImages/6.jpg"
              width={1000}
              height={500}
              alt="logo"
            />
          </div>
          <div>
            <Image
              className=" w-[250px] h-[250px] object-cover  "
              src="/ProjectImages/7.png"
              width={1000}
              height={500}
              alt="logo"
            />
          </div>
          <div>
            <Image
              className=" w-[250px] h-[250px] object-cover  "
              src="/ProjectImages/8.jpg"
              width={1000}
              height={500}
              alt="logo"
            />
          </div>
          <div>
            <Image
              className=" w-[250px] h-[250px] object-cover  "
              src="/ProjectImages/9.jpg"
              width={1000}
              height={500}
              alt="logo"
            />
          </div>
          <div>
            <Image
              className=" w-[250px] h-[250px] object-cover  "
              src="/ProjectImages/10.jpg"
              width={1000}
              height={500}
              alt="logo"
            />
          </div>
          <div>
            <Image
              className=" w-[250px] h-[250px] object-cover  "
              src="/ProjectImages/11.jpg"
              width={1000}
              height={500}
              alt="logo"
            />
          </div>
          <div>
            <Image
              className=" w-[250px] h-[250px] object-cover  "
              src="/ProjectImages/12.jpg"
              width={1000}
              height={500}
              alt="logo"
            />
          </div>
          <div>
            <Image
              className=" w-[250px] h-[250px] object-cover  "
              src="/ProjectImages/13.jpg"
              width={1000}
              height={500}
              alt="logo"
            />
          </div>
          <div>
            <Image
              className=" w-[250px] h-[250px] object-cover  "
              src="/ProjectImages/14.jpg"
              width={1000}
              height={500}
              alt="logo"
            />
          </div>
          <div>
            <Image
              className=" w-[250px] h-[250px] object-cover  "
              src="/ProjectImages/16.jpg"
              width={1000}
              height={500}
              alt="logo"
            />
          </div>
          <div>
            <Image
              className=" w-[250px] h-[250px] object-cover  "
              src="/ProjectImages/17.jpg"
              width={1000}
              height={500}
              alt="logo"
            />
          </div>
          <div>
            <Image
              className=" w-[250px] h-[250px] object-cover  "
              src="/ProjectImages/18.jpg"
              width={1000}
              height={500}
              alt="logo"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}
