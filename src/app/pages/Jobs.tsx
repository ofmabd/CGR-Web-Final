import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import {
  TrendingUp,
  Users,
  Award,
  Heart,
  MapPin,
  Clock,
  DollarSign,
  ChevronRight,
  Search,
} from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

export default function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const departments = [
    "All",
    "HR Consulting",
    "Training & Development",
    "Internships",
  ];

  const jobs = [
    {
      title: "Senior HR Consultant",
      department: "HR Consulting",
      type: "Full-time",
      location: "Hybrid",
      salary: "$75,000 - $95,000",
      description:
        "Lead strategic HR initiatives for multiple client organizations, providing expert guidance on complex employee relations, compliance, and organizational development challenges.",
      requirements: [
        "7+ years HR experience with consulting focus",
        "PHR or SPHR certification preferred",
        "Strong knowledge of employment law",
        "Excellent communication and client management skills",
      ],
    },
    {
      title: "HR Business Partner",
      department: "HR Consulting",
      type: "Full-time",
      location: "Remote",
      salary: "$60,000 - $75,000",
      description:
        "Partner with client organizations to deliver comprehensive HR support, including employee relations, performance management, and policy development.",
      requirements: [
        "5+ years progressive HR experience",
        "Bachelor's degree in HR or related field",
        "Experience with HRIS systems",
        "Strong analytical and problem-solving skills",
      ],
    },
    {
      title: "Leadership Development Specialist",
      department: "Training & Development",
      type: "Full-time",
      location: "Hybrid",
      salary: "$55,000 - $70,000",
      description:
        "Design and deliver engaging leadership training programs, facilitate workshops, and support supervisor development initiatives.",
      requirements: [
        "3+ years training or instructional design experience",
        "Experience facilitating leadership programs",
        "Excellent presentation skills",
        "Familiarity with adult learning principles",
      ],
    },
    {
      title: "HR Compliance Analyst",
      department: "HR Consulting",
      type: "Full-time",
      location: "Hybrid",
      salary: "$50,000 - $65,000",
      description:
        "Support compliance audits, policy development, and regulatory research to ensure client organizations meet all employment law requirements.",
      requirements: [
        "2+ years HR compliance experience",
        "Knowledge of federal and state employment law",
        "Strong research and documentation skills",
        "Detail-oriented and analytical mindset",
      ],
    },
    {
      title: "HR Internship Program",
      department: "Internships",
      type: "Internship",
      location: "Hybrid",
      salary: "$18 - $22/hour",
      description:
        "Gain hands-on experience in HR consulting, employee relations, training development, and organizational projects. Structured pathway to full-time employment.",
      requirements: [
        "Currently pursuing degree in HR, Business, or related field",
        "Strong interest in HR and leadership development",
        "Excellent communication skills",
        "Commitment to 20+ hours per week",
      ],
    },
    {
      title: "Training Coordinator",
      department: "Training & Development",
      type: "Full-time",
      location: "Hybrid",
      salary: "$45,000 - $55,000",
      description:
        "Coordinate training logistics, manage learning platforms, support program delivery, and assist with curriculum development.",
      requirements: [
        "1-2 years training coordination experience",
        "Excellent organizational skills",
        "Proficiency with learning management systems",
        "Strong customer service orientation",
      ],
    },
  ];

  // ✅ SEARCH + FILTER (ONLY ADDITION)
  const filteredJobs = jobs.filter((job) => {
    const query = searchQuery.toLowerCase();

    const matchesDepartment =
      selectedDepartment === "All" || job.department === selectedDepartment;

    const matchesSearch =
      query === "" ||
      job.title.toLowerCase().includes(query) ||
      job.location.toLowerCase().includes(query) ||
      job.type.toLowerCase().includes(query) ||
      job.salary.toLowerCase().includes(query) ||
      job.description.toLowerCase().includes(query);

    return matchesDepartment && matchesSearch;
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
            <h1
              className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
              style={{ fontWeight: 700, lineHeight: 1.2 }}
            >
              “Find Your Next Opportunity”
            </h1>
            <p className="text-xl text-gray-200">
              Join a team committed to excellence, professional development, and
              making a meaningful impact in the HR profession.
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

      {/* Open Positions */}
      <section className="py-20 bg-white" id="jobs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl mb-4"
              style={{ color: "var(--navy)", fontWeight: 700 }}
            >
              Open Positions
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Explore current opportunities and find your next career move
            </p>

            {/* Department Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className="px-6 py-2 rounded-full transition-all cursor-pointer"
                  style={{
                    backgroundColor:
                      selectedDepartment === dept ? "var(--gold)" : "white",
                    color:
                      selectedDepartment === dept ? "var(--navy)" : "#4b5563",
                    border: `2px solid ${selectedDepartment === dept ? "var(--gold)" : "#e5e7eb"}`,
                  }}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job Search Bar */}
          <div className="relative max-w-xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              placeholder="Search jobs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
            />
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {filteredJobs.map((job, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border-2 hover:border-[var(--gold)] transition-all bg-white"
                style={{ borderColor: "#e5e7eb" }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3
                      className="text-2xl mb-2"
                      style={{ color: "var(--navy)" }}
                    >
                      {job.title}
                    </h3>

                    <div className="flex flex-wrap gap-4 text-sm mb-3">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin size={16} style={{ color: "var(--purple)" }} />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock size={16} style={{ color: "var(--purple)" }} />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <DollarSign
                          size={16}
                          style={{ color: "var(--purple)" }}
                        />
                        {job.salary}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{job.description}</p>
                    <div>
                      <h4 className="mb-2" style={{ color: "var(--navy)" }}>
                        Key Requirements:
                      </h4>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {job.requirements.map((req, reqIndex) => (
                          <li
                            key={reqIndex}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <span style={{ color: "var(--gold)" }}>✓</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 rounded-md transition-all hover:opacity-90 whitespace-nowrap"
                      style={{
                        backgroundColor: "var(--gold)",
                        color: "var(--navy)",
                      }}
                    >
                      Apply Now
                      <ChevronRight className="ml-2" size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/"
            className="px-6 py-3 bg-[var(--navy)] text-white rounded-md"
          >
            View My Applications
          </Link>
        </div>
      </section>

      {/* Leadership Development Pathway */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl mb-4"
              style={{ color: "var(--navy)", fontWeight: 700 }}
            >
              Our Leadership Development Pathway
            </h2>
            <p className="text-lg text-gray-700">
              A structured progression from entry-level to senior leadership
            </p>
          </div>

          <div className="relative">
            {/* Timeline */}
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  1
                </div>
                <div className="flex-1 pb-8 border-l-2 border-gray-300 pl-6 ml-6">
                  <h3
                    className="text-2xl mb-2"
                    style={{ color: "var(--navy)" }}
                  >
                    Internship
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Gain foundational HR experience through hands-on projects
                    and mentorship
                  </p>
                  <span className="text-sm text-gray-600">6-12 months</span>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  2
                </div>
                <div className="flex-1 pb-8 border-l-2 border-gray-300 pl-6 ml-6">
                  <h3
                    className="text-2xl mb-2"
                    style={{ color: "var(--navy)" }}
                  >
                    HR Coordinator/Analyst
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Build specialized skills in compliance, training, or
                    employee relations
                  </p>
                  <span className="text-sm text-gray-600">1-2 years</span>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  3
                </div>
                <div className="flex-1 pb-8 border-l-2 border-gray-300 pl-6 ml-6">
                  <h3
                    className="text-2xl mb-2"
                    style={{ color: "var(--navy)" }}
                  >
                    HR Business Partner/Specialist
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Lead client projects and develop strategic HR solutions
                  </p>
                  <span className="text-sm text-gray-600">2-4 years</span>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  4
                </div>
                <div className="flex-1 pl-6 ml-6">
                  <h3
                    className="text-2xl mb-2"
                    style={{ color: "var(--navy)" }}
                  >
                    Senior Consultant/Director
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Provide executive-level guidance and lead organizational
                    transformation
                  </p>
                  <span className="text-sm text-gray-600">4+ years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "var(--navy)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl text-white mb-6"
            style={{ fontWeight: 700 }}
          >
            Don't See the Perfect Role?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented HR professionals. Send us your
            resume and tell us about your career interests.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 rounded-md transition-all hover:opacity-90 hover:shadow-xl"
            style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
          >
            Submit General Application
            <ChevronRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
