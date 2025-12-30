import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

export default function ContentList({ items, viewMoreText }) {
  const listRef = useRef(null);
  const hoverRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(null);
  const lastMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    gsap.utils.toArray(".content-list-item").forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1.3,
          ease: "elastic.out(1,0.3)",
          scrollTrigger: {
            trigger: item,
            start: "top bottom-=200px",
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!hoverRef.current) return;

      const mouse = { x: e.clientX, y: e.clientY + window.scrollY };
      const speed = Math.abs(mouse.x - lastMouse.current.x);

      const maxX = window.innerWidth - 250;
      const maxY = window.scrollY + window.innerHeight - 350;

      gsap.to(hoverRef.current, {
        x: gsap.utils.clamp(0, maxX, mouse.x - 110),
        y: gsap.utils.clamp(0, maxY, mouse.y - 160),
        rotation: speed * (mouse.x > lastMouse.current.x ? 1 : -1),
        duration: 1.3,
        ease: "back.out(2)",
      });

      gsap.to(hoverRef.current, {
        opacity: currentIndex === null ? 0 : 1,
        visibility: "visible",
        duration: 0.6,
        ease: "power3.out",
      });

      lastMouse.current = mouse;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [currentIndex]);

  return (
    <>
      <ul
        ref={listRef}
        onMouseLeave={() => setCurrentIndex(null)}
        className="grid border-b border-b-slate-100"
      >
        {items.map((item, index) => (
          <li
            key={item.id}
            className="content-list-item opacity-0"
            onMouseEnter={() => setCurrentIndex(index)}
          >
            <a
              href={item.link}
              className="flex flex-col justify-between border-t border-t-slate-100 py-10 text-slate-200 md:flex-row"
            >
              <div>
                <span className="text-3xl font-bold">{item.title}</span>
                <div className="flex gap-3 text-yellow-400">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-lg font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <span className="ml-auto flex items-center gap-2 text-xl font-medium md:ml-0">
                {viewMoreText}
                <MdArrowOutward />
              </span>
            </a>
          </li>
        ))}
      </ul>

      {/* Hover image */}
      <div
        ref={hoverRef}
        className="hover-reveal pointer-events-none absolute left-0 top-0 -z-10 h-[320px] w-[220px] rounded-lg bg-cover bg-center opacity-0"
        style={
          currentIndex === null
            ? {}
            : { backgroundImage: `url(${items[currentIndex].image})` }
        }
      />
    </>
  );
}
