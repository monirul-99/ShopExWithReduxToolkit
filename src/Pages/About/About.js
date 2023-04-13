import React from "react";
import { IconContext } from "react-icons";
import { IoLogoInstagram } from "react-icons/io";
import { RiFacebookLine, RiLinkedinLine, RiTwitterLine } from "react-icons/ri";

const About = () => {
  return (
    <section>
      <div className="container mx-auto py-10 -mb-28 lg:-mb-0">
        <div className="lg:grid lg:grid-cols-12 py-5 flex flex-col-reverse px-5 lg:px-0">
          <aside className="lg:grid lg:col-span-6 py-14 lg:py-0">
            <aside className="flex items-center space-x-3">
              <p className="border-t-2 w-10"></p>
              <h1 className="font-Libre tracking-widest font-extralight text-[15px] uppercase">
                introduction
              </h1>
            </aside>
            <div className=" space-y-3 mt-5 lg:mt-0">
              <h1 className="font-Libre uppercase lg:text-4xl text-3xl tracking-wide text-[#121212] font-semibold">
                Monirul Islam
              </h1>
              <h1 className="text-xl font-Open text-black">
                Full Stack Developer
              </h1>
            </div>

            <div>
              <aside className="flex items-center space-x-3 mb-5 mt-7 lg:mt-0">
                <p className="border-t-2 w-10"></p>
                <h1 className="font-Libre tracking-widest font-extralight text-[15px] uppercase">
                  Biography
                </h1>
              </aside>

              <p className="font-Libre lg:text-[17px] text-black text-justify">
                I have experience building web applications using the MERN
                stack, including knowledge of MongoDB, Express.js, React.js, and
                Node.js. I also have a strong understanding of front-end
                technologies such as JavaScript, HTML, and CSS. <br /> <br /> I
                am a quick learner and am always eager to expand my skill set
                and stay up-to-date with the latest technologies. I am excited
                to join a team of developers and contribute to the creation of
                innovative and user-friendly web applications.
              </p>
            </div>

            <div>
              <aside className="flex items-center space-x-3 mb-5 mt-7 lg:mt-0">
                <p className="border-t-2 w-10"></p>
                <h1 className="font-Libre tracking-widest font-extralight text-[15px] uppercase">
                  Contact
                </h1>
              </aside>

              <div className="text-black lg:text-[18px]">
                <h1 className="font-Libre">Naogaon, Bangladesh</h1>
                <p className="font-Libre">sohelmdmonirulislam@gmail.com</p>
                <p className="font-Libre">+880 1780082914</p>
              </div>
            </div>

            <div>
              <aside className="flex items-center space-x-3 mb-5 mt-7 lg:mt-0">
                <p className="border-t-2 w-10"></p>
                <h1 className="font-Libre tracking-widest font-extralight text-[15px] uppercase">
                  Say Hello
                </h1>
              </aside>

              <div className="flex items-center space-x-5">
                <a
                  target="_blank"
                  href="https://www.facebook.com/moniru.pro"
                  rel="noreferrer"
                >
                  <aside className="bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center">
                    <IconContext.Provider
                      value={{ size: 17, color: "#395692 " }}
                    >
                      <RiFacebookLine />
                    </IconContext.Provider>
                  </aside>
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/m_monirull/"
                  rel="noreferrer"
                >
                  <div className="bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center">
                    <IconContext.Provider
                      value={{ size: 17, color: "#C02E7F" }}
                    >
                      <IoLogoInstagram />
                    </IconContext.Provider>
                  </div>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/monirul99/"
                  rel="noreferrer"
                >
                  <div className="bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center">
                    <IconContext.Provider
                      value={{ size: 17, color: "#006EAB" }}
                    >
                      <RiLinkedinLine />
                    </IconContext.Provider>
                  </div>
                </a>

                <a
                  target="_blank"
                  href="https://twitter.com/MsMonirul"
                  rel="noreferrer"
                >
                  <div className="bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center">
                    <IconContext.Provider
                      value={{ size: 17, color: "#00acee " }}
                    >
                      <RiTwitterLine />
                    </IconContext.Provider>
                  </div>
                </a>
              </div>
            </div>
          </aside>
          <aside className="lg:grid lg:col-span-6 lg:w-[70%] mx-auto justify-end px-7 lg:px-0">
            <div className="border rounded-full p-7">
              <img
                className="rounded-full border"
                src="https://res.cloudinary.com/dr4o1qswz/image/upload/v1656317686/Owner%20Img/IMG_0509_ztum36.jpg"
                alt=""
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
