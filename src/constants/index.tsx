
import  image2  from '@/assets/images/image2.jpeg';
import { StaticImageData } from 'next/image';
import  image1  from '@/assets/images/alphaCustomPlan.jpeg';

const specialPath = [ "/dashboard",
  "/login",
  "/register",
  "/forgot-password",
];


interface ProductData {
  image: {
    src: StaticImageData;
    alt: string;
  };
  title: string;
  description: string;
  price: string;
  offer: string;
}

const productData: ProductData[] = [
  {
    image: {
      src: image2,
      alt: "Fitness Equipment",
    },
    title: "Alpha Custom plan",
    description:
      "Embark on an intensive 6-month fitness program designed specifically for elite athletes to push their limits.",
    price: "€ 2,500.00",
    offer: "Latest Offer",
  },
  {
    image: {
      src: image1,
      alt: "Fitness Equipment",
    },
    title: "Alpha Custom plan",
    description:
      "Embark on an intensive 6-month fitness program designed specifically for elite athletes to push their limits.",
    price: "€ 2,500.00",
    offer: "Latest Offer",
  },
];

export {specialPath, productData}