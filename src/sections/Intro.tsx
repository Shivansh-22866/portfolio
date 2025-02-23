"use client";

import { motion, stagger, useAnimate, useInView } from "motion/react";
import { FC, Fragment, useEffect, useRef } from "react";
import useTextReveal from "@/hooks/useTextReveal";
import { SparkleIcon } from "lucide-react";

const Intro: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scope, entrance } = useTextReveal();
  const inView = useInView(scope, {
    once: true,
  });

  useEffect(() => {
    if (inView) {
      entrance();
    }
  }, [inView, entrance]);

  const words = [
    "Performant",
    "Reliable",
    "Creative",
    "Innovative",
    "Passionate",
    "Experienced",
    "Responsive",
    "Optimized",
    "Efficient",
    "Dynamic",
    "Efficient",
    "Sustainable",
    "Frontend",
  ];

  return (
    <section
      id="intro"
      className="section mt-12 md:mt-16 lg:mt-20"
      ref={sectionRef}
    >
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:w-[80%] lg:text-8xl" ref={scope}>
          I am a full stack developer with a passion for crafting exceptional
          digital experiences.
        </h2>
      </div>

      <div className="py-16 lg:py-24 overflow-clip">
        <div className="bg-gradient-to-r from-red-500 to-orange-600 overflow-hidden -mx-1">
          <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex gap-4 py-3 -translate-x-0">
              <div className="flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-duration:15s]">
                {[...new Array(2)].fill(0).map((_, idx) => (
                  <Fragment>
                    {words.map((word) => (
                      <div
                        key={word}
                        className="inline-flex gap-4 items-center"
                      >
                        <span className="text-gray-100 uppercase font-extrabold text-sm">
                          {word}
                        </span>
                        <SparkleIcon
                          className="size-6 text-gray-100 rotate-180 animate-spin"
                          fill="#fff"
                        />
                      </div>
                    ))}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
