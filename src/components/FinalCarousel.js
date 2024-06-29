import React from "react";
import ExportedImage from "next-image-export-optimizer";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import localFont from "next/font/local";

const myFont = localFont({src: "../../public/Fonts/Cinzel_Decorative/CinzelDecorative-Bold.ttf"})

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
          <ExportedImage
            className=" w-full h-full"
            src="/CarouselImages/1.jpg"
            width={1000}
            height={500}
            alt="logo"
          />
        </div>
        <div className="keen-slider__slide">
          <ExportedImage
            className=" w-full h-full  "
            src="/CarouselImages/2.jpg"
            width={1000}
            height={500}
            alt="logo"
          />
        </div>
        <div className="keen-slider__slide">
          <ExportedImage
            className=" w-full h-full"
            src="/CarouselImages/3.jpg"
            width={1000}
            height={500}
            alt="logo"
          />
        </div>
        <div className="keen-slider__slide">
          <ExportedImage
            className=" w-full h-full  "
            src="/CarouselImages/4.jpg"
            width={1000}
            height={500}
            alt="logo"
          />
        </div>
        <div className="keen-slider__slide">
          <ExportedImage
            className=" w-full h-full  "
            src="/CarouselImages/5.png"
            width={1000}
            height={500}
            alt="logo"
          />
        </div>
        <div className="keen-slider__slide">
          <ExportedImage
            className=" w-full h-full  "
            src="/CarouselImages/6.jpg"
            width={1000}
            height={500}
            alt="logo"
          />
        </div>
        <div className="keen-slider__slide">
          <ExportedImage
            className=" w-full h-full "
            src="/CarouselImages/7.jpg"
            width={1000}
            height={500}
            alt="logo"
          />
        </div>
      </div>
      <div className="grid w-1/2 h-1/2 bg-text/75  rounded-lg col-start-1 col-end-1 row-start-1 row-end-1 z-10 p-3 ">
        <div  className=" flex font-extrabold p-3 justify-center wrap text-center text-md text-2xl ">
          High-End Custom Home Finishing 
        </div>
        <div className="content-end justify-self-center">
          <a href="#Contact"><button className="bg-base text-white py-2   px-3 rounded-full ">Get In Touch</button></a>
        </div>
      </div>
    </div>
  );
}
