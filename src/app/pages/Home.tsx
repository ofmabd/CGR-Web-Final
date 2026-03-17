import { Link } from "react-router";
import {
  Shield,
  Users,
  TrendingUp,
  Award,
  Target,
  Briefcase,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Search, Heart } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState(""); //search import
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const testimonials = [
    {
      name: "Olivia Carter",
      role: "HR Director",
      text: "Cherrie Give Resultz helped us structure our HR systems in ways that improved leadership accountability and team performance.",
    },
    {
      name: "Michael Daniels",
      role: "Operations Manager",
      text: "Their leadership training program transformed how our supervisors manage teams and resolve workplace challenges.",
    },
    {
      name: "Aisha Bello",
      role: "Talent Development Lead",
      text: "Professional, strategic, and practical. Their HR frameworks brought clarity and structure to our organization.",
    },
    {
      name: "Veronica Sterlin",
      role: "Head of operations",
      text: "Professional, strategic, and practical. Their HR frameworks brought clarity and structure to our organization.",
    },
  ];

  const [testimonialIndex, setTestimonialIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const solutions = [
    {
      title: "Employee Relations & Labor Strategy",
      description:
        "Expert guidance on complex employee relations issues and labor law compliance.",
      icon: Users,
    },
    {
      title: "Performance Management Systems",
      description:
        "Structured frameworks for measuring, tracking, and improving employee performance.",
      icon: Target,
    },
    {
      title: "Leadership & Supervisor Training",
      description:
        "Comprehensive development programs to build confident, effective leaders.",
      icon: Award,
    },
    {
      title: "Organizational Development Consulting",
      description:
        "Strategic guidance to optimize organizational structure and culture.",
      icon: Briefcase,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative py-24 md:py-32 lg:pt-10 lg:pb-10"
        style={{
          background: `linear-gradient(135deg, var(--navy) 0%, #162A5E 100%)`,
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1758518727707-b023e285b709?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lZXRpbmclMjBsZWFkZXJzaGlwfGVufDF8fHx8MTc3MjY0MTUxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl pt-15">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
              style={{ fontWeight: 700, lineHeight: 1.2 }}
            >
              “Giving Resultz. <br /> Changing Lives.”
            </h1>
            <p className="text-xl text-gray-200 mb-28 ">
              “Your Trusted, Affordable HR Partner for Growing Organizations”
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/Contact"
                className="inline-flex items-center justify-center  px-8 py-4 rounded-md transition-all hover:opacity-70 hover:shadow-xl"
                style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
              >
                Partner With Us Today”
                <ChevronRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/hr-services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-md border-2 transition-all hover:bg-white/10"
                style={{ borderColor: "var(--gold)", color: "white" }}
              >
                See How We Help Organizations Thrive
              </Link>
            </div>
          </div>

          <Link
            to="/careers#jobs"
            className=" text-[var(--gold)] underline py-1   font-bold"
          >
            Explore Availabel jobs...
          </Link>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl mb-4"
              style={{ color: "var(--navy)", fontWeight: 700 }}
            >
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We invest in our people because we believe great HR professionals
              drive great organizational outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                style={{ backgroundColor: "var(--purple)", color: "white" }}
              >
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl mb-3" style={{ color: "var(--navy)" }}>
                Career Growth
              </h3>
              <p className="text-gray-600">
                Clear pathways from internship to leadership roles with
                structured development.
              </p>
            </div>

            <div className="text-center p-6">
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                style={{ backgroundColor: "var(--purple)", color: "white" }}
              >
                <Users size={32} />
              </div>
              <h3 className="text-xl mb-3" style={{ color: "var(--navy)" }}>
                Collaborative Culture
              </h3>
              <p className="text-gray-600">
                Work alongside experienced HR professionals in a supportive team
                environment.
              </p>
            </div>

            <div className="text-center p-6">
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                style={{ backgroundColor: "var(--purple)", color: "white" }}
              >
                <Award size={32} />
              </div>
              <h3 className="text-xl mb-3" style={{ color: "var(--navy)" }}>
                Professional Development
              </h3>
              <p className="text-gray-600">
                Access to training, certifications, and continuous learning
                opportunities.
              </p>
            </div>

            <div className="text-center p-6">
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                style={{ backgroundColor: "var(--purple)", color: "white" }}
              >
                <Heart size={32} />
              </div>
              <h3 className="text-xl mb-3" style={{ color: "var(--navy)" }}>
                Meaningful Work
              </h3>
              <p className="text-gray-600">
                Make a real impact by helping organizations build stronger, more
                effective workplaces.
              </p>
            </div>
          </div>
        </div>
      </section>

       {/* Core Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl mb-4"
              style={{ color: "var(--navy)", fontWeight: 700 }}
            >
              Our Core Solutions
            </h2>
            <p className="text-lg text-gray-700">
              Comprehensive HR services tailored to your organizational needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Link
                  key={index}
                  to="/hr-services"
                  className="relative p-8 rounded-lg border-2 transition-all overflow-hidden group cursor-pointer"
                  style={{
                    borderColor:
                      hoveredCard === index ? "var(--gold)" : "#e5e7eb",
                    backgroundColor:
                      hoveredCard === index ? "var(--navy)" : "white",
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center transition-colors"
                      style={{
                        backgroundColor:
                          hoveredCard === index
                            ? "var(--gold)"
                            : "var(--purple)",
                        color: hoveredCard === index ? "var(--navy)" : "white",
                      }}
                    >
                      <Icon size={28} />
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-xl mb-2 transition-colors"
                        style={{
                          color:
                            hoveredCard === index
                              ? "var(--gold)"
                              : "var(--navy)",
                        }}
                      >
                        {solution.title}
                      </h3>
                      <p
                        className="transition-colors"
                        style={{
                          color: hoveredCard === index ? "white" : "#4b5563",
                        }}
                      >
                        {solution.description}
                      </p>
                      <div
                        className="mt-4 inline-flex items-center gap-2 transition-colors"
                        style={{
                          color:
                            hoveredCard === index
                              ? "var(--gold)"
                              : "var(--purple)",
                        }}
                      >
                        Learn More <ChevronRight size={18} />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>



      {/* Who We Are */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl mb-4"
              style={{ color: "var(--navy)", fontWeight: 700 }}
            >
              Your Strategic HR Partner
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Cherrie Give Resultz provides structured, compliance-driven human
              resource solutions designed to strengthen leadership, improve
              workforce performance, and protect organizational integrity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                style={{ backgroundColor: "var(--purple)", color: "white" }}
              >
                <Shield size={32} />
              </div>
              <h3 className="text-xl mb-3" style={{ color: "var(--navy)" }}>
                Compliance & Risk Management
              </h3>
              <p className="text-gray-600">
                Implementing defensible HR frameworks aligned with regulatory
                standards and best practices.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                style={{ backgroundColor: "var(--purple)", color: "white" }}
              >
                <Users size={32} />
              </div>
              <h3 className="text-xl mb-3" style={{ color: "var(--navy)" }}>
                Supervisor Development
              </h3>
              <p className="text-gray-600">
                Building confident, capable leaders through structured training
                and certification programs.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                style={{ backgroundColor: "var(--purple)", color: "white" }}
              >
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl mb-3" style={{ color: "var(--navy)" }}>
                Performance Optimization
              </h3>
              <p className="text-gray-600">
                Designing measurable processes that improve efficiency, reduce
                risk, and enhance engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

     
      


      {/* sliding testimonial */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-3xl md:text-4xl mb-10"
            style={{ color: "var(--navy)", fontWeight: 700 }}
          >
            What Our Clients Say
          </h2>

          <div className="relative bg-white shadow-lg rounded-xl p-10 transition-all duration-500">
            {/* Profile Image */}
            <div className="flex justify-center mb-6">
              <img
                src="https://i.pravatar.cc/120?img=5"
                alt="Client"
                className="w-24 h-24 rounded-full object-cover border-4"
                style={{ borderColor: "var(--gold)" }}
              />
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 text-lg mb-6 italic">
              "{testimonials[testimonialIndex].text}"
            </p>

            {/* Name */}
            <h4
              className="text-lg"
              style={{ color: "var(--navy)", fontWeight: 600 }}
            >
              {testimonials[testimonialIndex].name}
            </h4>

            {/* Role */}
            <span className="text-gray-500 text-sm">
              {testimonials[testimonialIndex].role}
            </span>

            {/* Left Arrow */}
            <button
              onClick={() =>
                setTestimonialIndex(
                  testimonialIndex === 0
                    ? testimonials.length - 1
                    : testimonialIndex - 1,
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:shadow-lg"
            >
              ←
            </button>

            {/* Right Arrow */}
            <button
              onClick={() =>
                setTestimonialIndex(
                  (testimonialIndex + 1) % testimonials.length,
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:shadow-lg"
            >
              →
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestimonialIndex(i)}
                className={`h-3 w-3 rounded-full ${
                  i === testimonialIndex ? "bg-[var(--gold)]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Training & Leadership Development */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl md:text-4xl mb-6"
                style={{ color: "var(--navy)", fontWeight: 700 }}
              >
                Developing Leaders at Every Level
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Our comprehensive training programs equip supervisors and
                managers with the skills, knowledge, and confidence to lead
                effectively and drive organizational success.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1"
                    style={{ backgroundColor: "var(--gold)" }}
                  >
                    <span className="text-xs" style={{ color: "var(--navy)" }}>
                      ✓
                    </span>
                  </div>
                  <div>
                    <h4 style={{ color: "var(--navy)" }}>
                      Supervisor Certification Track
                    </h4>
                    <p className="text-gray-600">
                      Structured pathway to develop essential leadership
                      competencies
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1"
                    style={{ backgroundColor: "var(--gold)" }}
                  >
                    <span className="text-xs" style={{ color: "var(--navy)" }}>
                      ✓
                    </span>
                  </div>
                  <div>
                    <h4 style={{ color: "var(--navy)" }}>
                      Compliance Training Programs
                    </h4>
                    <p className="text-gray-600">
                      Stay current with regulatory requirements and best
                      practices
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1"
                    style={{ backgroundColor: "var(--gold)" }}
                  >
                    <span className="text-xs" style={{ color: "var(--navy)" }}>
                      ✓
                    </span>
                  </div>
                  <div>
                    <h4 style={{ color: "var(--navy)" }}>
                      Leadership Development Series
                    </h4>
                    <p className="text-gray-600">
                      Advanced programs for experienced leaders and executives
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1"
                    style={{ backgroundColor: "var(--gold)" }}
                  >
                    <span className="text-xs" style={{ color: "var(--navy)" }}>
                      ✓
                    </span>
                  </div>
                  <div>
                    <h4 style={{ color: "var(--navy)" }}>
                      Custom Organizational Workshops
                    </h4>
                    <p className="text-gray-600">
                      Tailored training solutions for your specific challenges
                    </p>
                  </div>
                </div>
              </div>
              <Link
                to="/training"
                className="inline-flex items-center px-8 py-4 rounded-md transition-all hover:opacity-90 hover:shadow-lg"
                style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
              >
                View Training Programs
                <ChevronRight className="ml-2" size={20} />
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1761250246894-ee2314939662?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRyYWluaW5nJTIwZGV2ZWxvcG1lbnQlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzI2NDE1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Training and Development"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20" style={{ backgroundColor: "var(--navy)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl mb-4 text-white"
              style={{ fontWeight: 700 }}
            >
              Why Choose Cherrie Give Resultz
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We do more than provide HR support — we build structured systems
              that strengthen leadership, protect organizations, and drive
              measurable performance outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div
              className="p-8 rounded-lg"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "var(--gold)" }}
              >
                <Shield size={24} style={{ color: "var(--navy)" }} />
              </div>
              <h3 className="text-xl mb-3" style={{ color: "var(--gold)" }}>
                Structured & Compliance-Driven
              </h3>
              <p className="text-gray-300">
                We implement clear, defensible HR frameworks that align with
                regulatory standards and organizational best practices.
              </p>
            </div>

            <div
              className="p-8 rounded-lg"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "var(--gold)" }}
              >
                <Award size={24} style={{ color: "var(--navy)" }} />
              </div>
              <h3 className="text-xl mb-3" style={{ color: "var(--gold)" }}>
                Leadership-Focused Approach
              </h3>
              <p className="text-gray-300">
                Our solutions prioritize supervisor development, accountability,
                and executive communication — because strong leadership drives
                sustainable results.
              </p>
            </div>

            <div
              className="p-8 rounded-lg"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "var(--gold)" }}
              >
                <TrendingUp size={24} style={{ color: "var(--navy)" }} />
              </div>
              <h3 className="text-xl mb-3" style={{ color: "var(--gold)" }}>
                Performance-Oriented Systems
              </h3>
              <p className="text-gray-300">
                We design measurable HR processes that improve efficiency,
                reduce risk, and enhance employee engagement.
              </p>
            </div>

            <div
              className="p-8 rounded-lg"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "var(--gold)" }}
              >
                <Briefcase size={24} style={{ color: "var(--navy)" }} />
              </div>
              <h3 className="text-xl mb-3" style={{ color: "var(--gold)" }}>
                Strategic Partnership Model
              </h3>
              <p className="text-gray-300">
                We operate as an extension of your leadership team — providing
                guidance, structure, and professional representation at every
                level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl mb-4"
              style={{ color: "var(--navy)", fontWeight: 700 }}
            >
              Proven Impact
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div
                className="text-5xl md:text-6xl mb-2"
                style={{ color: "var(--gold)", fontWeight: 700 }}
              >
                95%
              </div>
              <p className="text-gray-700">
                Policy Compliance Implementation Rate
              </p>
            </div>
            <div className="text-center">
              <div
                className="text-5xl md:text-6xl mb-2"
                style={{ color: "var(--gold)", fontWeight: 700 }}
              >
                40%
              </div>
              <p className="text-gray-700">
                Improvement in Supervisor Readiness
              </p>
            </div>
            <div className="text-center">
              <div
                className="text-5xl md:text-6xl mb-2"
                style={{ color: "var(--gold)", fontWeight: 700 }}
              >
                100+
              </div>
              <p className="text-gray-700">Leaders Trained</p>
            </div>
            <div className="text-center">
              <div
                className="text-5xl md:text-6xl mb-2"
                style={{ color: "var(--gold)", fontWeight: 700 }}
              >
                ∞
              </div>
              <p className="text-gray-700">Structured HR Systems Implemented</p>
            </div>
          </div>
        </div>
      </section>

      {/* Careers & Internships */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1758876019673-704b039d405c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNhcmVlciUyMGdyb3d0aCUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzcyNjQxNTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Career Growth"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2
                className="text-3xl md:text-4xl mb-6"
                style={{ color: "var(--navy)", fontWeight: 700 }}
              >
                Grow With Cherrie Give Resultz
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                We believe in developing talent from within. Our leadership
                pipeline model provides clear pathways for growth, from
                internships to senior leadership roles. Join a team committed to
                excellence, professional development, and making a meaningful
                impact.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <BookOpen size={24} style={{ color: "var(--purple)" }} />
                  <span className="text-gray-700">
                    Structured internship-to-leadership pathway
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Award size={24} style={{ color: "var(--purple)" }} />
                  <span className="text-gray-700">
                    Professional development opportunities
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Users size={24} style={{ color: "var(--purple)" }} />
                  <span className="text-gray-700">
                    Collaborative, mission-driven culture
                  </span>
                </div>
              </div>
              <Link
                to="/careers"
                className="inline-flex items-center px-8 py-4 rounded-md transition-all hover:opacity-90 hover:shadow-lg"
                style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
              >
                Explore Opportunities
                <ChevronRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
