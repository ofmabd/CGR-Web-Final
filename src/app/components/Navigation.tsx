// Import Link for navigation between pages
import { Link, NavLink } from "react-router";
// import { NavLink, Link } from "react-router-dom";

// React hook for controlling state (used for mobile menu toggle)
import { useState } from "react";

// Icons for the mobile menu button
import { Menu, X } from "lucide-react";

// Import the logo image
import logo from "../../../assets/logo-icon.png";

export function Navigation() {

  // State that controls whether the mobile menu is open
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation links used in both desktop and mobile menus
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Services", path: "/Services" },
    // { name: "Training & Development", path: "/training" },
    { name: "Contact", path: "/contact" },
    { name: "Resource", path: "/resources" },
    { name: "Login", path: "/Login" },
  ];

  return (
    // Main navbar container
    <nav
      style={{ backgroundColor: "var(--navy)" }}
      className="sticky top-0 z-50 shadow-md"
    >

      {/* Container keeps the navbar aligned with the page content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navbar row */}
        <div className="flex justify-between items-center h-18">

          {/* ================= LOGO + BRAND ================= */}
          {/* Clicking logo returns user to homepage */}
          <Link to="/" className="flex items-center gap-3 min-w-max">
           

            {/* Company logo */}
            <img
              src={logo}
              alt="CGR Logo"
              className="h-12 w-auto"
            />

            {/* Brand text */}
            <div className="flex flex-col">

              {/* Main company name */}
              <span className="brand-text whitespace-nowrap">
                Cherrie Give Resultz
              </span>

              {/* Subtitle / tagline */}
              <span className="text-[var(--gold)] text-xs sm:text-sm tracking-wider">
                STRATEGIC HR SOLUTIONS
              </span>

            </div>
          </Link>


          {/* ================= DESKTOP NAVIGATION ================= */}
          {/* Hidden on smaller screens */}
          <div className="hidden lg:flex items-center gap-4 ml-12">

            {/* Map through navLinks array to generate links */}
              {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="flex items-center justify-center text-white text-sm font-medium tracking-wide px-4 py-2 rounded-md hover:bg-white/10 hover:text-[var(--gold)] transition-all duration-300 text-center"
               >
                {link.name}
              </Link>
            ))}

            {/* CTA Button */}
            {/* <Link
              to="/contact"
              className="px-2 py-1 rounded-md transition-all hover:opacity-90 hover:shadow-lg text-center"
              style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
             >
              Schedule a Consultation
            </Link> */}
          </div>


          {/* ================= MOBILE MENU BUTTON ================= */}
          {/* Only visible on small screens */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {/* Show X when open, Menu icon when closed */}
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>


        {/* ================= MOBILE MENU ================= */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">

            <div className="flex flex-col gap-4">

              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-white hover:text-[var(--gold)] transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile CTA button */}
              <Link
                to="/contact"
                className="px-6 py-2.5 rounded-md transition-all hover:opacity-90 text-center"
                style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Schedule a Consultation
              </Link>

            </div>

          </div>
        )}

      </div>

    </nav>
  );
}