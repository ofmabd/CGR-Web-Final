import { Link } from "react-router";
import { Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden text-white py-12">

  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0 opacity-30 mix-blend-overlay">
    <img
      src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
      alt="Office workspace"
      className="w-full h-full object-cover"
    />
  </div>

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-[color:var(--navy)]/95"></div>

  {/* GLOW EFFECTS */}
  <div className="absolute top-[-60px] left-[-60px] w-64 h-64 bg-purple-500/20 blur-3xl rounded-full"></div>
  <div className="absolute bottom-[-60px] right-[-60px] w-64 h-64 bg-yellow-400/20 blur-3xl rounded-full"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

      {/* Company Info */}
      <div>
        <h3 className="text-xl mb-4" style={{ color: "var(--gold)" }}>
          Cherrie Give Resultz
        </h3>
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

    {/* Bottom */}
    <div className="border-t border-white/10 pt-8 text-center text-gray-400">
      <p>&copy; 2026 Cherrie Give Resultz. All rights reserved.</p>
    </div>

  </div>
</footer>
  );
}
