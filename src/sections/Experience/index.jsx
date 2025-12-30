import Bounded from "../../components/Bounded.jsx"
import Heading from "../../components/Heading.jsx"
import React from "react";

export default function Experience() {
  const experiences = [
    {
      title: "Web Development",
      timePeriod: "2024 – Present",
      institution: "Self Learning / Projects",
      description: (
        <>
          <p>
            Working on modern web applications using JavaScript and React.
            Building responsive UIs, reusable components, and clean layouts
            with Tailwind CSS and Bootstrap.
          </p>
          <p>
            Focused on improving problem-solving skills and understanding
            full-stack development using Node.js, Express, and MongoDB.
          </p>
        </>
      ),
    },
    {
      title: "Programming Foundations",
      timePeriod: "2023 – present",
      institution: "Academic Learning",
      description: (
        <>
          <p>
            Learned core programming concepts using C and C++, which helped
            build strong logical thinking and understanding of data structures
            and algorithms.And also got familiar with CS fundamentals like OOP,
            DBMS, OS, etc.
          </p>
        </>
      ),
    },
  ];

  return (
    <Bounded>
      {/* Section Heading */}
      <Heading as="h2" size="lg">
        Experience
      </Heading>

      {/* Experience Items */}
      {experiences.map((item, index) => (
        <div
          key={index}
          className="ml-6 mt-8 max-w-prose md:ml-12 md:mt-16"
        >
          <Heading as="h3" size="sm">
            {item.title}
          </Heading>

          <p className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-light text-slate-400">
            <span>{item.timePeriod}</span>
            <span className="text-3xl font-extralight">/</span>
            <span>{item.institution}</span>
          </p>

          <div className="text-slate-200 mt-4">
            {item.description}
          </div>
        </div>
      ))}
    </Bounded>
  );
}
