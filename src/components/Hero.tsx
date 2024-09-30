"use client";
import Image from "next/image";
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";
import { motion } from "framer-motion";
import profilepic from "../assets/profilepic.jpg";

const Hero = () => {
  return (
    <div className="py-24 relative overflow-clip" style={{ background: 'linear-gradient(to bottom, #000, #2B1942 35%, #8F5C55 60%, #DBAF6E 80%)' }}>
      <div className="absolute rounded-[50%] w-[3000px] h-[1300px] bg-black top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_70%,#2B1942)]"></div>

      <div className="relative">
        <div className="sm:text-8xl text-6xl font-bold text-center">
          <h1 className="text-[#98B4CE]">Hi, I am</h1>
          <h1 className="text-[#E48A57]">Shivansh Pandey</h1>
        </div>

        <motion.div className="absolute left-[280px] top-[170px]" drag>
          <Image
            src={cursor}
            height={190}
            width={190}
            alt="cursor"
            className="h-auto w-auto sm:block hidden"
            draggable="false"
          />
        </motion.div>

        <motion.div className="absolute right-[220px] top-[20px]" drag>
          <Image
            src={lightning}
            height={120}
            width={120}
            alt="cursor"
            className="h-auto w-auto sm:block hidden"
            draggable="false"
          />
        </motion.div>


      <p className="text-center text-xl max-w-[800px] p-4 mx-auto mt-8 text-white/80">
        I am a web developer with expertise in Next.js and React.js, focused on
        creating dynamic and responsive applications. I also have experience in
        app development with Flutter, broadening my skill set for cross-platform
        solutions. Passionate about collaboration and staying current with
        industry trends, I aim to build efficient, user-friendly applications
        that make a meaningful impact.
      </p>

      <Image
        src={profilepic}
        className="h-auto w-auto my-8 mx-auto rounded-full border-4 border-orange-400 outline outline-2 outline-orange-600"
        alt="profile pic"
        height={180}
        width={180}
      />

    </div>
    </div>
  );
};

export default Hero;
