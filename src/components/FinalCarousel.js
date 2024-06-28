import React from "react";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export default function FinalCarousel() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <div className="main grid grid-cols-1 grid-rows-1 place-items-center">
      <div
        ref={sliderRef}
        className="keen-slider col-start-1 col-end-1 row-start-1 row-end-1 max-h-[800px]"
      >
        <div className="keen-slider__slide">
          <Image
            className=" w-full h-full"
            src="/CarouselImages/1.jpg"
            width={1000}
            height={500}
            alt="logo"
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            className=" w-full h-full  "
            src="/CarouselImages/2.jpg"
            width={1000}
            height={500}
            alt="logo"
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            className=" w-full h-full"
            src="/CarouselImages/3.jpg"
            width={1000}
            height={500}
            alt="logo"
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            className=" w-full h-full  "
            src="/CarouselImages/4.jpg"
            width={1000}
            height={500}
            alt="logo"
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            className=" w-full h-full  "
            src="/CarouselImages/5.png"
            width={1000}
            height={500}
            alt="logo"
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            className=" w-full h-full  "
            src="/CarouselImages/6.jpg"
            width={1000}
            height={500}
            alt="logo"
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            className=" w-full h-full "
            src="/CarouselImages/7.jpg"
            width={1000}
            height={500}
            alt="logo"
          />
        </div>
      </div>
      <div className=" p-2 bg-text/75  rounded-lg col-start-1 col-end-1 row-start-1 row-end-1 z-10 max-w-full">
        <div className=" flex justify-center wrap text-center text-md p-10 min-h-[200px]">
          Expert Painting Solution You Can Count On. 
        </div>
        <div className="flex justify-center pb-3">
          <button className="bg-base text-white py-2  px-3 rounded-full ">Get In Touch</button>
        </div>
      </div>
    </div>
  );
}
