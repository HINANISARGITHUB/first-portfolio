import { navItem } from "@/contant";
import Link from "next/link";

export default function Header() {
  return (
    <header className="h-[70px] sm:h-[85px] bg-slate-800 drop-shadow-[0_1px_5px_rgba(117,195,16,1)]">
      <div className="flex items-center justify-between h-full px-4 sm:px-6 md:px-8 max-w-6xl lg:mx-auto xl:px-4">
        {/* Logo Section */}
        <div className="flex gap-1 sm:gap-2 items-center">
          <h1 className="text-[#75C310] font-bold text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px]">
            Hina
          </h1>
          <span className="text-[#ffffff] font-bold text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px]">
            Nisar.
          </span>
        </div>

        {/* Navigation Menu */}
        <nav className=" sm:block h-[40px]">
          <ul className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[60px] xl:gap-[70px] text-[#75C310] text-sm sm:text-lg md:text-xl lg:text-[22px] xl:text-[24px] font-medium">
            {navItem.map((item) => (
              <Link href={item.link} key={item.title}>
                <li className="hover:text-white cursor-pointer">
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
