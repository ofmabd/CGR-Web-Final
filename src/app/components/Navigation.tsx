import { Link } from "react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "HR Services", path: "/hr-services" },
    { name: "Training & Development", path: "/training" },
    { name: "Careers", path: "/careers" },
    { name: "Resource Hub", path: "/resources" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav style={{ backgroundColor: "var(--navy)" }} className="sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex flex-col">
              <span className="text-white text-xl sm:text-2xl" style={{ fontWeight: 700 }}>
                Cherrie Give Resultz
              </span>
              <span className="text-[var(--gold)] text-xs sm:text-sm tracking-wider">
                STRATEGIC HR SOLUTIONS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-white hover:text-[var(--gold)] transition-colors text-center"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-md transition-all hover:opacity-90 hover:shadow-lg text-center"
              style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
            >
              Schedule a Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
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