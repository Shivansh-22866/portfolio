"use client";

import Button from "@/components/ButtonComponent";
import { FC, MouseEvent, useEffect, useState } from "react";
import {motion, useAnimate} from 'motion/react'
import Link from "next/link";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Selected Works",
    href: "#projects",
  },
  {
    label: "Achievements",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navScope, navAnimate] = useAnimate()

  useEffect(() => {
    if(isOpen) {
      navAnimate(navScope.current, {
        height: '100%',
      }, {
        duration: 0.7
      })
    }
    if(!isOpen) {
      navAnimate(navScope.current, {
        height: '0%',
      }, {
        duration: 0.7
      })
    }
  }, [isOpen, navScope, navAnimate])

  const handleClickMobileNavItem = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsOpen(false)

    const url = new URL(e.currentTarget.href)
    const hash = url.hash

    const target = document.querySelector(hash)

    if(!target) return;

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <header>
      <div className="fixed top-0 left-0 w-full h-0 overflow-hidden bg-stone-900 z-10" ref={navScope}>
        <nav className="mt-20 flex flex-col">
          {
            navItems.map(({label, href}) => (
              <a key={label} href={href} className="text-stone-200 border-t border-stone-800 last:border-b py-8 group/nav-item relative isolate" onClick={ handleClickMobileNavItem}>
                <div className="container !max-w-full flex items-center justify-between">
                <span className="text-3xl group-hover/nav-item:pl-4 transition-all duration-500">{label}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>

                </div>
                <div className="absolute w-full h-0 bg-stone-800 group-hover/nav-item:h-full transition-all duration-500 bottom-0 -z-10"></div>
              </a>
            ))
          }
        </nav>
      </div>
      <div className="fixed top-0 left-0 w-full mix-blend-difference backdrop-blur-md z-10">
        <div className="container !max-w-full">
          <div className="flex justify-between h-20 items-center">
            <div>
              <a href="">
                <span className="text-xl font-bold uppercase text-white">
                  Shivansh&nbsp; Pandey
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full z-10">
        <div className="container !max-w-full">
          <div className="flex justify-end h-20 items-center gap-4">
            <div className="flex items-center gap-4" onClick={() => setIsOpen(!isOpen)}>
              <div className="size-11 border border-stone-400 rounded-full inline-flex items-center justify-center bg-stone-200 relative">
                <div className="flex w-full items-center justify-center relative">
                <motion.div
                  className="h-[2px] w-[18px] bg-current bottom-[4px] absolute"
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    translateY: isOpen ? 4: 0,
                  }}
                  style={{ transformOrigin: '50% 50%' }} // Center rotation for top line
                />
                <motion.div
                  className="h-[2px] w-[18px] bg-current bottom-[4px] absolute"
                  animate={{
                    rotate: isOpen ? -45 : 0,
                    translateY: isOpen ? 4: 0
                  }}
                  style={{ transformOrigin: '50% 50%' }} // Center rotation for bottom line
                />
                <motion.div
                  className="h-[2px] w-[18px] top-[4px] bg-current absolute"
                  animate={{
                    opacity: isOpen ? 0: 1,
                  }}
                />
                </div>
              </div>
            </div>
            <Button variants="primary" className="hidden md:inline-flex">
                <Link href={"mailto:shivanshp0418@gmail.com"}>
                  Contact me
                </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
