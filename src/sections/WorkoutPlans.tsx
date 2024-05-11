"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import heroImage from "@/assets/images/heroImg.jpg";
import { Button } from "@/components/ui/button";
import ProductDisplay from "./ProductDisplay";

import image1 from "@/assets/images/image1.jpeg";
import image2 from "@/assets/images/image2.jpeg";

// Sample product data
const productData = [
  {
    image: image1,
    title: "Strength Training Plan",
    description:
      "Gain muscle and increase strength with our comprehensive strength training plan.",
    price: "99.99 USD",
    offer: "20% off",
    category: "strength",
  },
  {
    image: image2,
    title: "Cardio Conditioning Plan",
    description:
      "Improve your cardiovascular fitness and endurance with our cardio conditioning plan.",
    price: "79.99 USD",
    offer: "15% off",
    category: "cardio",
  },
  {
    image: image2,
    title: "Full Body Transformation Plan",
    description:
      "Achieve your fitness goals with our full body transformation plan combining strength training and cardio.",
    price: "149.99 USD",
    offer: "25% off",
    category: "strength",
  },
];

const WorkoutPlans = () => {
  const t = useTranslations("Index");
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tabName:string) => {
    setActiveTab(tabName);
  };

  const filteredProducts =
    activeTab === "all"
      ? productData
      : productData.filter((product) => product.category === activeTab);

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
            Embark on an intensive 6-month fitness program designed
            specifically for elite athletes to push their limits.
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
        <h1 className="max-w-xl text-3xl md:text-5xl font-bold text-center mt-10 mb-10 mx-auto">
          {t("workoutPlans.title")}
        </h1>
        <div className="container mb-12 flex justify-center  bg-gray/10 py-2 rounded-lg">
          <button
            className={`px-6 py-1 rounded-lg transition-colors duration-300 mr-4 ${
              activeTab === "all"
                ? "bg-green text-white"
                : "bg-green/10 text-green hover:bg-green/20"
            }`}
            onClick={() => handleTabClick("all")}
          >
            All
          </button>
          <button
            className={`px-4 py-1 rounded-lg transition-colors duration-300 mr-4 ${
              activeTab === "strength"
                ? "bg-green text-white"
                : "bg-green/10 text-green hover:bg-green/20"
            }`}
            onClick={() => handleTabClick("strength")}
          >
            Strength
          </button>
          <button
            className={`px-4 py-1 rounded-lg transition-colors duration-300 ${
              activeTab === "cardio"
                ? "bg-green text-white"
                : "bg-green/10 text-green hover:bg-green/20"
            }`}
            onClick={() => handleTabClick("cardio")}
          >
            Cardio
          </button>
        </div>
        <div className="flex flex-col space-y-32">
          {filteredProducts.map((product, index) => (
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