import { Link } from "react-router";
import { Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer
      style={{ backgroundColor: "var(--navy)" }}
      className="text-white py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl mb-4" style={{ color: "var(--gold)" }}>
              Apex Workforce & Talent foundation
            </h3>
            <p className="text-sm text-gray-400 mb-2">EIN: 42-1985493</p>
            <p className="text-gray-300 mb-4">
              Strategic HR solutions designed to strengthen leadership, protect
              organizations, and drive measurable results.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-white hover:text-[var(--gold)] transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:admin@apexmission.org"
                className="text-white hover:text-[var(--gold)] transition-colors flex items-center gap-2"
              >
                <Mail size={24} className="pointer-events-none" />
              </a>

              <a
                href="tel:844-497-4020"
                className="text-white hover:text-[var(--gold)] transition-colors flex items-center gap-2"
              >
                <Phone size={24} />
                {/* <span>844-497-4020</span> */}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-4" style={{ color: "var(--gold)" }}>
              Quick Links
            </h3>
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-gray-300 hover:text-[var(--gold)] transition-colors"
              >
                Home
              </Link>
              <Link
                to="/hr-services"
                className="text-gray-300 hover:text-[var(--gold)] transition-colors"
              >
                HR Services
              </Link>
              <Link
                to="/training"
                className="text-gray-300 hover:text-[var(--gold)] transition-colors"
              >
                Training & Development
              </Link>
              <Link
                to="/careers"
                className="text-gray-300 hover:text-[var(--gold)] transition-colors"
              >
                Careers
              </Link>
              <Link
                to="/resources"
                className="text-gray-300 hover:text-[var(--gold)] transition-colors"
              >
                Resource Hub
              </Link>
            </div>
          </div>

          {/* HR Support */}
          <div>
            <h3 className="text-xl mb-4" style={{ color: "var(--gold)" }}>
              HR Support
            </h3>
            <div className="flex flex-col gap-2">
              <Link
                to="/contact"
                className="text-gray-300 hover:text-[var(--gold)] transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdoMmNBdUX7Uv-C5AbMCl-uGeZHDDAxPyI6gfVUEUPtp6DwUQ/viewform?usp=sharing&ouid=104256615181727486514"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[var(--gold)] transition-colors"
              >
                HR Support Request
              </a>
              {/* <Link
                to="/contact"
                className="text-gray-300 hover:text-[var(--gold)] transition-colors"
              >
                Schedule Consultation
              </Link> */}
              <a
                href="https://docs.google.com/document/d/1Uz2fKbvtt6JiKcYAQu7HVQyeLve5RqSkFfJOZHva-Wo/edit?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[var(--gold)] transition-colors"
              >
                Privacy Policy
              </a>

              <a
                href="https://docs.google.com/document/d/1VAOeE3I9YoasIoa8vmi5mOnSgfJH2vICJo8Y3lmjy5g/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[var(--gold)] transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 text-center text-gray-400">
          <p>
            &copy; 2026 Apex Workforce & Talent foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
