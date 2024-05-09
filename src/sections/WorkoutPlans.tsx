"use client";
import React from "react";
import Image from "next/image";
import heroImage from "@/assets/images/heroImg.jpg";
import { Button } from "@/components/ui/button";
import ProductDisplay from "./ProductDisplay";
import { productData } from "@/constants";

const WorkoutPlans = () => {
  return (
    <div className="px-4">
      <div className="p-0 grid grid-cols-1 md:grid-cols-12 bg-[#e2e8f0] bg-gradient-to-r from-gray-100 to-gray-300 h-auto md:h-[38rem] container mx-auto rounded-[40px] overflow-hidden">
        <div className="col-span-7 order-1 md:order-1">
          <Image
            src={heroImage}
            alt="Fitness Equipment"
            className="w-full h-auto md:h-full object-cover object-left-top"
            placeholder="blur"
          />
        </div>
        <div className="col-span-5 order-2 md:order-2 pt-8 md:pt-[8rem] text-center md:text-left px-4 md:px-10 lg:px-12 xl:px-16 mb-8 md:mb-0">
          <small className="bg-orange/20 border border-orange px-4 py-[2px] rounded-md text-xs text-orange">
            Latest Offer
          </small>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 break-words">
            Alpha Elite 6-Month
          </h1>
          <p className="word-break-normal">
            Embark on an intensive 6-month fitness program designed specifically
            for elite athletes to push their limits.
          </p>
          <div className="my-4">
            <h3 className="font-bold">€ 2,500.00</h3>
            <small>Flexible payment options available</small>
          </div>
          <Button className="bg-green text-white px-6 py-3 rounded-md hover:bg-green/90 transition-colors duration-300">
            Enroll Now
          </Button>
        </div>
      </div>

      <div>
        <h1 className="max-w-xl text-3xl md:text-5xl font-bold text-center mt-10 mb-32 mx-auto">
          Our Workouts and Nutrition Plans
        </h1>
        <div className="flex flex-col space-y-32">
          {productData.map((product, index) => (
            <ProductDisplay
              key={index}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
              offer={product.offer}
              order={index % 2 === 0 ? "first" : "second"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlans;
