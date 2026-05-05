import React from "react";
import { Navigation } from "../components/Navigation";
import { Link } from "react-router";
import { Footer } from "../components/Footer";

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#001F3F] to-[#002b5c] text-white py-24 px-6 md:px-12 lg:px-20">

  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0 opacity-40 mix-blend-overlay">
    <img
      src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80"
      alt="Team meeting"
      className="w-full h-full object-cover"
    />
  </div>

  {/* DARK OVERLAY (keeps text readable) */}
  <div className="absolute inset-0 bg-[#001F3F]/80"></div>

  {/* Glow Effects */}
  <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>
  <div className="absolute bottom-[-80px] right-[-80px] w-72 h-72 bg-yellow-400/20 blur-3xl rounded-full"></div>

  {/* CONTENT */}
  <div className="relative z-10 text-center max-w-4xl mx-auto">
    
    <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
      About <span className="text-[#D4A017]">Us</span>
    </h1>

    <p className="text-[#D4A017] text-lg md:text-xl max-w-2xl mx-auto mb-10">
      Giving Resultz. Changing Lives.
    </p>

    {/* Divider */}
    <div className="w-24 h-1 bg-[#D4A017] mx-auto mb-10 rounded-full"></div>

    {/* FEATURES */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-12">
      {["Trusted HR Partner", "Leadership Growth", "Proven Results", "Client Focused"].map((item, i) => (
        <div
          key={i}
          className="bg-white/5 border border-white/10 backdrop-blur-md rounded-lg py-3 px-2"
        >
          {item}
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
      <span>New Here?</span>

      <Link
        to="/NewHirePortal"
        className="inline-flex items-center px-6 py-3 rounded-md font-medium transition-all hover:scale-105"
        style={{
          background: "linear-gradient(90deg, #D4A017, #FFD95A)",
          color: "#001F3F",
        }}
      >
        Join Onboarding Session →
      </Link>
    </div>

  </div>
</section>

      {/* Intro */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-600 text-lg leading-relaxed">
            Cherrie Give Resultz is a mission-driven HR consulting firm
            dedicated to helping organizations build stronger teams, improve
            workforce performance, and achieve measurable results. We combine
            strategy, innovation, and human-centered solutions to support
            businesses and nonprofit organizations in reaching their full
            potential.
          </p>
        </div>
      </section>

      {/* Core Sections */}
      <section className="pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto  gap-8">
          {/* Mission */}
          <div className="bg-[#F8F9FA] p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
            <div className="mb-5">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#D4A017]/10">
                <span className="text-[#D4A017] text-2xl font-bold">M</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#001F3F] mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To empower organizations with affordable, high-impact HR solutions
              that drive measurable results, strengthen teams, and create
              opportunities for diverse talent to succeed. We are committed to
              delivering excellence while maintaining accessibility for growing
              businesses and nonprofit organizations.
            </p>
          </div>

          {/* Leadership */}
          <div className="bg-[#F8F9FA] p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 my-10">
            <div className="mb-5">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#00A896]/10">
                <span className="text-[#00A896] text-2xl font-bold">L</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#001F3F] mb-4">
              Leadership Philosophy
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our leadership approach is rooted in integrity, inclusion, and
              results-driven strategy. We believe effective leadership balances
              expertise with empathy, ensuring decisions support both
              organizational growth and employee well-being. We lead with
              accountability and a focus on long-term impact.
            </p>
          </div>

          {/* Structure */}
          <div className="bg-[#F8F9FA] p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
            <div className="mb-5">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#D4A017]/10">
                <span className="text-[#D4A017] text-2xl font-bold">O</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#001F3F] mb-4">
              Organizational Structure
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              CGR operates with a flat, agile, and department-based structure
              designed for speed and collaboration in a fully remote setting: <br />
              Founder/Principal Consultant. overall vision and strategic
              direction. <br />
              Department Heads (HR, IT, Admin, Talent Acquisition,
              etc.)  each leads their area. <br /> 
              Supervisors  manage direct reports and oversee up to 4 specialized teams (Team 1-4) within their department. <br /> 
              Team Members - individual contributors who report
              directly to their supervisor. <br />
              This structure keeps decision-making close to the work, supports cross-department collaboration, and
              ensures every employee/Intern has a dedicated supervisor for personalized growth and support. It is intentionally lean to maintain the flexibility and superhero spirit that defines CGR
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#002b5c] py-16 px-6 md:px-12 lg:px-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to Build a Stronger Team?
        </h2>
        <p className="text-white mb-6">
          Partner with us to create impactful HR solutions that drive results.
        </p>
        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          <a
            href="mailto:sales@cherriegiveresultz.com?subject=Consultation Request"
            className="bg-[#D4A017] text-[#001F3F] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
          Get Started
          </a>

          <a
           href="mailto:sales@cherriegiveresultz.com?subject=Donation Inquiry"
           className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Donate
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
