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
                  href="https://drive.google.com/file/d/1Ivoui_RHN0yx5ZhmyaQhoU7eXALh35iT/view?usp=share_link"
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
              Computer Science student exploring the world of developing
              and design. Join me down below!
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
            <h3 className="text-3xl text-center py-1 dark:text-white ">Partnered Corporations</h3>
            <p className="text-md text-center py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a full stack
              developer, I've done business projects and personal projects
              and consulted for startups.
            </p>
          </div>
          <div className="text-center lg:flex gap-10" >
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
            <div className="text-center shadow-md p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={qmind} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">QMIND</h3>
              <p className="py-2">
                QMIND is Queens University's premier AI club that works with
                all sorts of AI alogorithms and all sorts of companies
              </p>
              <h4 className="py-4 text-teal-600">My Tasks</h4>
              <p className="text-gray-800 py-1">Scrape the web for research papers</p>
              <p className="text-gray-800 py-1">Create a Database and organize it</p>
              <p className="text-gray-800 py-1">Use GPT-3 to create a search algorithm</p>
              <p className="text-gray-800 py-1">Build the application</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl text-center py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md text-center py-2 leading-8 text-gray-800 dark:text-gray-200">
              I have built many projects (and many more to come) which I 
              have displayed here. As I do more projects, the page will be
              upated accordingly
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                style="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                style="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                style="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                style="responsive"
                src={web4}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
