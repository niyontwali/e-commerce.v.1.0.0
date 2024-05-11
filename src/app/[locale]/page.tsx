import type { Metadata } from "next";

import { useTranslations } from "next-intl";

import WorkoutPlans from "@/sections/WorkoutPlans";
import Faqs from "@/sections/Faqs";
import ContactUs from "@/sections/ContactUs";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {

  return (
    <main>
      <section id="workout-plans">
        <WorkoutPlans />
      </section>
      <section id="faqs">
        <Faqs />
      </section>
      <section id="contact-us">
        <ContactUs />
      </section>
    </main>
  );
}
