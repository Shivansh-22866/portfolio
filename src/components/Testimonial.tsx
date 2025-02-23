import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image'
import { HTMLAttributes, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { usePresence, motion } from "motion/react";
import useTextReveal from '@/hooks/useTextReveal';

const Testimonial = (props: {
    quote: string;
    name: string;
    role: string;
    platform: string;
    imagePositionY: number;
    image: string | StaticImport;
    className?: string
} & HTMLAttributes<HTMLDivElement>) => {

    const {quote, name, role, platform, imagePositionY, image, className, ...rest} = props

    const {scope: quoteScope, entrance: quoteAnimate, exitAnimation: quoteExit} = useTextReveal()
    const {scope: citeScope, entrance: citeAnimate, exitAnimation: citeExit} = useTextReveal()

    const [isPresent, safeToRemove] = usePresence()

    useEffect(() => {
        if(isPresent) {
            quoteAnimate().then(() => {
                citeAnimate()
            })
        }
        else {
            Promise.all([
                quoteExit(),
                citeExit()
            ]).then(() => {
                safeToRemove()
            })
        }
    }, [isPresent, quoteAnimate, citeAnimate, quoteExit, citeExit, safeToRemove])

    return (<div className={twMerge("grid md:grid-cols-5 md:gap-8 md:items-center lg:gap-16)", className)} {...rest}>
    <div className="aspect-square md:aspect-[9/16] md:col-span-2 relative">
      <motion.div className='absolute h-full bg-stone-900' initial={{width: "100%"}} animate={{width: "0%"}} exit={{width: "100%"}} transition={{duration: 0.5}}></motion.div>
      <Image src={image} alt={name} className="size-full object-cover" style={{
        objectPosition: `50% ${imagePositionY * 100}%`
      }} />
    </div>
    <blockquote className="md:col-span-3">
        <div className="text-3xl md:text-5xl lg:text-6xl mt-8 md:mt-0" ref={quoteScope}>
          <span>&ldquo;</span>
          {quote}
          <span>&rdquo;</span>
        </div>
        <cite className="mt-4 md:mt-8 not-italic block md:text-lg lg:text-xl" ref={citeScope}>{name}, {role} at {platform}</cite>
    </blockquote>
  </div>)
}

export default Testimonial