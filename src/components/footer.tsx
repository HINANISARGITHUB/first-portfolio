import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone, faLocationDot,} from "@fortawesome/free-solid-svg-icons";
import { faFacebook,faTwitter, faLinkedinIn, faWhatsapp, faGithub} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <section className="bg-slate-900 h-auto sm:h-[600px] py-10 sm:py-0 ">
  <h1 className="text-center text-[30px] sm:text-[40px] md:text-[50px] font-semibold mt-8 sm:mt-16 text-[#ffffff]">
    Contact Me
  </h1>

  <div className="flex flex-col sm:flex-row gap-5 justify-center mt-10 sm:mt-16 items-center">
    <div
      className="flex w-full sm:w-96  h-16 p-3 rounded-lg shadow-lg"
      style={{ boxShadow: '0 8px 30px rgba(117, 195, 16, 0.9)' }}
    >
      <FontAwesomeIcon icon={faEnvelope} className="text-white w-8 sm:w-10 h-8 sm:h-10 ml-4 sm:ml-1 lg:ml-10" />
      <span className="text-white text-[18px] sm:text-[24px] ml-4 sm:ml-6">hinanisar@gmail.com</span>
    </div>

    <div
      className="flex w-full sm:w-96 h-16 p-3 rounded-lg shadow-lg"
      style={{ boxShadow: '0 8px 30px rgba(117, 195, 16, 0.9)' }}
    >
      <FontAwesomeIcon icon={faPhone} className="text-white w-6 sm:w-8 h-6 sm:h-8 ml-4 sm:ml-1 lg:ml-10" />
      <span className="text-white text-[18px] sm:text-[24px] ml-4 sm:ml-6">(021)555-0124</span>
    </div>
  </div>

  <div className="mt-10 flex justify-center items-center">
    <div
      className="flex w-full sm:w-96 h-16 p-3 rounded-lg shadow-lg"
      style={{ boxShadow: '0 8px 30px rgba(117, 195, 16, 0.9)' }}
    >
      <FontAwesomeIcon icon={faLocationDot} className="text-white w-6 sm:w-8 h-6 sm:h-8 ml-4 sm:ml-8" />
      <span className="text-white text-[18px] sm:text-[24px] ml-4 sm:ml-6">Karachi, Pakistan</span>
    </div>
  </div>

  <div className="flex flex-col sm:flex-row items-center gap-6 mt-16 sm:mt-28 justify-center">
    <div className="w-20 sm:w-[150px] md:w-[300px] lg:w-[400px] xl:w-[517px] h-1 bg-[#75C310]"></div>
    <FontAwesomeIcon icon={faFacebook} className="text-white w-6 sm:w-8 h-6 sm:h-8" />
    <FontAwesomeIcon icon={faTwitter} className="text-white w-6 sm:w-8 h-6 sm:h-8" />
    <FontAwesomeIcon icon={faLinkedinIn} className="text-white w-6 sm:w-8 h-6 sm:h-8" />
    <FontAwesomeIcon icon={faWhatsapp} className="text-white w-6 sm:w-8 h-6 sm:h-8" />
    <FontAwesomeIcon icon={faGithub} className="text-white w-6 sm:w-8 h-6 sm:h-8" />
    <div className="w-20 sm:w-[150px] md:w-[300px] lg:w-[400px] xl:w-[517px] h-1 bg-[#75C310]"></div>
  </div>

  <p className="text-[24px] sm:text-[30px] md:text-[40px] text-[#ffffff] text-center mt-10 sm:mt-20 font-serif">
    "Thanks for Scrolling"
  </p>
</section>

  )
}

export default Footer
