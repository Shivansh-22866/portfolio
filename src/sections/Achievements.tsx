'use client'

import { FC, useRef, useState } from "react";
import image1 from "@/assets/images/hackverse.png";
import image2 from "@/assets/images/hack2future.png";
import image3 from "@/assets/images/isolve.png";
import image4 from "@/assets/images/sih.png"
import image5 from "@/assets/images/hacktoberfest.png"
import { useScroll, motion, useTransform, AnimatePresence } from "motion/react";
import Testimonial from "@/components/Testimonial";


/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const testimonials = [
  {
    name: "Hackverse 5.0",
    platform: "NITK Suratkhal",
    role: "Backend Development",
    quote:
      "Developed the backend for the Hackathon project: PrivacyGuard in the Hackverse 5.0, our team being in the top 10 finalists",
    image: image1,
    imagePositionY: 0.5,
  },
  {
    name: "Hack2Future",
    platform: "IIIT Dharwad",
    role: "Frontend Development",
    quote:
      "Worked on the UI/UX of the Hackathon project: AutoML in the Hack2Future, our team being in the top 10 finalists",
    image: image2,
    imagePositionY: 0.5,
  },
  {
    name: "I-Solve, Bangalore Police",
    platform: "NMIT Bangalore",
    role: "Frontend Development",
    quote:
      "Worked on the Frontend for the Hackathon Project concerned with traffic signals, our team being in top 4",
    image: image3,
    imagePositionY: 0.5,
  },
  {
    name: "Smart India Hackathon, 2023",
    platform: "New Horizon College, Bangalore",
    role: "Frontend Development",
    quote:
      "Worked on the UI/UX of the healthcare app concerned with physical health and tracking user progress",
    image: image4,
    imagePositionY: 0.55,
  },
  {
    name: "Hacktoberfest, 2024",
    platform: "Hacktoberfest",
    role: "Contributor",
    quote:
      "Demonstrated commitment to open-source by submitting 9 successful pull requests.",
    image: image5,
    imagePositionY: 0.55,
  },
];

const Testimonials: FC = () => {
  const titleRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: titleRef,
    offset: ['start end', 'end start']
  })
  const transformTop = useTransform(scrollYProgress, [0,1], ['0%', '-15%'])
  const transformBottom = useTransform(scrollYProgress, [0,1], ['0%', '15%'])
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const handleClickPrev = () => {
    setTestimonialIndex(curr => {
      if(curr == 0) {
        return testimonials.length - 1;
      }

      else {
        return curr - 1;
      }
    })
  }

  const handleClickNext = () => {
    setTestimonialIndex(curr => {
      if(curr == testimonials.length - 1) {
        return 0;
      }

      else {
        return curr + 1;
      }
    })
  }

  return <section id="testimonials" className="section">
    <h2 className="text-4xl md:text-7xl lg:text-8xl flex flex-col overflow-hidden" ref={titleRef}>
      <motion.span className="whitespace-nowrap" style={{
        x: transformBottom
      }}>Some of my acheivements that I made throughout my career</motion.span>
      <motion.span className="whitespace-nowrap self-end text-red-orange-500" style={{
        x: transformTop
      }}>Some of my acheivements that I made throughout my career</motion.span>
    </h2>
    <div className="container">
      <div className="mt-20">
        <AnimatePresence mode="wait" initial={false}>
        {
          testimonials.map(({name, platform, role, quote, image, imagePositionY}, index) => index === testimonialIndex && (
              <Testimonial name={name} platform={platform} role={role} quote={quote} image={image} imagePositionY={imagePositionY} key={name} />
          ))
        }
        </AnimatePresence>
      </div>
      <div className="flex gap-4 mt-6 lg:mt-10">
        <button className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full hover:bg-red-orange-500 hover:text-white hover:border-red-orange-500 duration-500 transition-all" onClick={handleClickPrev}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>

        </button>
        <button className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full hover:bg-red-orange-500 hover:text-white
        hover:border-red-orange-500 duration-500 transition-all" onClick={handleClickNext}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>

        </button>
      </div>
    </div>
  </section>;
};

export default Testimonials;
