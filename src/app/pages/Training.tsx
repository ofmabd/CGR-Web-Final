import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Award, BookOpen, Shield, Users, Calendar, Download, ChevronRight } from "lucide-react";
import { Link } from "react-router";

export default function Training() {
  const programs = [
    {
      title: "Supervisor Certification Track",
      description: "Comprehensive program designed to build foundational and advanced supervisory competencies",
      duration: "12 weeks",
      format: "Hybrid (In-person & Virtual)",
      icon: Award,
      modules: [
        "Effective Communication & Feedback",
        "Performance Management Fundamentals",
        "Employee Relations & Conflict Resolution",
        "Labor Law & Compliance Basics",
        "Team Building & Motivation",
        "Decision-Making & Problem-Solving"
      ]
    },
    {
      title: "Leadership Development Series",
      description: "Advanced leadership training for experienced managers and executives",
      duration: "8 weeks",
      format: "Executive Cohort",
      icon: Users,
      modules: [
        "Strategic Leadership & Vision",
        "Change Management & Organizational Transformation",
        "Executive Communication & Influence",
        "Talent Development & Succession Planning",
        "Data-Driven Decision Making",
        "Leading High-Performance Teams"
      ]
    },
    {
      title: "Compliance Training Programs",
      description: "Essential training to ensure regulatory compliance and mitigate organizational risk",
      duration: "4-6 hours per module",
      format: "On-demand & Live Sessions",
      icon: Shield,
      modules: [
        "Workplace Harassment Prevention",
        "FMLA & Leave Management",
        "ADA Reasonable Accommodations",
        "FLSA Wage & Hour Compliance",
        "Equal Employment Opportunity",
        "Workplace Safety & OSHA"
      ]
    },
    {
      title: "Custom Organizational Workshops",
      description: "Tailored training solutions designed for your specific organizational needs",
      duration: "Flexible",
      format: "Customized",
      icon: BookOpen,
      modules: [
        "Team-specific skill development",
        "Change initiative support",
        "Culture transformation workshops",
        "Process improvement training",
        "Custom leadership modules",
        "Department-specific compliance"
      ]
    }
  ];

  const upcomingSessions = [
    {
      title: "Supervisor Certification Track - Spring Cohort",
      date: "April 15, 2026",
      time: "9:00 AM - 12:00 PM EST",
      location: "Hybrid",
      spots: "12 spots remaining"
    },
    {
      title: "Harassment Prevention Training",
      date: "March 20, 2026",
      time: "2:00 PM - 4:00 PM EST",
      location: "Virtual",
      spots: "Open enrollment"
    },
    {
      title: "Leadership Development Series - Executive Cohort",
      date: "May 1, 2026",
      time: "10:00 AM - 2:00 PM EST",
      location: "In-person",
      spots: "8 spots remaining"
    },
    {
      title: "Performance Management Fundamentals",
      date: "March 28, 2026",
      time: "1:00 PM - 4:00 PM EST",
      location: "Virtual",
      spots: "Open enrollment"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section
        className="py-24 md:py-32"
        style={{
          background: `linear-gradient(135deg, var(--navy) 0%, #162A5E 100%)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6" style={{ fontWeight: 700, lineHeight: 1.2 }}>
              Training & Leadership Development
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Building confident, capable leaders through structured, competency-based training programs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-md transition-all hover:opacity-90 hover:shadow-xl"
              style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
            >
              Enroll Now
              <ChevronRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4" style={{ color: "var(--navy)", fontWeight: 700 }}>
              Featured Training Programs
            </h2>
            <p className="text-lg text-gray-700">
              Comprehensive development pathways for leaders at every level
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div
                        className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "var(--purple)", color: "white" }}
                      >
                        <Icon size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl mb-2" style={{ color: "var(--navy)" }}>
                          {program.title}
                        </h3>
                        <p className="text-gray-600">{program.description}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} style={{ color: "var(--gold)" }} />
                        <span className="text-gray-700">{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen size={16} style={{ color: "var(--gold)" }} />
                        <span className="text-gray-700">{program.format}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-3" style={{ color: "var(--navy)" }}>Key Modules:</h4>
                      <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                        {program.modules.map((module, moduleIndex) => (
                          <li key={moduleIndex} className="flex items-start gap-2 text-sm">
                            <span className="mt-1" style={{ color: "var(--gold)" }}>✓</span>
                            <span className="text-gray-700">{module}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 rounded-md border-2 transition-all hover:bg-[var(--navy)] hover:text-white"
                      // style={{ borderColor: "var(--navy)", color: "var(--navy)" }}
                    >
                      Learn More
                      <ChevronRight className="ml-2" size={18} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Sessions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4" style={{ color: "var(--navy)", fontWeight: 700 }}>
              Upcoming Training Sessions
            </h2>
            <p className="text-lg text-gray-700">
              Register now to secure your spot
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {upcomingSessions.map((session, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border-2 hover:border-[var(--gold)] transition-all bg-white"
                style={{ borderColor: "#e5e7eb" }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl mb-2" style={{ color: "var(--navy)" }}>
                      {session.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} style={{ color: "var(--purple)" }} />
                        <span>{session.date}</span>
                      </div>
                      <div>
                        <span>{session.time}</span>
                      </div>
                      <div>
                        <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}>
                          {session.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <span className="text-sm" style={{ color: "var(--purple)" }}>
                      {session.spots}
                    </span>
                    <Link
                      to="/contact"
                      className="px-6 py-2 rounded-md transition-all hover:opacity-70"
                      style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Program Guide */}
      <section className="py-20" style={{ backgroundColor: "var(--navy)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Download size={64} className="mx-auto mb-6" style={{ color: "var(--gold)" }} />
          <h2 className="text-3xl md:text-4xl text-white mb-6 "  style={{ fontWeight: 700 }}>
            Download Our Complete Training Catalog
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get detailed information about all our training programs, schedules, and pricing.
          </p>
          <button
            className="inline-flex items-center px-8 py-4 rounded-md transition-all hover:opacity-90 hover:shadow-xl cursor-pointer"
            style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }} 
          >
            <Download className="mr-2" size={20} />
            Download Program Guide (PDF)
          </button>
        </div>
      </section>

      {/* Custom Training CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6" style={{ color: "var(--navy)", fontWeight: 700 }}>
            Need Custom Training Solutions?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            We design tailored training programs to address your organization's unique challenges and development needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 rounded-md transition-all hover:opacity-90 hover:shadow-lg"
            style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
          >
            Request Custom Training
            <ChevronRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
