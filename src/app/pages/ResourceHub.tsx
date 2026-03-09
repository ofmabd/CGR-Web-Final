import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Search, FileText, Download, BookOpen, HelpCircle, Shield, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

export default function ResourceHub() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "FAQs", "Templates", "Toolkits", "Policy Guidance", "Compliance"];

  const resources = [
    {
      title: "Employee Handbook Template",
      category: "Templates",
      description: "Comprehensive template for creating or updating your employee handbook",
      type: "PDF",
      icon: FileText,
    },
    {
      title: "Performance Review Forms",
      category: "Templates",
      description: "Structured forms for conducting effective performance evaluations",
      type: "Word Doc",
      icon: FileText,
    },
    {
      title: "Supervisor Quick Reference Guide",
      category: "Toolkits",
      description: "Essential tools and tips for new supervisors",
      type: "PDF",
      icon: BookOpen,
    },
    {
      title: "FMLA Compliance Checklist",
      category: "Compliance",
      description: "Step-by-step guide to ensure FMLA compliance",
      type: "PDF",
      icon: Shield,
    },
    {
      title: "Disciplinary Action Template",
      category: "Templates",
      description: "Professional templates for documenting disciplinary actions",
      type: "Word Doc",
      icon: FileText,
    },
    {
      title: "Interview Question Bank",
      category: "Toolkits",
      description: "Behavioral and competency-based interview questions",
      type: "PDF",
      icon: BookOpen,
    },
    {
      title: "Harassment Prevention Policy Sample",
      category: "Policy Guidance",
      description: "Model policy for workplace harassment prevention",
      type: "Word Doc",
      icon: FileText,
    },
    {
      title: "New Hire Onboarding Checklist",
      category: "Toolkits",
      description: "Comprehensive checklist for effective employee onboarding",
      type: "PDF",
      icon: BookOpen,
    },
    {
      title: "Wage & Hour Compliance Guide",
      category: "Compliance",
      description: "Overview of FLSA requirements and best practices",
      type: "PDF",
      icon: Shield,
    },
  ];

  const faqs = [
    {
      question: "How do I handle a difficult employee conversation?",
      answer: "Start by preparing clear, specific examples of the behavior or performance issue. Schedule a private meeting, focus on facts rather than emotions, listen actively to the employee's perspective, and work together to develop an action plan with clear expectations and timeline."
    },
    {
      question: "What documentation should I keep for employee relations issues?",
      answer: "Maintain detailed records of conversations, performance issues, disciplinary actions, and any incidents. Include dates, times, witnesses, specific behaviors observed, and actions taken. Keep all documentation confidential and stored securely."
    },
    {
      question: "When should I involve HR in a workplace situation?",
      answer: "Contact HR for any situations involving potential policy violations, harassment or discrimination complaints, significant performance or conduct issues, accommodation requests, or when you're unsure how to proceed with an employee matter."
    },
    {
      question: "How often should I conduct performance reviews?",
      answer: "Formal performance reviews should occur at least annually, but best practice includes quarterly check-ins and ongoing informal feedback. Regular conversations help prevent surprises and support continuous improvement."
    },
    {
      question: "What are the key elements of a progressive discipline policy?",
      answer: "A typical progressive discipline process includes: verbal warning, written warning, final written warning, and termination. Each step should be documented, and the employee should have an opportunity to improve. Serious violations may warrant skipping steps."
    },
    {
      question: "How do I ensure my hiring practices are legally compliant?",
      answer: "Use structured interviews with consistent questions, avoid prohibited inquiries (age, religion, marital status, etc.), document your selection rationale, conduct background checks with proper authorization, and ensure all job requirements are bona fide occupational qualifications."
    },
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              HR Resource Hub
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Access essential tools, templates, and guidance to support your HR and leadership responsibilities.
            </p>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4" style={{ color: "var(--navy)", fontWeight: 700 }}>
              Downloadable Resources
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Professional templates and tools to streamline your HR processes
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="px-6 py-2 rounded-full transition-all"
                  style={{
                    backgroundColor: selectedCategory === category ? "var(--gold)" : "white",
                    color: selectedCategory === category ? "var(--navy)" : "#4b5563",
                    border: `2px solid ${selectedCategory === category ? "var(--gold)" : "#e5e7eb"}`
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-lg border-2 bg-white hover:border-[var(--gold)] transition-all group cursor-pointer"
                  style={{ borderColor: "#e5e7eb" }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "var(--purple)", color: "white" }}
                    >
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg mb-1" style={{ color: "var(--navy)" }}>
                        {resource.title}
                      </h3>
                      <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}>
                        {resource.type}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <button
                    className="inline-flex items-center gap-2 transition-colors group-hover:text-[var(--gold)]"
                    style={{ color: "var(--navy)" }}
                  >
                    <Download size={18} />
                    Download
                  </button>
                </div>
              );
            })}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No resources found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* HR FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <HelpCircle size={48} className="mx-auto mb-4" style={{ color: "var(--gold)" }} />
            <h2 className="text-3xl md:text-4xl mb-4" style={{ color: "var(--navy)", fontWeight: 700 }}>
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-700">
              Quick answers to common HR and supervisory questions
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border-2"
                style={{ borderColor: "#e5e7eb", backgroundColor: "white" }}
              >
                <h3 className="text-xl mb-3 flex items-start gap-3" style={{ color: "var(--navy)" }}>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm" style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}>
                    Q
                  </span>
                  {faq.question}
                </h3>
                <p className="text-gray-700 ml-9">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supervisor Toolkit */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4" style={{ color: "var(--navy)", fontWeight: 700 }}>
              Supervisor Toolkit
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Essential resources every supervisor should have
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <BookOpen size={48} className="mx-auto mb-4" style={{ color: "var(--purple)" }} />
              <h3 className="text-xl mb-3" style={{ color: "var(--navy)" }}>
                Quick Reference Guides
              </h3>
              <p className="text-gray-600 mb-4">
                Step-by-step guides for common supervisory tasks and challenges
              </p>
              <button className="text-sm inline-flex items-center gap-2" style={{ color: "var(--gold)" }}>
                Browse Guides <ChevronRight size={16} />
              </button>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <FileText size={48} className="mx-auto mb-4" style={{ color: "var(--purple)" }} />
              <h3 className="text-xl mb-3" style={{ color: "var(--navy)" }}>
                Forms & Templates
              </h3>
              <p className="text-gray-600 mb-4">
                Ready-to-use templates for documentation and employee management
              </p>
              <button className="text-sm inline-flex items-center gap-2" style={{ color: "var(--gold)" }}>
                Download Templates <ChevronRight size={16} />
              </button>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <Shield size={48} className="mx-auto mb-4" style={{ color: "var(--purple)" }} />
              <h3 className="text-xl mb-3" style={{ color: "var(--navy)" }}>
                Policy Summaries
              </h3>
              <p className="text-gray-600 mb-4">
                Clear explanations of key HR policies and compliance requirements
              </p>
              <button className="text-sm inline-flex items-center gap-2" style={{ color: "var(--gold)" }}>
                View Policies <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Need More Support CTA */}
      <section className="py-20" style={{ backgroundColor: "var(--navy)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-6" style={{ fontWeight: 700 }}>
            Need Personalized Support?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our HR consultants are available to provide guidance tailored to your specific situation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 rounded-md transition-all hover:opacity-90 hover:shadow-xl"
            style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
          >
            Submit HR Support Request
            <ChevronRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
