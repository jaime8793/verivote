import { useState } from "react";
import { Menu, X, Globe, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Candidates", path: "/candidates" },
    { name: "Compare", path: "/compare" },
    { name: "Elections", path: "/elections" },
    { name: "Issues", path: "/issues" },
    { name: "Resources", path: "/resources" },
    { name: "Account", path: "/account" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4 lg:px-6 xl:px-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="public/App Icon.png"
              alt="Logo"
              className="h-8 lg:h-10 xl:h-12"
            />
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8 text-gray-700 font-medium">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="hover:text-blue-600 relative group text-sm lg:text-base xl:text-lg transition-colors duration-200"
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                </Link>
              </li>
            ))}

            {/* Language & Accessibility */}
            <li>
              <button className="flex items-center space-x-1 hover:text-blue-600 px-2 py-1 rounded-md hover:bg-blue-50">
                <Globe size={16} />
                <span>Eng</span>
              </button>
            </li>
            <li>
              <button className="hover:text-blue-600 p-2 rounded-md hover:bg-blue-50">
                <Star size={16} />
              </button>
            </li>
            <li>
              <button className="hover:text-blue-600 p-2 rounded-md hover:bg-blue-50">
                <img
                  src="public/mynaui_accessibility-solid.png"
                  alt="Accessibility"
                  className="h-6 w-6"
                />
              </button>
            </li>
          </ul>

          {/* Mobile Nav Icons */}
          <div className="flex items-center space-x-4 md:hidden">
            <button className="text-gray-600 hover:text-gray-800">
              <Globe size={20} />
            </button>
            <button>
              <img
                src="@/assets/mynaui_accessibility-solid.png"
                alt="Accessibility"
                className="h-6 w-6"
              />
            </button>
            <button onClick={() => setMenuOpen(true)} className="text-gray-700">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-[64px] inset-x-0 bottom-0 bg-white z-40 flex flex-col items-center px-6 md:hidden animate-in slide-in-from-top duration-300">
          {/* Close Button */}
          <div className="w-full flex justify-start py-6">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-2xl text-black hover:text-gray-600 p-2 rounded-md hover:bg-gray-100"
            >
              <X size={28} />
            </button>
          </div>

          {/* Mobile Nav Items */}
          <div className="flex flex-col items-center space-y-6 w-full">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="text-xl font-semibold text-gray-800 border-b w-full text-center pb-2 hover:text-blue-600 hover:border-blue-600"
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile language + accessibility */}
            <div className="flex items-center justify-center space-x-8 pt-4 border-t w-full">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                <Globe size={20} />
                <span className="text-lg font-medium">Language</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                <img
                  src="@/assets/mynaui_accessibility-solid.png"
                  alt="Accessibility"
                  className="h-5 w-5"
                />
                <span className="text-lg font-medium">Accessibility</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
