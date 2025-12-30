import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import NavLink from "./NavLink";
import Button from "./Button";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  const onLinkClick = () => setOpen(false);

  // inside Header()
const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/download-Resume.pdf";
  link.download = "download-Resume.pdf";
  link.click();
};


  return (
    <header className="relative top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4">
      <nav>
        <div className="flex flex-col justify-between rounded-b-lg bg-slate-50 px-4 py-2 md:flex-row md:items-center md:rounded-xl">
          
          {/* Logo */}
          <div className="flex items-center justify-between">
            <a
              href="/"
              aria-label="Homepage"
              className="text-xl font-extrabold tracking-tighter text-slate-900"
            >
              Aman Yadav
            </a>

            {/* Mobile Menu Button */}
            <button
              aria-expanded={open}
              aria-label="Open Menu"
              className="block p-2 text-2xl text-slate-800 md:hidden"
              onClick={() => setOpen(true)}
            >
              <MdMenu />
            </button>
          </div>

          {/* Mobile Navigation */}
          <ul
            className={`fixed inset-0 z-50 flex flex-col items-end gap-4 bg-slate-50 pr-4 pt-14 transition-transform duration-300 ease-in-out md:hidden ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Close Button */}
            <li>
              <button
                aria-expanded={open}
                aria-label="Close Menu"
                className="fixed right-4 top-3 p-2 text-2xl text-slate-800"
                onClick={() => setOpen(false)}
              >
                <MdClose />
              </button>
            </li>

            {navItems.map(({ label, href }) => (
              <li key={label} className="first:mt-8">
                <NavLink
                  href={href}
                  label={label}
                  onLinkClick={onLinkClick}
                  type="mobile"
                />
              </li>
            ))}

            {/* CTA Button (Mobile) */}
            <Button
              onClick={downloadResume}
              label="Resume"
              className="mt-6"
            />
          </ul>

          {/* Desktop Navigation */}
          <ul className="relative z-50 hidden items-center gap-1 md:flex">
            {navItems.map(({ label, href }) => (
              <li key={label}>
                <NavLink
                  href={href}
                  label={label}
                  onLinkClick={() => {}}
                  type="desktop"
                />
              </li>
            ))}

            {/* CTA Button (Desktop) */}
            <Button
              onClick={downloadResume}
              label="Resume"
              className="ml-3"
            />
          </ul>

        </div>
      </nav>
    </header>
  );
}
