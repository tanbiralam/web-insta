import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const languages = ["English", "Spanish", "French"]; // Add your supported languages

  const handleLanguageSelect = (language) => {
    setGlobalLanguage(language);
    setSelectedLanguage(language);
    setLanguageMenuOpen(false);
  };


  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 transition duration-300">
            SaveInsta
          </a>
        </div>

        <div className="hidden md:flex space-x-4 text-black">
          <a href="#" className="hover:underline">
            Instagram Video Downloader
          </a>
          <div className="relative" onClick={toggleLanguageMenu}>
            {/* <a href="#" className="hover:underline cursor-pointer">
              Language
            </a> */}
            {isLanguageMenuOpen && (
              <div className="absolute z-10 mt-2 py-2 w-24 bg-white border border-gray-300 rounded">
                {languages.map((language, index) => (
                  <p
                    key={index}
                    className="cursor-pointer hover:bg-gray-200 py-1 px-3"
                    onClick={() => handleLanguageSelect(language)}
                  >
                    {language}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-black text-xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-4">
          <a href="#" className="block text-black p-2">
            Instagram Video Downloader
          </a>
          {/* <a href="#" className="block text-black p-2">
            Private Downloader
          </a> */}
          <div className="relative" onClick={toggleLanguageMenu}>
            {/* <a href="#" className="block text-black p-2 cursor-pointer">
              Language
            </a> */}
            {isLanguageMenuOpen && (
              <div className="absolute z-10 bg-white border border-gray-300 rounded">
                {languages.map((language, index) => (
                  <p
                    key={index}
                    className="cursor-pointer hover:bg-gray-200 py-1 px-3"
                    onClick={() => handleLanguageSelect(language)}
                  >
                    {language}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
