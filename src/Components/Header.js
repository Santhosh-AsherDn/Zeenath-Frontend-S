import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./css/header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleNavbar = () => setIsOpen(!isOpen);

  const getActiveClass = (path) =>
    location.pathname === path ? "nav-item activeline" : "nav-item";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header id="headerId" className={`header ${isSticky ? "sticky" : ""}`}>
      <Link to="/" className="navbar-brand" id="zeenath-logo-position">
        <img src="/images/zeenath-logo.svg" alt="Zeenath Logo" />
      </Link>

      <nav className="navbar navbar-expand-lg navbar-light">
        <button
          className={`navbar-toggler ${isOpen ? "open" : ""}`}
          onClick={toggleNavbar}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
          <span className="close-icon">×</span>
        </button>

        <div className={`navbar-collapse ${isOpen ? "show" : ""}`}>
          <nav className="stroke">
            <ul className="navbar-nav">
              <li className={getActiveClass("/")}>
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className={getActiveClass("/accomodation")}>
                <Link
                  to="/accomodation"
                  className="nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  Rooms & Cottages
                </Link>
              </li>
              <li className={getActiveClass("/dining")}>
                <Link
                  to="/dining"
                  className="nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  Dining
                </Link>
              </li>
              <li className={getActiveClass("/fun-filled-activites")}>
                <Link
                  to="/fun-filled-activites"
                  className="nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  Activity & Facilities
                </Link>
              </li>
              <li className={getActiveClass("/contact")}>
                <Link
                  to="/contact"
                  className="nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </header>
  );
}
