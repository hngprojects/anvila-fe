"use client";

import React from "react";
import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ForgotPasswordForm = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/auth/forgot-password/check-mail");
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
      {/* Back Button */}
      <Link 
        href="/auth/login" 
        className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-8 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft size={16} />
        Back
      </Link>

      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Forgot Password?</h1>
        <p className="text-gray-500 text-sm">Enter your email and we'll send you a reset link</p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Mail size={18} />
            </div>
            <input
              type="email"
              required
              placeholder="Enter email address"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004D4D] focus:border-transparent transition-all placeholder:text-gray-300"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#004D4D] text-white py-3 rounded-lg font-semibold hover:bg-[#003d3d] transition-all shadow-sm"
        >
          Send Reset Link
        </button>
      </form>

      <div className="mt-10 text-center">
        <p className="text-sm text-gray-500">
          Need help? <a href="#" className="text-gray-900 font-medium hover:underline">Contact support</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;