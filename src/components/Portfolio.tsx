"use client"
import Image from "next/image"
import {motion} from 'framer-motion'
import project from '../assets/project.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'

const projects = [
    {
        title: "frover-labs-beta, an NPM package",
        desc: "An NPM package that I have created during one of my internships, which provides different Frontend components in Next.js",
        devstack: "Next.js, TypeScript",
        link: "https://www.npmjs.com/package/frover-labs-beta?activeTab=readme",
        git: "https://github.com/Shivansh-22866/frover-labs-beta",
        src: project
    },
    {
        title: "Goa Police Help Desk",
        desc: "Our recent project in Goa Police Hackathon that we created to provide Multi-lingual support and AI-driven chat bot to ease any common citizen by solving their general queries",
        devstack: "Next.js, Botpress, GPT API, MyMemory Translate API",
        link: "https://goa-police-helpdesk.vercel.app/",
        git: "https://github.com/Shivansh-22866/goa_police_helpdesk",
        src: project2
    },
    {
        title: "Pushp: Unveiling India's Artisanal Experience",
        desc: "A Full-Stack Next.js project with providing an E-commerce platform for the local artisans of India",
        devstack: "Next.js, MongoDB, Cloudinary, Stripe",
        link: "https://pushp-user.vercel.app/",
        git: "https://github.com/Shivansh-22866/pushp_user",
        src: project3
    },
    {
        title: "Notes App: Flutter",
        desc: "A Flutter project intended to build upon a basic notes app and add other functionalities such as addition of videos/images alongside sharing it in HTML, TXT and PDF formats.",
        devstack: "Flutter",
        link: "https://github.com/Shivansh-22866/notes_app",
        git: "https://github.com/Shivansh-22866/notes_app",
        src: project4
    }
]

const Portfolio = () => {
  return (
    <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-40" id="portfolio">
        <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 my-12">
        Selected <span className="text-orange-400">Projects</span>
      </h1>
        <div className="max-w-[1000px] mt-32 mx-auto space-y-24">
            {projects.map((project, index) => (
                <motion.div key={index} initial={{opacity: 0, y:75}}
                whileInView={{opacity: 1, y:0}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: 0.25}}
                className={`mt-12 flex ${index %2 === 1 ? "flex-col-reverse md:flex-row-reverse gap-12" : "flex-col md:flex-row"}`}>

                    <div className="space-y-2 max-w-[550px]">
                        <h2 className="text-7xl my-4 text-white/70">{`0${index+1}`}</h2>
                        <h2>{project.title}</h2>
                        <p className="text-lg text-white/70 break-words p-4">{project.desc}</p>
                        <p className="text-xl text-orange-500 font-semibold">{project.devstack}</p>
                        <div className="w-64 h-[1px] bg-gray-400 my-8">
                            <a href={project.link} className="mr-6">Link</a>
                            <a href={project.git}>Git</a>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <Image src={project.src} alt={project.title} className="h-[350px] w-auto object-cover border rounded border-gray-700" />
                    </div>

                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Portfolio