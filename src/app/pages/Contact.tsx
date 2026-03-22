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
              Get In Touch
            </h1>
            <p className="text-xl text-gray-200">
              We're here to support your HR needs. Reach out for consultations,
              support requests, or general inquiries.
            </p>
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
                      contact@cherriegiveresultz.com
                    </p>
                    <p className="text-gray-600">
                      hr-support@cherriegiveresultz.com
                    </p>
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
