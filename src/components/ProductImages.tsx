"use client";

import { url } from "inspector";
import Image from "next/image";
import { useState } from "react";

// const images = [
//   {
//     id: 1,
//     url: "https://images.pexels.com/photos/9558695/pexels-photo-9558695.jpeg?auto=compress",
//   },
//   {
//     id: 2,
//     url: "https://images.pexels.com/photos/9558567/pexels-photo-9558567.jpeg?auto=compress",
//   },
//   {
//     id: 3,
//     url: "https://images.pexels.com/photos/9558588/pexels-photo-9558588.jpeg?auto=compress",
//   },
//   {
//     id: 4,
//     url: "https://images.pexels.com/photos/9558583/pexels-photo-9558583.jpeg?auto=compress",
//   },
// ];

const ProductImages = ({items}:{items: any}) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={items[index].image?.url}
          alt=""
          fill
          sizes="(max-width: 600px) 50vw, (max-width: 1200px) 30vw, 50vw"
          className="object-contain rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {items.map((item:any, i:number) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={item._id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={item.image?.url}
              alt=""
              fill
              sizes="(max-width: 600px) 50vw, (max-width: 1200px) 30vw, 50vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
