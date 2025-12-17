import { MdArrowOutward } from "react-icons/md";

export default function Button({
  href = "#",
  label = "Button",
  showIcon = true,
  className = "",
}) {
  return (
    <a
      href={href}
      className={`group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 font-bold text-slate-900 transition-transform ease-out hover:scale-105 ${className}`}
    >
      {/* Background slide */}
      <span className="absolute inset-0 z-0 h-full translate-y-9 rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0" />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {label}
        {showIcon && <MdArrowOutward />}
      </span>
    </a>
  );
}
