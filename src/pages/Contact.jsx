import Bounded from "../components/Bounded";
import Heading from "../components/Heading";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Contact() {
  return (
    <Bounded>
      {/* Heading */}
      <Heading size="xl" className="mb-8">
        Contact
      </Heading>

      {/* Description */}
      <div className="text-slate-200 mb-12 max-w-2xl">
        <p>
          I’m open to discussing new opportunities, projects, or collaborations.
          Feel free to reach out to me using the contact details below.
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-6 text-slate-300">
        {/* Email */}
        <div className="flex items-center gap-4">
          <MdEmail className="text-3xl text-yellow-400" />
          <a
            href="mailto:amanmanohar011@gmail.com"
            className="text-xl font-semibold hover:text-yellow-400 transition-colors"
          >
            amanmanohar011@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4">
          <MdPhone className="text-3xl text-yellow-400" />
          <a
            href="tel:+918839256612"
            className="text-xl font-semibold hover:text-yellow-400 transition-colors"
          >
            +91 88392 56612
          </a>
        </div>
      </div>
    </Bounded>
  );
}
