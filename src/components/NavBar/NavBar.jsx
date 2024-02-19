import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

const NavBar = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = (page) => {
    setActivePage(page);
    setIsMenuOpen(false);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const threshold = 0;

    if (scrollPosition > threshold && !isScrolled) {
      setIsScrolled(true);
    } else if (scrollPosition <= threshold && isScrolled) {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <div className={`NavBar ${isScrolled ? "scrolled" : ""}`}>
      <div className="NavAll">
        <div className="NavPo">
          <label htmlFor="darkModeSwitch" className="switch">
            <FontAwesomeIcon icon={faHeart} className="icon2" />
            <input type="checkbox" id="darkModeSwitch" />
            <span className="slider">
              <FontAwesomeIcon icon={faUser} className="icon" />
            </span>
          </label>
          <select value={selectedOption} onChange={handleSelectChange}>
            <option value="Ar" selected>
              Ar
            </option>
            <option value="En">En</option>
          </select>
        </div>
        <div>
          <nav className={`nav ${isMenuOpen ? "nav--open" : ""}`}>
            <ul className="list">
              <li
                className={`item ${
                  activePage === "Recommendations" && "active"
                }`}
              >
                <Link
                  to="/Recommendations"
                  className={`link ${
                    activePage === "Recommendations" ? "active" : ""
                  }`}
                  onClick={() => handleNavLinkClick("Recommendations")}
                >
                  التوصيات
                </Link>
              </li>
              <li className={`item ${activePage === "Blogs" && "active"}`}>
                <Link
                  to="/Blogs"
                  className={`link ${activePage === "Blogs" ? "active" : ""}`}
                  onClick={() => handleNavLinkClick("Blogs")}
                >
                  المدونة
                </Link>
              </li>
              <li className={`item ${activePage === "Explore " && "active"}`}>
                <Link
                  to="/Explore "
                  className={`link ${
                    activePage === "Explore " ? "active" : ""
                  }`}
                  onClick={() => handleNavLinkClick("Explore ")}
                >
                  استكشف
                </Link>
              </li>
              <li className={`item ${activePage === "About " && "active"}`}>
                <Link
                  to="/About "
                  className={`link ${activePage === "About " ? "active" : ""}`}
                  onClick={() => handleNavLinkClick("About ")}
                >
                  عن سوريا
                </Link>
              </li>
              <li className={`item ${activePage === "Home" && "active"}`}>
                <Link
                  to="/"
                  className={`link ${activePage === "Home" ? "active" : ""}`}
                  onClick={() => handleNavLinkClick("Home")}
                >
                  الرئيسية
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="both">
          <h1>
            <span>Visit </span> Syria
          </h1>
          <div
            className={`hamburger ${isMenuOpen ? "hamburger--open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
