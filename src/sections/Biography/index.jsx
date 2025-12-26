import Bounded from "../../components/Bounded";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Avatar from "./Avatar";
import imageUrl from "../../assets/profile.jpeg";

export default function Biography() {
  return (
    <Bounded>
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        {/* Heading */}
        <Heading size="xl" className="col-start-1">
          About Me
        </Heading>

        {/* Description */}
        <div className="col-start-1 text-amber-50 text-xl font-extralight space-y-14">
          <p>
            I am <strong>Aman Yadav</strong>, a passionate web developer focused on building
            responsive, clean, and user-friendly web applications. I primarily
            work with JavaScript and React to create dynamic interfaces that
            provide smooth and engaging user experiences.
          </p>
          <p>
            On the backend, I use Node.js, Express, and MongoDB to develop
            scalable APIs and full-stack applications. I also work with Tailwind
            CSS and Bootstrap to design modern, responsive layouts, ensuring
            compatibility across all devices.
          </p>
          <p>
            I enjoy creating creative and interactive web experiences while
            continuously learning and improving my development skills.
          </p>
          <p>
            If you have any queries or would like to connect, please contact me
            by clicking below 👇
          </p>
        </div>

        {/* Button */}
        <Button href="/contact" label="Get in Touch" />

        {/* Avatar */}
        <Avatar
          imageUrl={imageUrl}
          className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
        />
      </div>
    </Bounded>
  );
}
