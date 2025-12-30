import { MdArrowOutward } from "react-icons/md";

export default function Button({
  label,
  type = "button",
  className = "",
  onClick,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 font-bold text-slate-900 transition-transform hover:scale-105 ${className}`}
    >
      <span className="absolute inset-0 z-0 translate-y-9 bg-yellow-300 transition-transform duration-300 group-hover:translate-y-0" />
      <span className="relative z-10 flex items-center gap-2">
        {label}
        <MdArrowOutward />
      </span>
    </button>
  );
}
