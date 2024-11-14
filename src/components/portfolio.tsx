import React from "react";
import Image from "next/image";
import Link from "next/link";


const Portfolio = () => {
  return (
    <section className="h-auto sm:h-[650px] md:[800px] shadow-[0_4px_5px_-1px_rgba(117,195,16,1)] bg-slate-900 py-10 sm:py-0">
  <h1 className="text-center text-[30px] sm:text-[40px] md:text-[50px] font-semibold mt-10 sm:mt-20 text-[#ffffff]">
    Portfolio
  </h1>

  <div className="flex sm:flex-row justify-center gap-5 flex-wrap ">
    <div className="rounded-lg p-2" style={{ boxShadow: '0 15px 30px rgba(117, 195, 16, 0.9)' }}>
      <Link href="https://traveling-website-olive.vercel.app">
        <Image
          src="/travel.png"
          width={300}
          height={180}
          alt="Travel Website"
          className="rounded-lg shadow-lg w-[200px] sm:w-[250px] md:w-[300px] h-[120px] sm:h-[150px] md:h-[180px]"
        />
      </Link>
    </div>

    <div className="rounded-lg p-2" style={{ boxShadow: '0 15px 30px rgba(117, 195, 16, 0.9)' }}>
      <Link href="https://hackathone-milestone-4-henna.vercel.app">
        <Image
          src="/resume.png"
          width={300}
          height={180}
          alt="Resume Website"
          className="rounded-lg shadow-lg w-[200px] sm:w-[250px] md:w-[300px] h-[120px] sm:h-[150px] md:h-[180px]"
        />
      </Link>
    </div>

    <div className="rounded-lg p-2" style={{ boxShadow: '0 15px 30px rgba(117, 195, 16, 0.9)' }}>
      <Link href="https://gucci-template.vercel.app">
        <Image
          src="/gucci.png"
          width={300}
          height={180}
          alt="Gucci Template"
          className="rounded-lg shadow-lg w-[200px] sm:w-[250px] md:w-[300px] h-[120px] sm:h-[150px] md:h-[180px]"
        />
      </Link>
    </div>
    </div>
    {/* Second Row */}
    <div className=" flex justify-center gap-5  flex-col sm:flex-row  flex-wrap mt-16">
    <div className="rounded-lg p-2" style={{ boxShadow: '0 15px 30px rgba(117, 195, 16, 0.9)' }}>
      <Link href="https://speaker-website-landing-page.vercel.app">
        <Image
          src="/speaker.png"
          width={300}
          height={180}
          alt="Speaker Website"
          className="rounded-lg shadow-lg w-[200px] sm:w-[250px] md:w-[300px] h-[120px] sm:h-[150px] md:h-[180px]"
        />
      </Link>
    </div>

    <div className="rounded-lg p-2" style={{ boxShadow: '0 15px 30px rgba(117, 195, 16, 0.9)' }}>
      <Link href="https://phonic-book-for-kids.vercel.app">
        <Image
          src="/phonic.png"
          width={300}
          height={180}
          alt="Phonic Book"
          className="rounded-lg shadow-lg w-[200px] sm:w-[250px] md:w-[300px] h-[120px] sm:h-[150px] md:h-[180px]"
        />
      </Link>
    </div>
  </div>
</section>

  );
};

export default Portfolio;
