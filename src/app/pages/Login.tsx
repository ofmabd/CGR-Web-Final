import { useState } from "react";
import { Link } from "react-router";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

interface LoginData {
  email: string;
  password: string;
}

export default function Login() {
  const [formData, setFormData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please enter your email and password.");
      return;
    }

    setError("");

    console.log("Login Data:", formData);

    // Connect backend login API here
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />

      <section className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-10">

          {/* Heading */}
          <div className="text-center mb-8">
            <h1
              className="text-3xl mb-2"
              style={{ color: "var(--navy)", fontWeight: 700 }}
            >
              Welcome Back
            </h1>

            <p className="text-gray-600">
              Sign in to access your account
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-4 text-sm text-red-600 bg-red-50 p-3 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <label className="block text-sm mb-1 text-gray-700">
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
                  placeholder="example@email.com"
                  className="w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm mb-1 text-gray-700">
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
                  placeholder="Enter password"
                  className="w-full pl-10 pr-10 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember / Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="accent-[var(--gold)]" />
                Remember me
              </label>

              <Link
                to="/forgot-password"
                className="underline"
                style={{ color: "var(--purple)" }}
              >
                Forgot password?
              </Link>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-md font-medium transition-all hover:opacity-90"
              style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
            >
              Sign In
            </button>
          </form>

          {/* Signup Link */}
          <p className="text-sm text-center text-gray-600 mt-6">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium underline"
              style={{ color: "var(--purple)" }}
            >
              Create account
            </Link>
          </p>

        </div>
      </section>

      <Footer />
    </div>
  );
}