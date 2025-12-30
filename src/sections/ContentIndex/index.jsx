import Bounded from "../../components/Bounded";
import Heading from "../../components/Heading";
import ContentList from "./ContentList";

export default function ContentIndex() {
  const items = [
    {
      id: 1,
      title: "Gym Website",
      tags: ["React", "Tailwind"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      link: "https://elite-fitness-nine.vercel.app",
    },
  ];

  return (
    <Bounded>
      <Heading size="xl" className="mb-8">
        Featured Projects
      </Heading>

      <div className="text-white mb-10">
        <p>
          A selection of projects showcasing my experience in frontend and
          full-stack web development.
        </p>
      </div>

      <ContentList
        items={items}
        viewMoreText="View Project"
      />
    </Bounded>
  );
}
