const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-500 via-purple-500 to-green-500 text-white py-4">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center flex-wrap">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-semibold">SaveInsta</h3>
            <p className="text-sm mt-2">Your Instagram video downloader.</p>
          </div>

          <div className="text-center md:text-left mb-4 md:mb-0">
            <ul className="mt-2 flex space-x-4 font-semibold">
              <li>
                <a href="#home" className="text-white hover:text-black transition">Home</a>
              </li>
              <li>
                <a href="#about" className="text-white hover:text-black transition">About</a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:text-black transition">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
