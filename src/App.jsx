import { useState } from "react";
import Navbar from "./navbar/navbar";
import { ReactTyped } from "react-typed";
import Bunath from "./image/Bunath.png";
import { PiFacebookLogoBold } from "react-icons/pi";
import { RiTelegramLine, RiInstagramLine } from "react-icons/ri";
import { BiLogoGithub } from "react-icons/bi";
import { TbBrandLinkedin } from "react-icons/tb";
import Project from "./image/Project.png";
import java from "./image/Javaicon.png";
import Card from "./card/Card";
import Bunath1 from "./image/NewBunath.png";
import PauseOnHover from "./PauseOnHover";
import SkillCom from "./SkillCom";
import CardProject from "./CardProject";
import { CgWebsite } from "react-icons/cg";
import CardCommpomrnt from "./CardCommpomrnt";
import Education from "./image/eduction.png";
import EducationComponent from "./EducationComponent";
import ButtonComponet from "./ButtonComponet";
import Contact from "./Contact";


function App() {
  const onButtonClick = () => {
    const pdfUrl = "https://drive.google.com/file/d/1x7fqFM2auMSS8N_KpNKfw_-bYdfVGHRf/view";
    window.open(pdfUrl, "_blank");
  };
  return (
    <>
      <Navbar />
      <section>
        <div className="max-w-screen-xl flex flex-col sm:flex-row items-center justify-between mx-auto p-4 border-b-[1px]">
          <div className="text-center sm:text-left flex flex-col space-y-5">
            <h1 className="text-3xl font-bold text-white">Hello, It's me</h1>
            <h2 className="text-5xl font-bold text-white">Pheng Bunath</h2>
            <h3 className="text-3xl font-bold text-white">
              And I'm a{" "}
              <span className="text-yellow-300">
                <ReactTyped
                  strings={["Software Engineer", "Web Developer", "Problem Solver"]}
                  typeSpeed={200}
                  loop
                  backSpeed={50}
                  showCursor={false}
                />
              </span>
            </h3>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi assumenda illum iste cumque quis velit
              quae magnam officiis est quas minus, voluptate dolor autem tempora numquam molestias. Sunt, asperiores
              alias?
            </p>
            <div className="flex justify-center sm:justify-start text-4xl space-x-4  text-yellow-300">
              <a
                href="https://web.facebook.com/profile.php?id=100027603155423"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-200"
              >

                <PiFacebookLogoBold />
              </a>
              <a
                href="https://t.me/pheng_bunath"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-200"
              >
                <RiTelegramLine />

              </a>
              <a
                href="https://www.linkedin.com/in/bunath-pheng-71a41b318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-200"
              >
                <TbBrandLinkedin />
              </a>
              <a
                href="https://github.com/BunathPheng"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-200"
              >
                <BiLogoGithub />

              </a>
            </div>
            <div className="">
              <button onClick={onButtonClick} className="relative inline-flex h-10 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_100deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-blue-800 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Download CV
                </span>
              </button>
            </div>

          </div>
          <img src={Bunath} alt="Profile picture of Pheng Bunath" className="h-[500px] object-cover mt-6 sm:mt-0" />
        </div>
      </section>
      {/* project */}
      <section id="project">
        <div className="max-w-screen-xl flex flex-col sm:flex-row items-center justify-center mx-auto p-4 mt-4 relative">
          <div className="absolute bottom-[50px] h-[45px] w-[1px] bg-white"></div>
          <div className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_100deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full  items-center justify-center rounded-md bg-blue-800 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Project Experience
            </span>
          </div>
        </div>
        <div className="max-w-screen-xl flex flex-col sm:flex-row  justify-between mx-auto p-4 border-b-[1px]">
          <img src={Project} alt="Project" className="h-[400px] object-cover" />
          <div className="flex flex-col space-y-4">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
      {/* about */}
      <section id="about">
        <div className="max-w-screen-xl flex flex-col sm:flex-row items-center justify-between mx-auto mt-6">
          <div className="bg-blue-800 text-white py-3 px-4 border-s-2">
            <h1 className="font-bold">About Me</h1>
          </div>
        </div>
        <div className="max-w-screen-xl flex flex-col sm:flex-row text-white justify-between mx-auto mt-6 border-b-2 relative">
          <div className="">
            <h1 className="font-bold text-2xl">WHO I AM?</h1>
            <p className="leading-8  mt-4 text-lg">My name is Pheng Bunath, and I am a dedicated and passionate Full-Stack Developer with a strong foundation in both front-end and back-end technologies. As a student at CSTAD, I have honed my skills in web development, programming, and problem-solving through hands-on projects and real-world applications.
            </p>
          </div>
          <img src={Bunath1} alt="Bunath" className="h-[400px] object-cover" />
        </div>
      </section>
      {/* skill */}
      <section id="skill">
        <div className="max-w-screen-xl flex flex-col sm:flex-row items-center justify-center mx-auto p-4 mt-4 relative">
          <div className="absolute bottom-[50px] h-[45px] w-[1px] bg-white"></div>
          <div className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_100deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-20  items-center justify-center rounded-md bg-blue-800 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Skill
            </span>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto mt-14 border-b-2 pb-14">
          <PauseOnHover />
        </div>
      </section>
      {/* project experince */}
      <section id="experince">
        <div className="max-w-screen-xl flex flex-col sm:flex-row items-center justify-between mx-auto mt-6">
          <div className="bg-blue-800 text-white py-3 px-4 border-s-2">
            <h1 className="font-bold">Projects</h1>
          </div>
        </div>
        <h1 className="font-bold text-2xl max-w-screen-xl mx-auto mt-6 text-white">WHAT I DO?</h1>
        <div className="grid grid-cols-1 sm:grid-cols-4  gap-11  max-w-screen-xl mx-auto mt-6 border-b-2 pb-14">
          <CardCommpomrnt title="Web Development" icon={<CgWebsite className="text-2xl" />} p="Learn English online and improve your skills through our high-quality courses and resources." />
          <CardCommpomrnt title="Web Development" icon={<CgWebsite className="text-2xl" />} p="Learn English online and improve your skills through our high-quality courses and resources." />
          <CardCommpomrnt title="Web Development" icon={<CgWebsite className="text-2xl" />} p="Learn English online and improve your skills through our high-quality courses and resources." />
          <CardCommpomrnt title="Web Development" icon={<CgWebsite className="text-2xl" />} p="Learn English online and improve your skills through our high-quality courses and resources." />
        </div>
      </section>
      {/* education */}
      <section id="education">
        <div className="max-w-screen-xl flex flex-col sm:flex-row items-center justify-center mx-auto p-4 mt-4 relative">
          <div className="absolute bottom-[50px] h-[45px] w-[1px] bg-white"></div>
          <div className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_100deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-40  items-center justify-center rounded-md bg-blue-800 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Education
            </span>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto  border-b-2 pb-14">
          <div className="flex items-center justify-between  mt-4">
            <img src={Education} alt="education" className="h-[500px] object-cover" />
            <div className="flex  flex-col space-y-10">
              <EducationComponent year="2023-2027" subject="BACHELOR DEGREE" university="Royal University of Phnom Penh" />
              <EducationComponent year="2023-2027" subject="BACHELOR DEGREE" university="Royal University of Phnom Penh" />
              <EducationComponent year="2023-2027" subject="BACHELOR DEGREE" university="Royal University of Phnom Penh" />
            </div>
          </div>
        </div>
      </section>
      <ButtonComponet />
      <section id="contect">
        <div className="max-w-screen-xl flex flex-col sm:flex-row items-center justify-between mx-auto mt-6">
          <div className="bg-blue-800 text-white py-3 px-4 border-s-2">
            <h1 className="font-bold">Contact</h1>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto  border-b-2 pb-14">
          <div className="flex items-center justify-between  mt-4">
               <Contact />
          </div>
        </div>
      </section>

    </>
  );
}
export default App;
