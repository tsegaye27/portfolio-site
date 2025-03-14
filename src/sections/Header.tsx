import Link from "next/link";
export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-20">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/5  backdrop-blur">
        <Link href="/" className="nav-item">
          Home
        </Link>
        <Link href="/" className="nav-item">
          Experience
        </Link>
        <Link href="/" className="nav-item">
          About
        </Link>
        <Link
          href="/"
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};
