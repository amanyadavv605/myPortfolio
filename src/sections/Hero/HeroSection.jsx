import React, { useEffect } from 'react';
import gsap from 'gsap';
import Scene from './Shapes/Scene';

const HeroSection = () => {
  const firstName = 'Aman';
  const lastName = 'Yadav';
  const tagLine = 'Always Learning, Always Creating';

  const firstNameLetters = firstName.split('');
  const lastNameLetters = lastName.split('');

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.to('.name-animation', { opacity: 1 });
      gsap.to('.job-title', { opacity: 1 });
      return;
    }

    const tl = gsap.timeline();

    tl.fromTo(
      '.name-animation',
      {
        x: -150,
        opacity: 0,
        rotate: -20,
      },
      {
        x: 0,
        rotate: 0,
        opacity: 1,
        ease: 'elastic.out(1, 0.3)',
        duration: 1,
        transformOrigin: 'left top',
        delay: 0.1,
        stagger: {
          each: 0.1,
          from: 'random',
        },
      }
    );

    tl.fromTo(
      '.job-title',
      {
        y: 20,
        opacity: 0,
        scale: 1.4,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scale: 1,
        ease: 'elastic.out(1, 0.3)',
      }
    );
  }, []);

  return (
    <section className="px-4 md:px-6">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid min-h-[65vh] grid-cols-1 items-center md:grid-cols-2">
          {/* Right Side: 3D Scene or Image */}
          <div className="relative z-10 row-span-1 row-start-1 -my-10 aspect-[1/1.3] overflow-hidden md:col-span-1 md:col-start-2 md:mt-0">
            <Scene />
          </div>

          {/* Left Side: Text & Animation */}
          <div className="col-start-1 md:row-start-1">
            <h1 className="mb-0 md:mb-8 text-[clamp(3rem,20vmin,13rem)] font-extrabold leading-none tracking-tighter text-nowrap text-white">
              <span className="block text-slate-300">
                {firstNameLetters.map((letter, index) => (
                  <span key={`first-${index}`} className="name-animation inline-block opacity-0">
                    {letter}
                  </span>
                ))}
              </span>
              <span className="block text-slate-500 -mt-[.2em]">
                {lastNameLetters.map((letter, index) => (
                  <span key={`last-${index}`} className="name-animation inline-block opacity-0">
                    {letter}
                  </span>
                ))}
              </span>
            </h1>
            <span className="job-title block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-transparent text-2xl font-bold uppercase tracking-[.3em] md:text-4xl opacity-0">
              {tagLine}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
