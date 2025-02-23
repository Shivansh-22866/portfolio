"use client";

import { FC, useEffect, useRef, useState, MouseEvent } from "react";
import heroImage from "@/assets/images/heroimage.png";
import Image from "next/image";
import Button from "@/components/ButtonComponent";
import { motion, useScroll, useTransform } from "motion/react";
import useTextReveal from "@/hooks/useTextReveal";

const Hero: FC = () => {
  const scrollingDiv = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollingDiv,
    offset: ["start end", "end end"],
  });

  const portraitWidth = useTransform(scrollYProgress, [0, 1], ["100%", "240%"]);

  const { scope, entrance } = useTextReveal();
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const [isOpen, setIsOpen] = useState(false);
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });

  const handleClickNavItem = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);

    const url = new URL(e.currentTarget.href);
    const hash = url.hash;

    const target = document.querySelector(hash);

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    entrance();
  }, [entrance]);

  return (
    <section id="hero">
      <div className="grid md:grid-cols-12 md:h-screen items-stretch sticky top-0">
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="container !max-w-full">
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl mt-40 md:mt-0 px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              ref={scope}
            >
              Your First Step Into My Portfolio
            </motion.h1>
            <div className="flex flex-col md:flex-row md:items-center mt-10 items-start gap-6">
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1.75,
                }}
              >
                <Button
                  variants="secondary"
                  afterIcon={
                    <div className="overflow-hidden size-5">
                      <div className="h-5 w-10 flex group-hover/button:-translate-x-1/2 transition-transform duration-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                          />
                        </svg>
                      </div>
                    </div>
                  }
                >
                  <a href="#projects" onClick={handleClickNavItem}>
                    View my work
                  </a>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 2.25,
                }}
              >
                <a href="#about" onClick={handleClickNavItem}>
                <Button variants="text">Let&apos;s Talk</Button>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 relative">
          <motion.div
            className="mt-20 md:mt-0 md:size-full md:absolute md:right-0 max-md:!w-full relative"
            style={{
              width: portraitWidth,
            }}
          >
            <Image
              src={heroImage}
              alt="My Portrait"
              className="size-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      <div className="md:h-[200vh]" ref={scrollingDiv}></div>
    </section>
  );
};

export default Hero;
