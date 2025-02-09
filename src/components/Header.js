import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import logo from "./logo.jpg";
import "./tailwindstyles.css"; // Importing Tailwind CSS styles

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const authStatus = localStorage.getItem("isAuthenticated");
      const userEmail = localStorage.getItem("userEmail");
      setIsAuthenticated(authStatus === "true" && userEmail);
    };

    checkAuth();
    window.addEventListener("storage", checkAuth);
    // Add custom event listener for auth changes
    window.addEventListener("authChange", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
      window.removeEventListener("authChange", checkAuth);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleDashClick = () => {
    navigate("/dashboard");
  };

  const handleSignOut = () => {
    localStorage.setItem("isAuthenticated", "false");
    localStorage.removeItem("userEmail");
    setIsAuthenticated(false);
    window.dispatchEvent(new Event("authChange"));
    navigate("/signin");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleBookDemo = () => {
    navigate("/signin"); // Redirecting to Sign In page
  };

  return (
    <header className={`header-container ${scrolled ? "shadow" : ""}`}>
      <div className="header-wrapper">
        <div className="header-content">
          <div className="logo-group" onClick={handleLogoClick}>
            <img src={logo} alt="Logo" className="logo" />
            <div className="logo-text">ConvolabsAI</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-menu">
            <ul className="nav-list">
              {[
                { href: "#aiagents", label: "AIAgents" },
                { href: "#pricing", label: "Pricing" },
                { href: "#docs", label: "Docs" },
                { href: "#features", label: "Blogs" },
                { href: "/careers", label: "Careers", isExternal: true },
              ].map((item) => (
                <li key={item.label}>
                  {item.isExternal ? (
                    <Link to={item.href} className="nav-link">
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="nav-link"
                      onClick={(e) => {
                        e.preventDefault();
                        handleScrollToSection(item.href);
                      }}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Buttons */}
          <div className="button-group">
            {isAuthenticated && (
              <>
                <button onClick={handleDashClick} className="btn-primary">
                  Dash
                </button>
                <button onClick={handleSignOut} className="btn-danger">
                  Sign Out
                </button>
              </>
            )}
            <button onClick={handleBookDemo} className="btn-primary">
              Join the Waitlist
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isOpen ? "open" : ""}`}>
          <nav>
            <ul className="mobile-nav-list">
              {[
                { href: "#llm", label: "LLM" },
                { href: "#data", label: "Data" },
                { href: "#resources", label: "Resources" },
                { href: "#features", label: "Blogs" },
                { href: "/careers", label: "Careers", isExternal: true },
              ].map((item) => (
                <li key={item.label}>
                  {item.isExternal ? (
                    <Link to={item.href} className="nav-link">
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="nav-link"
                      onClick={(e) => {
                        e.preventDefault();
                        handleScrollToSection(item.href);
                      }}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
              <li className="mobile-button-group">
                {isAuthenticated && (
                  <>
                    <button onClick={handleDashClick} className="btn-primary">
                      Dash
                    </button>
                    <button onClick={handleSignOut} className="btn-danger">
                      Sign Out
                    </button>
                  </>
                )}
                <button onClick={handleBookDemo} className="btn-primary">
                  Book a Demo
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
