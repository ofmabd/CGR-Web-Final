import { useState } from "react";
import { Link } from "react-router";
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Signup() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");

    console.log("Signup Data:", formData);

    // connect backend API here later
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />

      <section className="flex-grow flex items-center justify-center py-20 px-4
      bg-[url('/src/assets/background_image.PNG')] bg-cover bg-center min-h-screen flex flex-col 
      ">
        <div className="w-full max-w-2xl bg-white shadow-xl rounded-lg p-10
        bg-[url('/src/assets/background_image.PNG')] bg-cover bg-center
        ">
          <div className="text-center mb-8">
            <h1
              className="text-3xl mb-2"
              style={{ color: "var(--gold)", fontWeight: 700 }}
            >
              Create Account
            </h1>

            <p className="text-white">
              Join Cherrie Give Resultz to access career opportunities
            </p>
          </div>

          {error && (
            <div className="mb-4 text-sm text-red-600 bg-red-50 p-3 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm mb-1 text-white">
                Full Name
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--gold)] bg-white"
                  placeholder="John Doe"
                  
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-1 text-white">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--gold)] bg-white"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            {/* Resume upload */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-white">
                Upload Resume 
              </label>
              <input 
              type="file"
              accept=".pdf, .doc, .docx"
              className="block w-40px  text-sm text-gray-400 
              file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-1
              file:text-sm hover:file:bg-[var(--chart-5)] hover:text-black hover:file:border-0"
               />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm mb-1 text-white">
                Password
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-10 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--gold)] bg-white"
                  placeholder="Create password"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm mb-1 text-white">
                Confirm Password
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full pl-10 pr-10 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--gold)] bg-white"
                  placeholder="Repeat password"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-md font-medium transition-all hover:opacity-90"
              style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
            >
              Create Account
            </button>
          </form>

          <p className="text-sm text-center text-white mt-6">
            Already have an account?{" "}
            <Link
              to="/Login"
              className="font-medium underline"
              style={{ color: "var(--gold)" }}
            >
              Sign in
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
