import { useLocation } from "react-router-dom";

export default function NavLink({
  href = "/",
  label,
  onLinkClick,
  type = "desktop",
}) {
  const location = useLocation();
  const isActive = location.pathname.includes(href);

  const baseClasses =
    "group relative block overflow-hidden rounded text-slate-900 font-bold";

  const desktopClasses = "px-3 py-1 text-base";
  const mobileClasses = "px-3 text-3xl";

  const activeTranslate =
    type === "desktop"
      ? isActive
        ? "translate-y-6"
        : "translate-y-8"
      : isActive
      ? "translate-y-6"
      : "translate-y-16";

  return (
    <a
      href={href}
      onClick={onLinkClick}
      aria-current={isActive ? "page" : undefined}
      className={`${baseClasses} ${
        type === "desktop" ? desktopClasses : mobileClasses
      }`}
    >
      {/* Background slide */}
      <span
        className={`absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0 ${activeTranslate}`}
      />

      {/* Label */}
      <span className="relative">{label}</span>
    </a>
  );
}
