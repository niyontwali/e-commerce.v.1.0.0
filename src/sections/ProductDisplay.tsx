import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface ProductDisplayProps {
  image: string | StaticImageData;
  title: string;
  description: string;
  price: string;
  offer: string;
  order: "first" | "second";
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({
  image,
  title,
  description,
  price,
  offer,
  order,
}) => {
  const imageOrder: 1 | 2 = order === "first" ? 2 : 1;
  const contentOrder: 1 | 2 = order === "first" ? 1 : 2;

  return (
    <div className="p-0 grid grid-cols-1 md:grid-cols-12 bg-gradient-to-r from-gray-100 to-gray-300 h-auto md:h-[38rem] container mx-auto">
      <div
        className={`col-span-6 order-1 md:order-${imageOrder} rounded-[40px] overflow-hidden`}
      >
        <Image
          src={image}
          alt={description}
          className="w-full h-auto md:h-full object-cover object-left-top"
          width={0}
          height={0}
          placeholder="blur"
        />
      </div>
      <div
        className={`col-span-6 order-2 md:order-${contentOrder} pt-8 md:pt-[9rem] text-center md:text-left px-4 md:px-10 lg:px-12 xl:px-16 mb-8 md:mb-0 flex flex-col items-center`}
      >
        <small className="bg-orange/20 border border-orange px-4 py-[2px] rounded-md text-xs text-orange">
          {offer}
        </small>
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 break-words text-black">
            {title}
          </h1>
          <p className="word-break-normal text-black">{description}</p>
        </div>
        <div className="my-4 flex flex-col items-center">
          <h3 className="font-bold">{price}</h3>
          <small>Flexible payment options available</small>
        </div>
        <Button className="bg-green text-white px-6 py-3 rounded-md hover:bg-green/90 transition-colors duration-300">
          Enroll Now
        </Button>
      </div>
    </div>
  );
};

export default ProductDisplay;