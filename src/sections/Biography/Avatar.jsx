import { useEffect, useRef } from "react";
import gsap from "gsap";
import clsx from "clsx";

export default function Avatar({ imageUrl, className }) {
  const componentRef = useRef(null);
  const avatarRef = useRef(null);
  const highlightRef = useRef(null);

  const lastMouseX = useRef(0);

  useEffect(() => {
    const DEFAULT_ROTATION = -1;
    // Intro animation
    gsap.fromTo(
      avatarRef.current,
      { opacity: 0, scale: 1.4, rotation: DEFAULT_ROTATION },
      {
        opacity: 1,
        scale: 1,
        rotation: DEFAULT_ROTATION,
        duration: 1.3,
        ease: "power3.inOut",
      }
    );

    const handleMouseMove = (e) => {
      if (!componentRef.current) return;

      const rect = componentRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;

      lastMouseX.current = e.clientX;

      const percentX = (e.clientX - centerX) / rect.width / 2;
      const distFromCenter = 1 - Math.abs(percentX);

      gsap.timeline({
        defaults: {
          duration: 0.5,
          overwrite: "auto",
          ease: "power3.out",
        },
      })
        .to(
          avatarRef.current,
          {
            rotation: gsap.utils.clamp(-2, 2, 5 * percentX),
          },
          0
        )
        .to(
          highlightRef.current,
          {
            opacity: distFromCenter - 0.7,
            x: -10 + 20 * percentX,
          },
          0
        );
    };

    const handleMouseLeave = () => {
      if (!componentRef.current) return;

      const rect = componentRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;

      // 👇 detect exit direction
      const exitRotation =
        lastMouseX.current < centerX ? -1.5 : 1.5;

      gsap.to(avatarRef.current, {
        rotation: exitRotation,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.to(highlightRef.current, {
        opacity: 0,
        x: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    const el = componentRef.current;
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={componentRef}
      className={clsx("relative h-full w-full", className)}
    >
      <div
        ref={avatarRef}
        className="aspect-square overflow-hidden rounded-3xl border-2 border-slate-700 opacity-0"
      >
        <img
          src={imageUrl}
          alt="Avatar"
          className="h-full w-full object-fill"
        />

        <div
          ref={highlightRef}
          className="absolute inset-0 w-full scale-110 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0"
        />
      </div>
    </div>
  );
}
