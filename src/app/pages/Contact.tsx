import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Mail, Phone } from "lucide-react";
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

      {/* HERO */}
      <section
        className="relative overflow-hidden py-24 md:py-32 text-white text-center"
        style={{
          background: `linear-gradient(135deg, var(--navy) 0%, #162A5E 100%)`,
        }}
      >
        {/* BG IMAGE */}
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80"
            alt="Customer support team"
            className="w-full h-full object-cover"
          />
        </div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[color:var(--navy)]/80"></div>

        {/* GLOW */}
        <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-[-80px] right-[-80px] w-72 h-72 bg-yellow-400/20 blur-3xl rounded-full"></div>

        {/* BADGE */}
        <div className="absolute top-10 right-10 hidden md:block bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs">
          💬 24/7 Support
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get In{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>

          <p className="text-lg text-gray-300 mb-10 max-w-2xl">
            We're here to support your HR needs. Reach out for consultations,
            support requests, or general inquiries.
          </p>

          <div className="w-24 h-1 bg-[var(--gold)] mb-10 rounded-full"></div>

          {/* QUICK OPTIONS */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["📞 Call Us", "✉️ Email Support", "💼 Book Consultation"].map(
              (item, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm backdrop-blur-md hover:bg-white/10 transition"
                >
                  {item}
                </span>
              )
            )}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-gray-300">New Here?</span>
            <Link
              to="/NewHirePortal"
              className="px-6 py-3 rounded-md font-medium hover:scale-105 transition"
              style={{
                background: "linear-gradient(90deg, #D4A017, #FFD95A)",
                color: "var(--navy)",
              }}
            >
              Join Onboarding Session →
            </Link>
          </div>
        </div>
      </section>

     {/* CONTACT INFO + FORM */}
<section className="py-24 md:py-32 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-12">

    {/* LEFT */}
    <div className="space-y-6">

      <h2 className="text-3xl font-semibold">Contact Information</h2>

      {/* RESPONSE TIME */}
      <div className="inline-block px-4 py-2 bg-green-100 text-green-700 text-sm rounded-full">
        ⚡ Responds within 24 hours
      </div>

      {/* EMAIL */}
      <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-200 hover:shadow-md transition">
        <div className="w-12 h-12 bg-purple-500/90 text-white flex items-center justify-center rounded-lg">
          <Mail />
        </div>
        <div>
          <h3 className="font-medium mb-1">Email</h3>
          {CONTACT.emails.map((email, i) => (
            <p key={i} className="text-gray-600">
              {email}
            </p>
          ))}
        </div>
      </div>

      {/* PHONE */}
      <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-200 hover:shadow-md transition">
        <div className="w-12 h-12 bg-purple-500/90 text-white flex items-center justify-center rounded-lg">
          <Phone />
        </div>
        <div>
          <h3 className="font-medium mb-1">Phone</h3>
          <p className="text-gray-600">{CONTACT.phone}</p>
          <p className="text-xs text-gray-400">Mon - Fri, 9am - 5pm</p>
        </div>
      </div>

      {/* OFFICE */}
      <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-200 hover:shadow-md transition">
        <div className="w-12 h-12 bg-purple-500/90 text-white flex items-center justify-center rounded-lg">
          📍
        </div>
        <div>
          <h3 className="font-medium mb-1">Office</h3>
          {CONTACT.address.map((line, i) => (
            <p key={i} className="text-gray-600">{line}</p>
          ))}
          <p className="text-xs text-gray-400 mt-1">
            Walk-ins by appointment only
          </p>
        </div>
      </div>

      {/* EIN (NOW SIMPLE ✅) */}
      <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-200 hover:shadow-md transition">
        <div className="w-12 h-12 bg-gray-800 text-white flex items-center justify-center rounded-lg">
          🆔
        </div>
        <div>
          <h3 className="font-medium mb-1">EIN</h3>
          <p className="text-gray-600">39-2971068</p>
        </div>
      </div>

      {/* CTA */}
      
    </div>
    {/* EIN */}
    {/* <div>
      <h3 className="font-medium">EIN</h3>
      <p className="text-gray-600">{CONTACT.ein}</p>
    </div> */}

    {/* RIGHT FORM */}
    <div className="lg:col-span-2">
      <form onSubmit={handleSubmit} className="space-y-4">

        <div className="grid grid-cols-2 gap-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="border p-3 rounded focus:outline-none focus:ring-1 focus:ring-gray-400 transition"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="border p-3 rounded focus:outline-none focus:ring-1 focus:ring-gray-400 transition"
          />
        </div>

        {/* BIGGER TEXTAREA ✅ */}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="border p-3 rounded w-full h-40 resize-none focus:outline-none focus:ring-1 focus:ring-gray-400 transition"
        />

        {/* SIMPLE BUTTON ✅ */}
        <button
          type="submit"
          className="border border-black px-6 py-3 rounded hover:bg-black hover:text-white transition"
        >
          Send Message
        </button>

      </form>
    </div>

  </div>
</section>

      <Footer />
    </div>
  );
}