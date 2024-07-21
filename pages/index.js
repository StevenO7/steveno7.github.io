import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import devsz from "../public/Steven Headshot.png";
import nova from "../public/NVH.png";
import chef from "../public/ChefBuddy.png";
import amd from "../public/AMD.png";
import qmind from "../public/QMIND.png";
import Image from "next/image";
import web1 from "../public/nvhweb.png";
import web2 from "../public/cbweb.png";
import web3 from "../public/iiweb.png";
import web4 from "../public/beatparty.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Steven's Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">DevelopedBySteven</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/1YGq1giX2cLmZolzIo8R7TYa4KuXmhvov/view?usp=sharing"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Steven Zhang
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Full Stack Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Computer Science student currently on internship! Currently
              exploring the world of product management and has a passion in software 
              development and design. Join me down below!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <ul className="flex items-center">
              <li>
                <AiFillGithub
                  onClick={() => open(URL="https://github.com/StevenO7")}
                />
              </li>
            </ul>
            <ul className="flex items-center">
              <li>
                <AiFillLinkedin
                  onClick={() => open(URL="https://www.linkedin.com/in/steventzhang/")}
                />
              </li>
            </ul>
            <ul className="flex items-center">
              <li>
                <AiOutlineMail
                  onClick={() => open(URL="mailto:steven.zhang@queensu.ca")}
                />
              </li>
            </ul>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={devsz}  style="fill cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl text-center py-1 dark:text-white ">Highlighted Projects</h3>
            <p className="text-md text-center py-2 leading-8 text-gray-800 dark:text-gray-200">
              Even though I am at the start of my professional career, there are 
              many projects and experiences that I have devoted a good amount of time to that I would love to share
            </p>
          </div>
          <div className="text-center lg:flex gap-10" >
            <div className="text-center shadow-md p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={amd} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">AMD</h3>
              <p className="py-2">
                AMD is a leader in semiconductor design and is most know for 
                it's contribution to the GPU space.
              </p>
              <h4 className="py-4 text-teal-600">My Tasks</h4>
              <p className="text-gray-800 py-1">Managed the developement and growth of ROCm Blogs</p>
              <p className="text-gray-800 py-1">Researched and developed PRD's for various ROCm Libraries</p>
              <p className="text-gray-800 py-1">Ensured processes were valid by testing ROCm on Ubuntu 22.04</p>
              <p className="text-gray-800 py-1">Facilitated the growth of the team with improving and documenting processes</p>
            </div>
            <div className="text-center, shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={nova} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Nova Vacation Homes
              </h3>
              <p className="py-2">
              Nova Vacation Homes is a property management company 
              in Orlando, Florida that has been in business for 10 years.
              </p>
              <h4 className="py-4 text-teal-600">My Tasks</h4>
              <p className="text-gray-800 py-1">Designed the website</p>
              <p className="text-gray-800 py-1">Built the website</p>
              <p className="text-gray-800 py-1">Maintained the website</p>
              <p className="text-gray-800 py-1">Marketed the website</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={chef} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                ChefBuddy
              </h3>
              <p className="py-2">
                ChefBuddy is a hackathon project aiming to help alleviate
                food waste in the world by providing recipes for leftovers 
              </p>
              <h4 className="py-4 text-teal-600">My Tasks</h4>
              <p className="text-gray-800 py-1">Act as the PM</p>
              <p className="text-gray-800 py-1">Build the Frontend</p>
              <p className="text-gray-800 py-1">Link the firebase Backend</p>
              <p className="text-gray-800 py-1">Present and pitch</p>
            </div>
          </div>
        </section>
        <section className="py-10">
        </section> 
      </main>
    </div>
  );
}
