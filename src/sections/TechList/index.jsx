import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCircle } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function TechList() {
  const componentRef = useRef(null);

  const techItems = [
    { name: "React.js", color: "#002fc4" },
    { name: "Three.js", color: "#adaeae" },
    { name: "GSAP", color: "#00ff0f" },
    { name: "Tailwind", color: "#56ceff" },
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".tech-row",
        {
          x: (index) =>
            index % 2 === 0
              ? gsap.utils.random(400, 600)
              : gsap.utils.random(-400, -600),
        },
        {
          x: (index) =>
            index % 2 === 0
              ? gsap.utils.random(-400, -600)
              : gsap.utils.random(400, 600),
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: componentRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 4,
          },
        }
      );
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={componentRef} className="overflow-hidden py-20">
      {/* Heading */}
      <div className="mx-auto mb-12 max-w-7xl px-4">
        <h2 className="text-[72px] md:text-[128px] font-bold tracking-tight text-slate-300">
          Tech I Use
        </h2>
      </div>

      {/* Rows */}
      {techItems.map((tech, rowIndex) => (
        <div
          key={rowIndex}
          className="tech-row mb-2 text-slate-600 flex whitespace-nowrap items-center justify-center gap-4"
          aria-label={tech.name}
        >
          {Array.from({ length: 15 }).map((_, index) => (
            <div key={index} className="flex items-center gap-4">
              <span
                className="text-[96px] font-extrabold uppercase tracking-tighter"
                style={{
                  color: index === 7 ? tech.color : "inherit",
                }}
              >
                {tech.name}
              </span>
              <FaCircle className="text-3xl" />
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
