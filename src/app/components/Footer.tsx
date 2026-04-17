import { Link } from "react-router";
import { Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--navy)" }} className="text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl mb-4" style={{ color: "var(--gold)" }}>
              Cherrie Give Resultz
            </h3>
            <p className="text-sm text-gray-400 mb-2">
              EIN: 39-2971068
            </p>
            <p className="text-gray-300 mb-4">
              Strategic HR solutions designed to strengthen leadership, protect organizations, and drive measurable results.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-[var(--gold)] transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-white hover:text-[var(--gold)] transition-colors">
                <Mail size={24} />
              </a>
              <a href="#" className="text-white hover:text-[var(--gold)] transition-colors">
                <Phone size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-4" style={{ color: "var(--gold)" }}>
              Quick Links
            </h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-gray-300 hover:text-[var(--gold)] transition-colors">
                Home
              </Link>
              <Link to="/hr-services" className="text-gray-300 hover:text-[var(--gold)] transition-colors">
                HR Services
              </Link>
              <Link to="/training" className="text-gray-300 hover:text-[var(--gold)] transition-colors">
                Training & Development
              </Link>
              <Link to="/careers" className="text-gray-300 hover:text-[var(--gold)] transition-colors">
                Careers
              </Link>
              <Link to="/resources" className="text-gray-300 hover:text-[var(--gold)] transition-colors">
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
              <Link to="/contact" className="text-gray-300 hover:text-[var(--gold)] transition-colors">
                Contact Us
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-[var(--gold)] transition-colors">
                HR Support Request
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-[var(--gold)] transition-colors">
                Schedule Consultation
              </Link>
              <Link to="/resources" className="text-gray-300 hover:text-[var(--gold)] transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
          <p>&copy; 2026 Cherrie Give Resultz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
