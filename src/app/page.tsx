import About from "@/sections/About"
import FAQs from "@/sections/FAQs"
import Footer from "@/sections/Footer"
import Header from "@/sections/Header"
import Hero from "@/sections/Hero"
import Intro from "@/sections/Intro"
import Projects from "@/sections/Projects"
import Testimonials from "@/sections/Achievements"

export default function Home() {
  return (
  <div className="">
    
    <Header/>
    <Hero/>
    <Intro/>
    <Projects/>
    <About/>
    <Testimonials/>
    <FAQs/>
    <Footer/>
  </div>
  )
}
