import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (

<section className="h-auto lg:h-[550px] mx-auto w-full shadow-[0_4px_5px_-1px_rgba(117,195,16,1)]">
  <div className="max-w-6xl flex flex-col lg:flex-row justify-between px-4 lg:items-center mx-auto h-full gap-10 lg:gap-0 mt-5">
    {/* Punch line section */}
    <div className="w-full lg:w-[900px] flex flex-col items-center lg:items-start">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold text-[#ffffff] text-center lg:text-left">
        I am Hina Nisar
      </h1>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold text-[#ffffff] text-center lg:text-left">
        <span className="text-[#75C310]">Front-end</span> Developer
      </h2>
      <div className="w-full md:w-[580px]">
        <p className="text-sm sm:text-base md:text-lg lg:text-[18px] font-medium text-[#E5E4E2] text-center lg:text-left">
          I will create something that will exceed your expectations, driven by a passion for creating seamless and dynamic user experiences. From pixel-perfect designs to responsive, interactive elements, I aim to bring ideas to life through clean and efficient code.
        </p>
      </div>
      <button className="w-[150px] sm:w-[180px] md:w-[200px] h-[50px] sm:h-[55px] md:h-[60px] bg-[#75C310] text-[16px] sm:text-[18px] md:text-[20px] font-bold mt-8 text-[#000000] flex items-center justify-center gap-2">
        HIRE ME
        <FontAwesomeIcon icon={faArrowRight} className="h-4 sm:h-5 w-4 sm:w-5" />
      </button>
    </div>

    {/* Image Section */}
    <Image
      src="/girl3.png"
      width={660}
      height={2500}
      alt="woman"
      priority={true}
      style={{
        filter: 'drop-shadow(0 10px 20px rgba(117, 195, 16, 0.5))',
        display: 'block',
      }}
      className="mx-auto w-full sm:w-[400px]  md:w-[500px]  lg:w-[660px] h-auto"
    />
  </div>
</section>
  );
};

export default Hero