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
        className="keen-slider col-start-1 col-end-1 row-start-1 row-end-1"
      >
        <div className="keen-slider__slide">
          <Image
            className=" w-full h-[880px]"
            src="/CarouselImages/1.jpg"
            width={1000}
            height={500}
            alt="logo"
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            className=" w-full h-[880px]  "
            src="/CarouselImages/2.jpg"
            width={1000}
            height={500}
            alt="logo"
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            className=" w-full h-[880px]"
            src="/CarouselImages/3.jpg"
            width={1000}
            height={500}
            alt="logo"
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            className=" w-full h-[880px]  "
            src="/CarouselImages/4.jpg"
            width={1000}
            height={500}
            alt="logo"
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            className=" w-full h-[880px]  "
            src="/CarouselImages/5.png"
            width={1000}
            height={500}
            alt="logo"
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            className=" w-full h-[880px]  "
            src="/CarouselImages/6.jpg"
            width={1000}
            height={500}
            alt="logo"
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            className=" w-full h-[880px] "
            src="/CarouselImages/7.jpg"
            width={1000}
            height={500}
            alt="logo"
          />
        </div>
      </div>
      <div className=" p-2 bg-white/75 w-[500px] h-[500px] rounded-lg col-start-1 col-end-1 row-start-1 row-end-1 z-10">
        <div className=" flex justify-center text-center text-4xl p-10 mt-5">
          Expert
          <br /> Painting
          <br /> Solutions
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-400">Get In Touch</button>
        </div>
      </div>
    </div>
  );
}
