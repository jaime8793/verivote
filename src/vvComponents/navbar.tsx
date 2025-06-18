import { useState } from "react";
import { Menu, X, Globe, Star } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    "Home",
    "About Us",
    "Candidates",
    "Compare",
    "Elections",
    "Issues",
    "Resources",
    "Account",
    "Contact Us",
  ];

  return (
    <>
      {/* Top Nav */}
      <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/" alt="Logo" className="h-8" />
            <span className="font-bold text-xl text-primary">VeriVote</span>
          </div>

          {/* Mobile Icons */}
          <div className="flex items-center space-x-4 md:hidden">
            <button className="text-gray-600">
              <Globe size={20} />
            </button>
            <button className="text-gray-600">
              <Star size={20} />
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              className="text-gray-700 focus:outline-none"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
            {links.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-primary transition">
                  {link}
                </a>
              </li>
            ))}
            <li>
              <button className="flex items-center space-x-1 hover:text-primary">
                <Globe size={18} />
                <span>Eng</span>
              </button>
            </li>
            <li>
              <button className="hover:text-primary">
                <Star size={18} />
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-[64px] inset-x-0 bottom-0 bg-white z-40 flex flex-col items-center px-6 md:hidden">
          {/* Close button on top-left */}
          <div className="w-full flex justify-start py-6">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-2xl text-black"
            >
              <X size={28} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col items-center space-y-6 w-full">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-xl font-semibold text-gray-800 border-b w-full text-center pb-2"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
