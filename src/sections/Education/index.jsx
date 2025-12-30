import Bounded from "../../components/Bounded.jsx"
import Heading from "../../components/Heading.jsx"

export default function Education() {
  const experiences = [
    {
      title: "Bachelors of Computer Application (BCA)",
      timePeriod: "2023 – 2026",
      institution: "Shri Vaishnav Vidyapeeth Vishwavidyalaya",
      description: (
        <>
          <p>
            Pursuing a Bachelor's degree in Computer Applications with a focus
            on software development, web technologies, and database management.
            Gained practical experience through projects and internships.
          </p>
        </>
      ),
    }
  ];

  return (
    <Bounded>
      {/* Section Heading */}
      <Heading as="h2" size="lg">
        Education
      </Heading>

      {/* Education Items */}
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
