import { Link, useLocation } from "react-router-dom";
import "./css/header.css";
import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const getActiveClass = (path) => {
    return location.pathname === path ? "nav-item activeline" : "nav-item";
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle state
  };

  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Function to handle scroll event
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Check if scrolling down and scroll position is beyond a certain threshold
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scroll down and past a certain point (100px)
      setIsSticky(true);
    } else {
      // Scroll up or hasn't scrolled past the threshold
      setIsSticky(false);
    }

    setLastScrollY(currentScrollY); // Update the last scroll position
  };

  // Add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header id="headerId" className={`header ${isSticky ? "sticky" : ""}`}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link to="/" className="navbar-brand" id="zeenath-logo-position">
          <img src="/images/zeenath-logo.svg" alt="Zeenath Logo" />
        </Link>
        <button
          className={`navbar-toggler ${isOpen ? "open" : ""}`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
          <span className="close-icon">×</span>
        </button>
        <div
          className={`navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <nav className="stroke">
            <ul className="navbar-nav">
              <li className={getActiveClass("")}>
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
              <li className={`green ${getActiveClass("/contact")}`}>
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
