import React from "react";
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    
    <section className="mt-16 lg:flex-row px-4 lg:items-center mx-auto h-auto  
       md:px-8 sm:px-4 xl:px-4 gap-20 lg:gap-0 shadow-[0_4px_5px_-1px_rgba(117,195,16,1)]">
      <h1 className="text-[50px] font-semibold mt-20 ml-24 text-[#ffffff]" >About</h1>
      <p className="flex ml-24 mr-32 ">
          <FontAwesomeIcon
            icon={faMinus}
            className="h-16 w-72 text-[#75C310] relative bottom-4"
          />
        <span className="text-sm sm:text-base md:text-lg lg:text-[18px] text-[#E5E4E2] text-justify"> 
        Hi! I am a frontend developer with a passion for crafting seamless and
        visually engaging user interfaces. With a strong foundation in HTML,
        CSS, TypeScript, and React, I build responsive, interactive applications
        that offer a smooth user experience. My goal is to create clean,
        efficient code that brings designs to life while prioritizing usability
        and performance. Whether I am working on a small component or a
        full-scale project, I am always excited to apply my skills to develop
        modern and dynamic web solutions. Let’s build something amazing
        together!
        </span>
      </p>
      <p className=" text-base sm:text-[18px] text-[#E5E4E2] text-justify mt-10 mx-auto sm:ml-32 lg:ml-40 ">Finally some quick bits about me:</p>

      <ul className="list-disc marker:text-[#75C310] ml-8 sm:ml-36 lg:ml-44 mt-10 flex gap-2 sm:flex sm:gap-10 text-[#E5E4E2] text-sm lg:text-[18px] lg:ml-32px">
        <li>Intermidiate in Medical science</li>
        <li className="ml-12">Diploma in English</li>
      </ul>

      <ul className="list-disc marker:text-[#75C310] ml-8 sm:ml-36 lg:ml-44 mt-10   sm:flex sm:gap-10 text-[#E5E4E2] text-sm lg:text-[18px] lg:ml-32px ">
      <li>Aspiring in AI Technologies</li>
      <li className="ml-20">Avid Learner</li>

      </ul>

      <h2 className="text-center text-[50px] font-semibold mt-20 text-[#ffffff]">My Skills</h2>
      <p className="text-[18px] text-[#E5E4E2] text-center mt-10">The skills, tools and technologies i am really good at:</p>

      <div className="flex flex-col sm:flex-row justify-center gap-20 flex-wrap mt-12" >
        <div className="p-4 shadow-lg rounded-lg" style={{ boxShadow: '0 15px 30px rgba(117, 195, 16, 0.9)' }}>
          <Image src= "/html.png" alt ="HTML" height={100} width={100}/>
          <p className="text-[#C0C0C0] text-center font-semibold text-[20px] mt-4">HTML</p>
        </div>

        <div className="p-4 shadow-lg rounded-lg" style={{ boxShadow: '0 15px 30px rgba(117, 195, 16, 0.9)' }}>
        <Image src= "/css.png" alt ="CSS" height={100} width={100}/>
        <p className="text-[#C0C0C0] text-center font-semibold text-[20px] mt-4">CSS</p>
        </div>

        <div className="p-4 shadow-lg rounded-lg" style={{ boxShadow: '0 15px 30px rgba(117, 195, 16, 0.9)' }}>
        <Image src= "/tailwind.png" alt ="tailwindcss" height={100} width={100} />
        <p className="text-[#C0C0C0] text-center font-semibold text-[19px] mt-4">Tailwindcss</p>
        </div>

        <div className="p-4 shadow-lg rounded-lg" style={{ boxShadow: '0 15px 30px rgba(117, 195, 16, 0.9)' }}>
        <Image src= "/node.png" alt ="nodeJs" height={100} width={100} />
        <p className="text-[#C0C0C0] text-center font-semibold text-[19px] mt-4">NodeJs</p>
        </div>

        <div className="p-4 shadow-lg rounded-lg" style={{ boxShadow: '0 15px 30px rgba(117, 195, 16, 0.9)' }}>
        <Image src= "/githup.png" alt ="githup" height={100} width={100} />
        <p className="text-[#C0C0C0] text-center font-semibold text-[19px] mt-4">Githup</p>
        </div>
      </div>

       {/*second row  */}

      <p className="text-[18px] text-[#E5E4E2] text-center mt-10 sm:text-[20px]">The technologies that I know but need to work on further so that I can use them like an expert</p>
      <div className="flex flex-col sm:flex-row justify-center gap-20 flex-wrap mt-16" >
        <div className="p-4 shadow-lg rounded-lg" style={{ boxShadow: '0 15px 30px rgba(117, 195, 16, 0.9)' }}>
          <Image src= "/next.png" alt ="nextjs" height={100} width={100}/>
          <p className="text-[#C0C0C0] text-center font-semibold text-[20px] mt-4">Next.js</p>
        </div>

        <div className="p-4 shadow-lg rounded-lg" style={{ boxShadow: '0 15px 30px rgba(117, 195, 16, 0.9)' }}>
        <Image src= "/typescript.png" alt ="typescript" height={100} width={100}/>
        <p className="text-[#C0C0C0] text-center font-semibold text-[20px] mt-4">Typescript</p>
        </div>

        <div className="p-4 shadow-lg rounded-lg" style={{ boxShadow: '0 15px 30px rgba(117, 195, 16, 0.9)' }}>
        <Image src= "/javascript.png" alt ="javascript" height={100} width={100}/>
        <p className="text-[#C0C0C0] text-center font-semibold text-[20px] mt-4">Javascript</p>
        </div>
      </div>
      </section>
  );
};

export default About;
