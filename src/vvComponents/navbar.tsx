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
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4 lg:px-6 xl:px-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="../src/assets/App Icon.png"
              alt="Logo"
              className="h-8 lg:h-10 xl:h-12"
            />
          </div>

          {/* Mobile Icons */}
          <div className="flex items-center space-x-4 md:hidden">
            <button className="text-gray-600 hover:text-gray-800 transition-colors">
              <Globe size={20} />
            </button>
            <button className="text-gray-600 hover:text-gray-800 transition-colors">
              <img
                src="../src/assets/mynaui_accessibility-solid.png"
                alt="Accessibility"
                className="h-6 w-6"
              />
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              className="text-gray-700 focus:outline-none hover:text-gray-900 transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8 text-gray-700 font-medium">
            {links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-200 text-sm lg:text-base xl:text-lg hover:text-blue-600 relative group"
                >
                  {link}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                </a>
              </li>
            ))}

            {/* Language Selector */}
            <li>
              <button className="flex items-center space-x-1 hover:text-primary transition-colors duration-200 text-sm lg:text-base xl:text-lg hover:text-blue-600 px-2 py-1 rounded-md hover:bg-blue-50">
                <Globe size={16} className="lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
                <span>Eng</span>
              </button>
            </li>

            {/* Favorites */}
            <li>
              <button className="hover:text-primary transition-colors duration-200 hover:text-blue-600 p-2 rounded-md hover:bg-blue-50">
                <Star size={16} className="lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
              </button>
            </li>

            {/* Accessibility */}
            <li>
              <button className="hover:text-primary transition-colors duration-200 hover:text-blue-600 p-2 rounded-md hover:bg-blue-50">
                <img
                  src="../src/assets/mynaui_accessibility-solid.png"
                  alt="Accessibility"
                  className="h-4 w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6"
                />
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-[64px] inset-x-0 bottom-0 bg-white z-40 flex flex-col items-center px-6 md:hidden animate-in slide-in-from-top duration-300">
          {/* Close button on top-left */}
          <div className="w-full flex justify-start py-6">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-2xl text-black hover:text-gray-600 transition-colors p-2 rounded-md hover:bg-gray-100"
            >
              <X size={28} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col items-center space-y-6 w-full">
            {links.map((link, index) => (
              <a
                key={link}
                href="#"
                className="text-xl font-semibold text-gray-800 border-b w-full text-center pb-2 hover:text-blue-600 hover:border-blue-600 transition-colors duration-200"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link}
              </a>
            ))}

            {/* Mobile Language and Accessibility in Menu */}
            <div className="flex items-center justify-center space-x-8 pt-4 border-t w-full">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Globe size={20} />
                <span className="text-lg font-medium">Language</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <img
                  src="../src/assets/mynaui_accessibility-solid.png"
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
