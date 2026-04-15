import React from "react";
import { Navigation } from "../components/Navigation";
import { Link } from "react-router";

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Navigation Bar */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#001F3F] to-[#002b5c] text-white py-20 px-6 md:px-12 lg:px-20 ">
        <h1 className="text-3xl md:text-6xl font-bold mb-4 text-center">About Us</h1>
        <p className="text-[#D4A017] text-lg max-w-2xl text-center mx-auto">
          Giving Resultz. Changing Lives.
        </p>

        <div className="pt-20 text-right">
            <span className="text-white ">New Here? </span>
            <Link
              to="/NewHirePortal"
              className="inline-flex items-center px-6 py-3 rounded-md  transition-all hover:opacity-60 underline"
              style={{
                color: "var(--gold)",
              }}
            >
              Join Onboarding Session
            </Link>
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
    </div>
  );
};

export default About;
