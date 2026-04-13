import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export default function Contact() {
  const [formType, setFormType] = useState<
    "consultation" | "hr-support" | "general"
  >("consultation");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    subject: "",
    message: "",
    serviceInterest: "",
    urgency: "normal",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your inquiry! We will respond within 24-48 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      organization: "",
      subject: "",
      message: "",
      serviceInterest: "",
      urgency: "normal",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section
        className="relative overflow-hidden py-24 md:py-32 text-white text-center"
        style={{
          background: `linear-gradient(135deg, var(--navy) 0%, #162A5E 100%)`,
        }}
      >
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80"
            alt="Customer support team"
            className="w-full h-full object-cover"
          />
        </div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[color:var(--navy)]/80"></div>

        {/* GLOW EFFECTS */}
        <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-[-80px] right-[-80px] w-72 h-72 bg-yellow-400/20 blur-3xl rounded-full"></div>

        {/* FLOATING BADGE */}
        <div className="absolute top-10 right-10 hidden md:block bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs">
          💬 24/7 Support
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Get In{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
            We're here to support your HR needs. Reach out for consultations,
            support requests, or general inquiries.
          </p>

          {/* DIVIDER */}
          <div className="w-24 h-1 bg-[var(--gold)] mb-10 rounded-full"></div>

          {/* QUICK CONTACT OPTIONS */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["📞 Call Us", "✉️ Email Support", "💼 Book Consultation"].map(
              (item, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm backdrop-blur-md hover:bg-white/10 transition"
                >
                  {item}
                </span>
              ),
            )}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-gray-300">New Here?</span>

            <a
              href="/NewHirePortal"
              className="inline-flex items-center px-6 py-3 rounded-md font-medium transition-all hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #D4A017, #FFD95A)",
                color: "var(--navy)",
              }}
            >
              Join Onboarding Session →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl mb-6" style={{ color: "var(--navy)" }}>
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--purple)", color: "white" }}
                  >
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1" style={{ color: "var(--navy)" }}>
                      Email
                    </h3>
                    <p className="text-gray-600">
                      admin@cherriegiveresultz.com
                    </p>
                    <p className="text-gray-600">hr@cherriegiveresultz.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--purple)", color: "white" }}
                  >
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1" style={{ color: "var(--navy)" }}>
                      Phone
                    </h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-sm text-gray-500">
                      Mon-Fri, 9am-5pm EST
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    marginTop: "20px",
                    fontFamily: "sans-serif",
                  }}
                >
                  {/* Icon Box */}
                  <div
                    style={{
                      background: "#6a40a2",
                      minWidth: "45px",
                      height: "45px",
                      borderRadius: "8px",
                      display: "grid",
                      placeItems: "center",
                      fontSize: "20px",
                    }}
                  >
                    🆔
                  </div>

                  {/* Text Section */}
                  <div>
                    <b
                      style={{
                        color: "#00214d",
                        fontSize: "18px",
                        display: "block",
                      }}
                    >
                      EIN
                    </b>
                    <div
                      style={{
                        color: "#555",
                        marginTop: "5px",
                        fontSize: "16px",
                      }}
                    >
                      39-2971068
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--purple)", color: "white" }}
                  >
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1" style={{ color: "var(--navy)" }}>
                      Office
                    </h3>
                    <p className="text-gray-600">123 Business Plaza</p>
                    <p className="text-gray-600">Suite 456</p>
                    <p className="text-gray-600">Professional City, ST 12345</p>
                  </div>
                </div>
              </div>

              <div
                className="mt-8 p-6 rounded-lg"
                style={{ backgroundColor: "var(--navy)" }}
              >
                <h3 className="text-xl text-white mb-3">Office Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>By Appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl mb-6" style={{ color: "var(--navy)" }}>
                  Send Us a Message
                </h2>

                {/* Form Type Selector */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <button
                    onClick={() => setFormType("consultation")}
                    className="px-6 py-2 rounded-full transition-all"
                    style={{
                      backgroundColor:
                        formType === "consultation" ? "var(--gold)" : "white",
                      color:
                        formType === "consultation" ? "var(--navy)" : "#4b5563",
                      border: `2px solid ${formType === "consultation" ? "var(--gold)" : "#e5e7eb"}`,
                    }}
                  >
                    Book a Consultation
                  </button>
                  <button
                    onClick={() => setFormType("hr-support")}
                    className="px-6 py-2 rounded-full transition-all"
                    style={{
                      backgroundColor:
                        formType === "hr-support" ? "var(--gold)" : "white",
                      color:
                        formType === "hr-support" ? "var(--navy)" : "#4b5563",
                      border: `2px solid ${formType === "hr-support" ? "var(--gold)" : "#e5e7eb"}`,
                    }}
                  >
                    HR Support Request
                  </button>
                  <button
                    onClick={() => setFormType("general")}
                    className="px-6 py-2 rounded-full transition-all"
                    style={{
                      backgroundColor:
                        formType === "general" ? "var(--gold)" : "white",
                      color: formType === "general" ? "var(--navy)" : "#4b5563",
                      border: `2px solid ${formType === "general" ? "var(--gold)" : "#e5e7eb"}`,
                    }}
                  >
                    General Inquiry
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2"
                        style={{ color: "var(--navy)" }}
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[var(--gold)] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2"
                        style={{ color: "var(--navy)" }}
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[var(--gold)] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block mb-2"
                        style={{ color: "var(--navy)" }}
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[var(--gold)] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="organization"
                        className="block mb-2"
                        style={{ color: "var(--navy)" }}
                      >
                        Organization
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[var(--gold)] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {formType === "consultation" && (
                    <div>
                      <label
                        htmlFor="serviceInterest"
                        className="block mb-2"
                        style={{ color: "var(--navy)" }}
                      >
                        Service Interest
                      </label>
                      <select
                        id="serviceInterest"
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[var(--gold)] focus:outline-none transition-colors"
                      >
                        <option value="">Select a service...</option>
                        <option value="employee-relations">
                          Employee Relations & Labor Relations
                        </option>
                        <option value="performance-management">
                          Performance Management Systems
                        </option>
                        <option value="supervisor-coaching">
                          Supervisor Coaching & Development
                        </option>
                        <option value="org-development">
                          Organizational Development
                        </option>
                        <option value="policy-compliance">
                          HR Policy & Compliance Consulting
                        </option>
                        <option value="training">Training & Development</option>
                        <option value="other">Other/Multiple Services</option>
                      </select>
                    </div>
                  )}

                  {formType === "hr-support" && (
                    <div>
                      <label
                        htmlFor="urgency"
                        className="block mb-2"
                        style={{ color: "var(--navy)" }}
                      >
                        Urgency Level
                      </label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[var(--gold)] focus:outline-none transition-colors"
                      >
                        <option value="normal">
                          Normal - Response within 48 hours
                        </option>
                        <option value="high">
                          High - Response within 24 hours
                        </option>
                        <option value="urgent">
                          Urgent - Same day response needed
                        </option>
                      </select>
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="subject"
                      className="block mb-2"
                      style={{ color: "var(--navy)" }}
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[var(--gold)] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-2"
                      style={{ color: "var(--navy)" }}
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[var(--gold)] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-4 rounded-lg transition-all hover:opacity-90 hover:shadow-lg flex items-center justify-center gap-2"
                    style={{
                      backgroundColor: "var(--gold)",
                      color: "var(--navy)",
                    }}
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-gray-200 h-96">
        <div className="w-full h-full flex items-center justify-center text-gray-500">
          <div className="text-center">
            <MapPin size={48} className="mx-auto mb-4" />
            <p>Interactive Map Would Appear Here</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
