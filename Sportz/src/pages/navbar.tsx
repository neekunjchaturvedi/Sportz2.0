import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState("transparent");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 100) {
        setNavbarBg("bg-[#011936]");
      } else {
        setNavbarBg("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 flex justify-between items-center text-white shadow-lg z-50 ${navbarBg}`}
    >
      <div className="text-3xl font-bold ml-2">
        <h1>Logo</h1>
      </div>

      <div className="hidden md:flex justify-center space-x-12 ml-96">
        {["Home", "About", "Features", "Pricing", "Contact Us"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/ /g, "")}`}
            className="font-Raleway font-semibold text-2xl hover:text-[#FE221E] transition"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="space-x-6 ml-auto hidden md:flex">
        <button
          onClick={() => setIsModalOpen(true)}
          className="font-Raleway font-semibold text-xl sm:text-2xl bg-[#FE221E] hover:bg-red-500 transition cursor-pointer text-white px-6 py-3 rounded-xl"
        >
          Sign Up
        </button>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="relative bg-white p-6 rounded-lg">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-2 right-6 text-gray-600 hover:text-gray-800 text-2xl"
              >
                &times;
              </button>
              {/* Render the Signup component inside the modal */}
              {/* <Signup /> */}
            </div>
          </div>
        )}
      </div>

      <div
        className="md:hidden flex items-center cursor-pointer relative"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <i className="fas fa-times text-4xl text-white absolute top-4 right-4"></i>
        ) : (
          <i className="fas fa-bars text-3xl text-white"></i>
        )}
      </div>

      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } absolute top-0 right-0 w-full bg-[#011936] rounded-2xl p-6 z-40`}
      >
        <i
          className="fas fa-times text-4xl text-white absolute cursor-pointer top-4 right-4"
          onClick={toggleMenu}
        ></i>

        <div className="flex flex-col items-center space-y-6">
          {["Home", "About", "Features", "Pricing", "Contact Us"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "")}`}
                className="font-Raleway font-semibold text-xl text-white hover:text-[#FE221E] transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            )
          )}
          <div className="flex space-x-4"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
