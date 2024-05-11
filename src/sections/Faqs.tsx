import React from "react";
import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = () => {
  const t = useTranslations("Index");
  return (
    <div className="max-w-[90%] md:max-w-[50%] mx-auto py-32">
      <h1 className="max-w-xl text-3xl md:text-5xl font-bold text-center mb-20 mx-auto">
        {t("faq.title")}
      </h1>
      <Accordion
        type="single"
        collapsible
        className="w-full rounded-lg overflow-hidden bg-gray-100 text-gray-700"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger
            className="py-4 px-6 font-bold hover:bg-gray-200 transition-colors duration-300"
            activeClassName="bg-gray-200"
          >
            What is the best way to build muscle?
          </AccordionTrigger>
          <AccordionContent className="py-4 px-6">
            To build muscle effectively, focus on progressive overload by gradually increasing the weight, reps, or resistance over time. Incorporate compound exercises that work multiple muscle groups simultaneously, like squats, deadlifts, and bench presses. Consume enough protein, typically 0.5-0.8 grams per pound of body weight, to support muscle growth and repair. Lastly, allow for proper rest and recovery between workouts to give your muscles time to recover and grow.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger
            className="py-4 px-6 font-bold hover:bg-gray-200 transition-colors duration-300"
            activeClassName="bg-gray-200"
          >
            How important is cardiovascular exercise?
          </AccordionTrigger>
          <AccordionContent className="py-4 px-6">
            Cardiovascular exercise is crucial for maintaining overall health and fitness. It helps strengthen your heart, improve circulation, and reduce the risk of various chronic diseases such as heart disease, stroke, and diabetes. Regular cardio exercise also aids in weight management, boosts endurance, and improves mental health by reducing stress and anxiety. Aim for at least 150 minutes of moderate-intensity cardio or 75 minutes of vigorous-intensity cardio per week, combined with strength training for optimal results.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger
            className="py-4 px-6 font-bold hover:bg-gray-200 transition-colors duration-300"
            activeClassName="bg-gray-200"
          >
            What are some healthy snack options for gym-goers?
          </AccordionTrigger>
          <AccordionContent className="py-4 px-6">
            Healthy snack options for gym-goers should provide a balance of protein, complex carbohydrates, and healthy fats to fuel workouts and support recovery. Some great options include Greek yogurt with berries and nuts, a protein smoothie with fruits and vegetables, hummus with whole-grain crackers or veggie sticks, hard-boiled eggs, or a handful of mixed nuts and dried fruit. These snacks provide essential nutrients, help maintain energy levels, and promote muscle repair and growth.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger
            className="py-4 px-6 font-bold hover:bg-gray-200 transition-colors duration-300"
            activeClassName="bg-gray/20"
          >
            How much water should I drink daily?
          </AccordionTrigger>
          <AccordionContent className="py-4 px-6">
            The recommended daily water intake can vary based on individual factors such as age, gender, activity level, and climate. However, a general guideline is to drink at least 8 cups (64 ounces) of water daily. For active individuals and athletes, it's essential to drink even more water to stay hydrated, especially before, during, and after exercise. Aim to drink water consistently throughout the day and listen to your body's thirst signals. Adequate hydration supports various bodily functions, aids in digestion, and helps regulate body temperature.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger
            className="py-4 px-6 font-bold hover:bg-gray-200 transition-colors duration-300"
            activeClassName="bg-gray/20"
          >
            What are the benefits of strength training?
          </AccordionTrigger>
          <AccordionContent className="py-4 px-6">
            Strength training offers numerous benefits for overall health and fitness. It helps build lean muscle mass, which in turn increases metabolism and supports fat loss. Regular strength training also increases bone density, reducing the risk of osteoporosis and fractures as we age. Additionally, it improves posture, balance, and coordination, reducing the likelihood of falls and injuries. Strength training can also boost mood and self-confidence, and reduce the risk of chronic diseases such as heart disease, diabetes, and certain types of cancer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger
            className="py-4 px-6 font-bold hover:bg-gray-200 transition-colors duration-300"
            activeClassName="bg-gray/20"
          >
            What is a balanced diet for an active lifestyle?
          </AccordionTrigger>
          <AccordionContent className="py-4 px-6">
            A balanced diet for an active lifestyle should include a variety of nutrient-dense foods from all food groups. Focus on lean proteins like chicken, fish, and legumes to support muscle repair and growth. Incorporate whole grains, fruits, and vegetables for essential vitamins, minerals, and fiber. Include healthy fats from sources like avocados, nuts, and olive oil for energy and nutrient absorption. Stay hydrated by drinking plenty of water and limiting sugary beverages. Portion control and meal timing are also important for fueling your active lifestyle and achieving your fitness goals.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faqs;