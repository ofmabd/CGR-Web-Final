import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import {
  Users,
  Target,
  Award,
  Briefcase,
  FileText,
  Shield,
  ChevronDown,
  ChevronUp,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

export default function HRServices() {
  const [expandedService, setExpandedService] = useState<number | null>(0);

  const services = [
    {
      title: "Employee Relations & Labor Relations",
      icon: Users,
      overview:
        "Navigate complex employee relations challenges with expert guidance and strategic solutions that protect your organization while maintaining positive workplace relationships.",
      process: [
        "Initial consultation and case assessment",
        "Investigation and fact-gathering",
        "Strategic recommendation development",
        "Implementation support and documentation",
        "Ongoing monitoring and follow-up",
      ],
      deliverables: [
        "Comprehensive investigation reports",
        "Employee relations action plans",
        "Documentation templates and tools",
        "Policy recommendations",
        "Training for HR staff and supervisors",
      ],
    },
    {
      title: "Performance Management Systems",
      icon: Target,
      overview:
        "Design and implement structured performance management frameworks that drive accountability, improve productivity, and align individual goals with organizational objectives.",
      process: [
        "Current state assessment",
        "System design and customization",
        "Tool and template development",
        "Manager training and rollout",
        "Performance cycle support",
      ],
      deliverables: [
        "Performance management framework",
        "Goal-setting templates and guides",
        "Performance review forms",
        "Manager toolkits and job aids",
        "Performance improvement plan templates",
      ],
    },
    {
      title: "Supervisor Coaching & Development",
      icon: Award,
      overview:
        "Equip supervisors with the skills, confidence, and tools they need to lead effectively, manage difficult conversations, and drive team performance.",
      process: [
        "Leadership competency assessment",
        "Individual development planning",
        "One-on-one coaching sessions",
        "Skill-building workshops",
        "Progress evaluation and adjustment",
      ],
      deliverables: [
        "Leadership development plans",
        "Coaching session documentation",
        "Supervisor skill assessments",
        "Leadership resource library",
        "Ongoing support and consultation",
      ],
    },
    {
      title: "Organizational Development",
      icon: Briefcase,
      overview:
        "Transform your organizational structure, culture, and processes to achieve strategic objectives and build sustainable competitive advantage.",
      process: [
        "Organizational assessment and diagnosis",
        "Stakeholder engagement and input",
        "Change strategy development",
        "Implementation planning and support",
        "Effectiveness measurement",
      ],
      deliverables: [
        "Organizational assessment report",
        "Change management roadmap",
        "Restructuring recommendations",
        "Culture development strategies",
        "Change communication plans",
      ],
    },
    {
      title: "HR Policy & Compliance Consulting",
      icon: FileText,
      overview:
        "Ensure your HR policies and practices comply with current regulations while supporting your business objectives and organizational culture.",
      process: [
        "Policy and practice audit",
        "Compliance gap analysis",
        "Policy development or revision",
        "Legal review coordination",
        "Implementation and training",
      ],
      deliverables: [
        "Compliance audit report",
        "Updated policy manuals",
        "Employee handbooks",
        "Manager compliance guides",
        "Training materials and rollout plans",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section
        className="relative overflow-hidden py-24 md:py-15"
        style={{
          background: `linear-gradient(135deg, var(--navy) 0%, #162A5E 100%)`,
        }}
       >
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80"
            alt="Business team strategy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[color:var(--navy)]/80"></div>

        {/* GLOW EFFECTS */}
        <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-[-80px] right-[-80px] w-72 h-72 bg-yellow-400/20 blur-3xl rounded-full"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl text-center mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-3 font-bold leading-tight">
              Comprehensive{" "}
              <span className="text-[var(--gold)]">HR Services</span>
            </h1>

            <p className="text-xl text-gray-200 mb-10">
              Strategic solutions designed to strengthen your organization,
              protect your interests, and drive sustainable performance.
            </p>

            {/* DIVIDER */}
            <div className="w-24 h-1 bg-[var(--gold)] mb-10 rounded-full text-center mx-auto"></div>

            {/* MINI FEATURES */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm mb-12">
              {["Compliance", "Advisory", "Training", "Performance"].map(
                (item, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 backdrop-blur-md rounded-lg py-3 px-3 text-center text-gray-300"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        {/* CTA RIGHT */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-1 text-right">
          <span className="text-white mr-2">New Here?</span>

          <Link
            to="/NewHirePortal"
            className="inline-flex items-center px-6 py-3 rounded-md font-medium transition-all hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #D4A017, #FFD95A)",
              color: "var(--navy)",
            }}
          >
            Join Onboarding Session →
          </Link>
        </div>
      </section>

      {/* Services Accordion */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl mb-4"
              style={{ color: "var(--navy)", fontWeight: 700 }}
            >
              Our Service Offerings
            </h2>
            <p className="text-lg text-gray-700">
              Click on each service to learn more about our approach and
              deliverables
            </p>
          </div>

          <div className="space-y-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isExpanded = expandedService === index;

              return (
                <div
                  key={index}
                  className="border-2 rounded-lg overflow-hidden transition-all"
                  style={{
                    borderColor: isExpanded ? "var(--gold)" : "#e5e7eb",
                    backgroundColor: isExpanded ? "#fafafa" : "white",
                  }}
                >
                  <button
                    onClick={() =>
                      setExpandedService(isExpanded ? null : index)
                    }
                    className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: isExpanded
                            ? "var(--gold)"
                            : "var(--purple)",
                          color: isExpanded ? "var(--navy)" : "white",
                        }}
                      >
                        <Icon size={24} />
                      </div>
                      <h3 className="text-xl" style={{ color: "var(--navy)" }}>
                        {service.title}
                      </h3>
                    </div>
                    {isExpanded ? (
                      <ChevronUp size={24} style={{ color: "var(--gold)" }} />
                    ) : (
                      <ChevronDown size={24} style={{ color: "var(--navy)" }} />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-6 space-y-6">
                      <div>
                        <h4
                          className="text-lg mb-2"
                          style={{ color: "var(--navy)" }}
                        >
                          Overview
                        </h4>
                        <p className="text-gray-700">{service.overview}</p>
                      </div>

                      <div>
                        <h4
                          className="text-lg mb-3"
                          style={{ color: "var(--navy)" }}
                        >
                          Our Process
                        </h4>
                        <ol className="space-y-2">
                          {service.process.map((step, stepIndex) => (
                            <li
                              key={stepIndex}
                              className="flex items-start gap-3"
                            >
                              <span
                                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm mt-0.5"
                                style={{
                                  backgroundColor: "var(--gold)",
                                  color: "var(--navy)",
                                }}
                              >
                                {stepIndex + 1}
                              </span>
                              <span className="text-gray-700">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      <div>
                        <h4
                          className="text-lg mb-3"
                          style={{ color: "var(--navy)" }}
                        >
                          Key Deliverables
                        </h4>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {service.deliverables.map((deliverable, delIndex) => (
                            <li
                              key={delIndex}
                              className="flex items-start gap-2"
                            >
                              <span
                                className="text-sm mt-1"
                                style={{ color: "var(--gold)" }}
                              >
                                ✓
                              </span>
                              <span className="text-gray-700">
                                {deliverable}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4">
                        <a
                          href="mailto:sales@cherriegiveresultz.com?subject=Consultation Request"
                          className="inline-flex items-center px-6 py-3 rounded-md transition-all hover:opacity-90"
                          style={{
                            backgroundColor: "var(--gold)",
                            color: "var(--navy)",
                          }}
                        >
                          Request Consultation
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <a
        href="mailto:training@cherriegiveresultz.com?subject=Training Inquiry"
        className="inline-flex w-110 items-center justify-center my-4 ml-6 px-8 py-4 transition-all hover:opacity-70 hover:shadow-xl"
        style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
      >
        Training & Leadership Development
        <ChevronRight className="ml-2" size={20} />
      </a>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: "var(--navy)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield
            size={64}
            className="mx-auto mb-6"
            style={{ color: "var(--gold)" }}
          />
          <h2
            className="text-3xl md:text-4xl text-white mb-6"
            style={{ fontWeight: 700 }}
          >
            Ready to Strengthen Your HR Systems?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a consultation to discuss your specific needs and learn how
            we can support your organization.
          </p>
          <a
            href="mailto:sales@cherriegiveresultz.com?subject=Consultation Request"
            className="inline-flex items-center px-8 py-4 rounded-md transition-all hover:opacity-90 hover:shadow-xl"
            style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
          >
            Schedule Consultation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
