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
        className="py-24 md:py-32"
        style={{
          background: `linear-gradient(135deg, var(--navy) 0%, #162A5E 100%)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
              style={{ fontWeight: 700, lineHeight: 1.2 }}
            >
              Comprehensive HR Services
            </h1>
            <p className="text-xl text-gray-200">
              Strategic solutions designed to strengthen your organization,
              protect your interests, and drive sustainable performance.
            </p>
          </div>
        </div>
        <div className="pt-20 text-right">
          <span className="text-white">New Here? </span>
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
                        <Link
                          to="/contact"
                          className="inline-flex items-center px-6 py-3 rounded-md transition-all hover:opacity-90"
                          style={{
                            backgroundColor: "var(--gold)",
                            color: "var(--navy)",
                          }}
                        >
                          Request Consultation
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Link
        to="/training"
        className="inline-flex w-110 items-center justify-center my-4 ml-6 px-8 py-4  transition-all hover:opacity-70 hover:shadow-xl"
        style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
      >
        Goto Training and Development Services
        <ChevronRight className="ml-2" size={20} />
      </Link>

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
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 rounded-md transition-all hover:opacity-90 hover:shadow-xl"
            style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
          >
            Schedule Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
