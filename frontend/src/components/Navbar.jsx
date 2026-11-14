import { useEffect, useState, useRef } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

import logoBlack from "../assets/logo(black).png";
import logoWhite from "../assets/logo(white).png";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const [theme, setTheme] = useState(
    () => localStorage.getItem("degreehub-theme") || "dark"
  );

  // Sync user state from localStorage
  const syncUser = () => {
    try {
      const storedUser = localStorage.getItem("pickup_user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    }
  };

  useEffect(() => {
    syncUser();
    window.addEventListener("authChange", syncUser);
    window.addEventListener("storage", syncUser);
    return () => {
      window.removeEventListener("authChange", syncUser);
      window.removeEventListener("storage", syncUser);
    };
  }, []);

  // Handle click outside dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("degreehub-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setTheme(nextTheme);
      });
    } else {
      setTheme(nextTheme);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setShowDropdown(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("pickup_token");
    localStorage.removeItem("pickup_user");
    setUser(null);
    setShowDropdown(false);
    window.dispatchEvent(new Event("authChange"));
    closeMenu();
    navigate("/");
  };

  const getInitials = (name) => {
    if (!name) return "U";
    const parts = name.trim().split(" ");
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`;
    }
    return name.slice(0, 2);
  };

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link className="brand" to="/" onClick={closeMenu}>
          <img src={logoBlack} className="logo-light" alt="PickUP logo" />
          <img src={logoWhite} className="logo-dark" alt="PickUP logo" />

          <span>
            <strong>PickUP</strong>
            <small>Pick Your Grades UP</small>
          </span>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`site-nav ${menuOpen ? "open" : ""}`}>
          <div className="nav-links-group">
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink to="/resources" onClick={closeMenu}>
              Resources
            </NavLink>
            <NavLink to="/cgpa-calculator" onClick={closeMenu}>
              CGPA Calc
            </NavLink>
            <NavLink to="/quiz" onClick={closeMenu}>
              Quiz Panel
            </NavLink>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>

            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>

          <div className="nav-actions-group">
            {user ? (
              <div className="user-dropdown-container" ref={dropdownRef}>
                <button
                  type="button"
                  className={`user-nav-btn ${showDropdown ? "active" : ""}`}
                  onClick={() => setShowDropdown((prev) => !prev)}
                  aria-label="User Account Menu"
                >
                  <span className="user-nav-name">
                    {user.fullName || user.email?.split("@")[0] || "Account"}
                  </span>
                  <span className="dropdown-chevron">▾</span>
                </button>

                {showDropdown && (
                  <div className="user-dropdown-card">
                    <div className="dropdown-user-header">
                      <span className="user-full-name">{user.fullName || "Student"}</span>
                      <span className="user-email-text">{user.email}</span>
                    </div>

                    <Link
                      to="/"
                      className="dropdown-nav-item"
                      onClick={closeMenu}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                        <polyline points="9 22 9 12 15 12 15 22"/>
                      </svg>
                      Home
                    </Link>

                    <Link
                      to="/resources"
                      className="dropdown-nav-item"
                      onClick={closeMenu}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                      </svg>
                      Study Resources
                    </Link>

                    <Link
                      to="/quiz"
                      className="dropdown-nav-item"
                      onClick={closeMenu}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 11l3 3L22 4"/>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                      </svg>
                      Quiz Panel
                    </Link>

                    <Link
                      to="/cgpa-calculator"
                      className="dropdown-nav-item"
                      onClick={closeMenu}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="2" width="16" height="20" rx="2"/>
                        <line x1="8" y1="6" x2="16" y2="6"/>
                        <line x1="16" y1="14" x2="16" y2="18"/>
                        <path d="M16 10h.01"/>
                        <path d="M12 10h.01"/>
                        <path d="M8 10h.01"/>
                        <path d="M12 14h.01"/>
                        <path d="M8 14h.01"/>
                        <path d="M12 18h.01"/>
                        <path d="M8 18h.01"/>
                      </svg>
                      CGPA Calculator
                    </Link>

                    <Link
                      to="/contact"
                      className="dropdown-nav-item"
                      onClick={closeMenu}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                      Contact Support
                    </Link>

                    <div className="dropdown-divider" />

                    <button
                      type="button"
                      className="dropdown-nav-item logout-item"
                      onClick={handleLogout}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                        <polyline points="16 17 21 12 16 7"/>
                        <line x1="21" y1="12" x2="9" y2="12"/>
                      </svg>
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <NavLink to="/signin" onClick={closeMenu}>
                  Sign In
                </NavLink>
                <NavLink to="/signup" onClick={closeMenu}>
                  Sign Up
                </NavLink>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
