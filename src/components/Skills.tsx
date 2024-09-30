import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaNodeJs } from 'react-icons/fa';
import { RiFlutterFill, RiNextjsFill } from 'react-icons/ri';
import { BiLogoMongodb, BiLogoPostgresql } from 'react-icons/bi';
import { FaNpm } from "react-icons/fa";

const skills = [
  { icon: <FaHtml5 size={100} />, label: 'HTML5' },
  { icon: <FaCss3Alt size={100} />, label: 'CSS3' },
  { icon: <FaJsSquare size={100} />, label: 'JavaScript' },
  { icon: <FaReact size={100} />, label: 'React' },
  { icon: <RiNextjsFill size={100} />, label: 'Next.js' },
  { icon: <FaNodeJs size={100} />, label: 'Node.js' },
  { icon: <RiFlutterFill size={100} />, label: 'Flutter' },
  { icon: <BiLogoMongodb size={100} />, label: 'MongoDB' },
  { icon: <BiLogoPostgresql size={100} />, label: 'PostgreSQL' },
  { icon: <FaNpm size={100} />, label: 'NPM' },
];

const Skills = () => {
  return (
    <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32'>
      <div className='text-white max-w-[950px] mx-auto p-8 text-center'>
        <h2 className='text-6xl font-bold mb-4'>What do I do?</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {skills.map((skill, index) => (
            <div
              className='h-[220px] w-full flex flex-col justify-center items-center bg-white/10 p-4 rounded-xl transition-transform duration-200 hover:scale-105'
              key={index}
            >
              <div className='flex items-center justify-center h-full'>
                {skill.icon}
              </div>
              <p className='mt-2 text-lg font-semibold'>{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
