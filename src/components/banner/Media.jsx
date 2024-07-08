import React from 'react'
import { FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiTailwindcss} from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <FaGithub />
            </span>
            <span className="bannerIcon">
            <SiLeetcode />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
            <TbBrandJavascript />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
            <FaJava />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media