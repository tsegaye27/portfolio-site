import Link from "next/link";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTelegramPlane,
} from "react-icons/fa";

const footerLinks = [
  {
    title: "Email",
    link: "mailto:ttalegn29@gmail.com",
    icon: <FaEnvelope className="size-5" />,
  },
  {
    title: "LinkedIn",
    link: "https://linkedin.com/in/tsegaye-talegngeta27",
    icon: <FaLinkedin className="size-5" />,
  },
  {
    title: "GitHub",
    link: "https://github.com/tsegaye27",
    icon: <FaGithub className="size-5" />,
  },
  {
    title: "Telegram",
    link: "https://t.me/tsegayetalegn",
    icon: <FaTelegramPlane className="size-5" />,
  },
];

export const Footer = () => {
  return (
    <footer className="relative z-0 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] pointer-events-none -z-10 "></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2025, All rights reserved.</div>
          <nav
            className="flex items-center gap-4 md:gap-8"
            aria-label="Footer links"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5"
              >
                {link.icon}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
