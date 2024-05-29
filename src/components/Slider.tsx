"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Oversize Sale Collections",
    description: "Sale! Up to 10% off!",
    img: "https://images.pexels.com/photos/4066288/pexels-photo-4066288.jpeg?auto=compress",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-orange-100",
  },
  {
    id: 2,
    title: "Crewneck Sale Collections",
    description: "Sale! Up to 10% off!",
    img: "https://images.pexels.com/photos/5560390/pexels-photo-5560390.jpeg?auto=compress",
    url: "/",
    bg: "bg-gradient-to-r from-orange-100 to-blue-100",
  },
  {
    id: 3,
    title: "Croptop Sale Collections",
    description: "Sale! Up to 10% off!",
    img: "https://images.pexels.com/photos/7582114/pexels-photo-7582114.jpeg?auto=compress",
    url: "/",
    bg: "bg-gradient-to-r from-blue-100 to-yellow-50",
  },
];
const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(()=> {
    const interval = setInterval(() => {
        setCurrent(prev=>(prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform : `translateX(-${current * 100}vw)`}}
        >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/* text container */}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="rounded-md bg-black text-white py-3 px-4">
                  SHOP NOW
                </button>
              </Link>
            </div>
            {/* image container */}
            <div className="h-1/2 xl:w-1/2 xl:h-full relative">
              <Image
                src={slide.img}
                alt=""
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
