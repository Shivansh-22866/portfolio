"use client";

import { FC, useEffect, MouseEvent } from "react";
import Button from "@/components/ButtonComponent";
import useTextReveal from "@/hooks/useTextReveal";
import { useInView } from "motion/react";

const navItems = [
  {
    href: "#hero",
    label: "Home",
  },

  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#testimonials",
    label: "Achievements",
  },
  {
    href: "#faqs",
    label: "Faqs",
  },

  {
    href: "#contact",
    label: "Contact",
  },
];


const Footer: FC = () => {
  const { scope, entrance } = useTextReveal();
  const inView = useInView(scope);

  useEffect(() => {
    if (inView) {
      entrance();
    }
  }, [inView, entrance]);

  const handleClickNavItem = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const url = new URL(e.currentTarget.href);
    const hash = url.hash;

    const target = document.querySelector(hash);

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer className="bg-stone-900 text-white">
      <div className="container">
        <div className="section">
          <div className="flex items-center gap-3">
            <div className="size-3 rounded-full bg-green-400 animate-pulse"></div>
            <span className="uppercase">Contact for further questions</span>
          </div>
          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2
                id="contact"
                className="text-4xl mt-8 md:text-7xl lg:text-8xl font-extralight"
                ref={scope}
              >
                Let&apos;s work together and create something amazing
              </h2>
              <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-col">
              <a href="mailto:shivanshp0418@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Button
                    variants="secondary"
                    className="mt-8"
                    afterIcon={
                      <div className="size-6 overflow-hidden">
                        <div className="w-12 h-6 flex group-hover/button:-translate-x-1/2 transition-transform duration-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </div>
                      </div>
                    }
                  >
                    shivanshp0418@gmail.com
                  </Button>
                </a>
              </div>
            </div>
            <div>
              <nav className="flex flex-col md:items-end gap-8 mt-16 md:mt-0">
                {navItems.map(({ href, label }) => (
                  <a href={href} key={label} onClick={handleClickNavItem}>
                    <Button variants="text" className="text-lg">
                      {label}
                    </Button>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <p className="py-16 text-white/30 text-sm">
          Copyright &copy; Shivansh Pandey &bull; All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
