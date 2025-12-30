import React from "react";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa6";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-slate-600">
      <div className="container mx-auto mt-20 flex flex-col items-center justify-between gap-6 py-8 sm:flex-row">
        
        {/* Name Section */}
        <div className="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
          <a
            href="/"
            className="text-xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-yellow-400"
          >
            Aman Yadav
          </a>

          <span
            className="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline"
            aria-hidden="true"
          >
            /
          </span>

          <p className="text-sm text-slate-300">
            © {year} Aman Yadav
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer Navigation">
          <ul className="flex items-center gap-1">
            {["About", "Projects", "Contact"].map((label, index, arr) => (
              <React.Fragment key={label}>
                <li>
                  <a
                    href={`/${label.toLowerCase()}`}
                    className="block px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:text-yellow-400"
                  >
                    {label}
                  </a>
                </li>

                {index < arr.length - 1 && (
                  <span
                    className="text-4xl font-thin leading-[0] text-slate-400"
                    aria-hidden="true"
                  >
                    /
                  </span>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>

        {/* Socials */}
        <div className="socials inline-flex justify-center sm:justify-end">
          
          <a
            href="https://github.com/amanyadavv605"
            className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
            aria-label="Aman Yadav on GitHub"
          >
            <FaGithub />
          </a>
         

          
          <a
            href="https://linkedin.com/in/aman-yadav-8558721b3"
            className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
            aria-label="Aman Yadav on LinkedIn"
          >
            <FaLinkedin />
          </a>
         

          
          <a
            href="https://leetcode.com/u/amanyadavv605/"
            className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
            aria-label="Aman Yadav on LeetCode"
          >
            <FaCode />
          </a>
         
        </div>
      </div>
    </footer>
  );
}
