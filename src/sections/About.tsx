import Button from '@/components/ButtonComponent';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import Image from 'next/image';
import HTMLIcon from "@/assets/images/html.png";
import CSSIcon from "@/assets/images/css.png"
import JavascriptIcon from "@/assets/images/js.png"
import ReactIcon from '@/assets/images/react.png';
import Tailwind from "@/assets/images/tailwind.png";
import GitIcon from '@/assets/images/git.png';
import GithubIcon from '@/assets/images/github.png';
import MongoDBIcon from '@/assets/images/MongoDB.png';
import NextIcon from '@/assets/images/next.png';
import PostgreSQLIcon from '@/assets/images/postgres.png';
import ClerkIcon from '@/assets/images/clerk.png'
import DrizzleIcon from '@/assets/images/drizzle.svg'
import TypeScriptIcon from '@/assets/images/ts.png'
import ZodIcon from '@/assets/images/zod.svg'
import CIcon from '@/assets/images/c-logo.png'
import DockerIcon from '@/assets/images/docker.png'
import KubernetesIcon from '@/assets/images/kubernetes.svg'
import PrismaIcon from '@/assets/images/prisma.png'
import FlutterIcon from "@/assets/images/flutter.png"
import { Fragment } from 'react';

const About = () => {
    const toolBoxList = [
        {
            name: "HTML",
            icon: <Image src={HTMLIcon} alt="HTML" width={50} height={50} />
        },
        {
            name: "CSS",
            icon: <Image src={CSSIcon} alt="HTML" width={50} height={50} />
        },
        {
            name: "Javascript",
            icon: <Image src={JavascriptIcon} alt="HTML" width={50} height={50} />
        },
        {
            name: "React",
            icon: <Image src={ReactIcon} alt="HTML" width={50} height={50} />
        },
        {
            name: "Tailwind CSS",
            icon: <Image src={Tailwind} alt="HTML" width={50} height={50} />
        },
        {
            name: "Git",
            icon: <Image src={GitIcon} alt="HTML" width={50} height={50} />
        },
        {
            name: "Github",
            icon: <Image src={GithubIcon} alt="HTML" width={50} height={50} />
        },
        {
            name: "MongoDB",
            icon: <Image src={MongoDBIcon} alt="HTML" width={50} height={50} />
        },
        {
            name: "Next.js",
            icon: <Image src={NextIcon} alt="HTML" width={50} height={50} />
        },
        {
            name: "PostgreSQL",
            icon: <Image src={PostgreSQLIcon} alt="HTML" width={50} height={50} />
        },
        {
            name: "Clerk",
            icon: <Image src={ClerkIcon} alt="HTML" width={50} height={50} />
        },
        {
            name: "TypeScript",
            icon: <Image src={TypeScriptIcon} alt="HTML" width={50} height={50} />
        },
        {
            name: "Zod",
            icon: <Image src={ZodIcon} alt="HTML" width={50} height={50} />
        },
        {
            name: "Drizzle ORM",
            icon: <Image src={DrizzleIcon} alt="HTML" width={50} height={50} />
        },
        {
            name: "Prisma",
            icon: <Image src={PrismaIcon} alt="HTML" width={50} height={50} />
        },
        {
            name: "C++",
            icon: <Image src={CIcon} alt="HTML" width={50} height={50} />
        },
        {
            name: "Docker",
            icon: <Image src={DockerIcon} alt="HTML" width={50} height={50} />
        },
        {
            name: "Kubernetes",
            icon: <Image src={KubernetesIcon} alt="HTML" width={50} height={50} />
        },
        {
            name: "Flutter",
            icon: <Image src={FlutterIcon} alt="HTML" width={50} height={50} />
        }

    ]
  return (
    <div id="about" className="section">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl text-center mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Contact Profiles Card */}
          <div className="bg-current border-transparent border-2 hover:border-2 hover:scale-105 hover:border-red-orange-500 transition-all duration-300 shadow-lg rounded-lg p-6">
            <h3 className="text-xl text-white font-semibold mb-4">Contact Profiles</h3>
            <ul className="space-y-4">
              <li className="flex items-center group/contact">
                <Linkedin className="mr-3 text-white group-hover/contact:text-red-orange-500 transition-colors duration-300" />
                <a href="https://www.linkedin.com/in/shivansh-pandey-5a6319282" target="_blank" rel="noopener noreferrer" className="text-white">
                    <Button variants="text" className="ml-auto">LinkedIn</Button>
                </a>
              </li>
              <li className="flex items-center group/contact">
                <Github className="mr-3 text-white group-hover/contact:text-red-orange-500 transition-colors duration-300" />
                <a href="https://github.com/Shivansh-22866" target="_blank" rel="noopener noreferrer" className="text-white">
                    <Button variants="text" className="ml-auto">GitHub</Button>
                </a>
              </li>
              <li className="flex items-center group/contact">
                <Mail className="mr-3 text-white group-hover/contact:text-red-orange-500 transition-colors duration-300" />
                <a href="mailto:shivanshp0418@gmail.com" className="text-white">
                    <Button variants="text" className="ml-auto">Email</Button>
                </a>
              </li>
              <li className="flex items-center group/contact">
                <Instagram className="mr-3 text-white group-hover/contact:text-red-orange-500 transition-colors duration-300" />
                <a href="https://www.instagram.com/shiv0.218" target="_blank" rel="noopener noreferrer" className="text-white">
                    <Button variants="text" className="ml-auto">Instagram</Button>
                </a>
              </li>
            </ul>
          </div>

          {/* Toolbox Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 border-2 border-transparent hover:border-2 hover:border-red-orange-500 hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4">My Toolbox</h3>
            <div className="relative overflow-hidden">
            <div className="flex gap-4 py-3 -translate-x-0">
  <div className="flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-duration:18s]">
    {[...new Array(2)].fill(0).map((_, idx) => (
      <Fragment key={idx}>
        <ul className="flex gap-8">
          {toolBoxList.map((tool, index) => (
            <li
                  key={index}
                  className="flex items-center justify-center gap-4 p-4 border border-red-orange-500 rounded-xl"
                  style={{ minWidth: '150px' }}
                >
                  <div className="flex items-center justify-center">
                    {tool.icon}
                  </div>
                  <span>{tool.name}</span>
                </li>
          ))}
        </ul>
      </Fragment>
    ))}
  </div>
  
</div>

<div className='flex gap-4 py-3 -translate-x-0'>
<div className="flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-direction:reverse] [animation-duration:18s]">
    {[...new Array(2)].fill(0).map((_, idx) => (
      <Fragment key={idx}>
        <ul className="flex gap-8">
          {toolBoxList.map((tool, index) => (
            <li
                  key={index}
                  className="flex items-center justify-center gap-4 p-4 border border-red-orange-500 rounded-xl"
                  style={{ minWidth: '150px' }}
                >
                  <div className="flex items-center justify-center">
                    {tool.icon}
                  </div>
                  <span>{tool.name}</span>
                </li>
          ))}
        </ul>
      </Fragment>
    ))}
  </div>
</div>

    </div>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
