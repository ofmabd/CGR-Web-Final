import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

const ForgetPassword: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Your logic to trigger the password reset email
    console.log('Reset link requested for:', email);
    setIsSubmitted(true);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2c134d] bg-[url('https://transparenttextures.com')] p-4">
      <div className="max-w-md w-full bg-[#1c0d33]/80 backdrop-blur-md p-8 rounded-lg shadow-2xl border border-white/10">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#f2b824] mb-2">Forget Password</h2>
          {isSubmitted ? (
            <p className="text-green-400 text-sm animate-pulse">
              Check your inbox! If an account exists, a link is on its way.
            </p>
          ) : (
            <p className="text-gray-300 text-sm">
              Enter your email address and we'll send you a link to reset your password.
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">Email Address</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <Mail size={18} />
              </span>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full pl-10 pr-4 py-3 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f2b824] transition-all"
                placeholder="example@email.com"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#f2b824] hover:bg-[#d9a420] text-[#1c0d33] font-bold py-3 rounded-md transition-all shadow-lg active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitted}
          >
            {isSubmitted ? 'Link Sent' : 'Send Reset Link'}
          </button>
        </form>

        {/* Footer Navigation */}
        <div className="mt-8 text-center border-t border-white/10 pt-6">
          <Link 
            to="/Login" 
            className="inline-flex items-center text-sm text-[#f2b824] hover:underline transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
