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
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 px-4">

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl mb-6">Contact Information</h2>

            {/* Email */}
            <div className="mb-6">
              <Mail />
              <h3>Email</h3>
              {CONTACT.emails.map((email, i) => (
                <a key={i} href={`mailto:${email}`} className="block">
                  {email}
                </a>
              ))}
            </div>

            {/* Phone */}
            <div className="mb-6">
              <Phone />
              <h3>Phone</h3>
              <a href={CONTACT.phoneLink}>
                {CONTACT.phone}
              </a>
            </div>

            {/* Address */}
            <div>
              <MapPin />
              <h3>Office</h3>
              {CONTACT.address.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-4">

              <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
              <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" />

              <button type="submit">
                <Send /> Send
              </button>

            </form>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
