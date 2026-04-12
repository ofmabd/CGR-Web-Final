import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { CONTACT } from "../../constants/contact";

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
    >
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
      {["📞 Call Us", "✉️ Email Support", "💼 Book Consultation"].map((item, i) => (
        <span
          key={i}
          className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm backdrop-blur-md hover:bg-white/10 transition"
        >
          {item}
        </span>
      ))}
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
      <section className="py-24 md:py-32" style={{
        background: `linear-gradient(135deg, var(--navy) 0%, #162A5E 100%)`,
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-200">
              We're here to support your HR needs.
            </p>
          </div>

          <div className="pt-20 text-right">
            <span className="text-white">New Here? </span>
            <Link to="/NewHirePortal" className="underline" style={{ color: "var(--gold)" }}>
              Join Onboarding Session
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
  <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-12">

    {/* LEFT: Contact Info */}
    <div className="lg:col-span-1 space-y-6">
      <h2 className="text-2xl font-semibold">Contact Information</h2>

      {/* Email */}
      <div>
        <h3 className="font-medium">Email</h3>
        {CONTACT.emails.map((email, i) => (
          <a
            key={i}
            href={`mailto:${email}`}
            className="block text-gray-600 hover:underline"
          >
            {email}
          </a>
        ))}
      </div>

      {/* Phone */}
      <div>
        <h3 className="font-medium">Phone</h3>
        <a href={CONTACT.phoneLink} className="text-gray-600 hover:underline">
          {CONTACT.phone}
        </a>
      </div>

      {/* Address */}
      <div>
        <h3 className="font-medium">Office</h3>
        {CONTACT.address.map((line, i) => (
          <p key={i} className="text-gray-600">
            {line}
          </p>
        ))}
      </div>
    </div>

    {/* RIGHT: Form */}
    <div className="lg:col-span-2">
      <form onSubmit={handleSubmit} className="space-y-4">

        <div className="grid grid-cols-2 gap-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="border p-3 rounded"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="border p-3 rounded"
          />
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="border p-3 rounded w-full"
        />

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded flex items-center gap-2"
        >
          Send
        </button>

      </form>
    </div>

  </div>
</section>

      <Footer />
    </div>
  );
}
