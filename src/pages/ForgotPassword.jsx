import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ForgotPassword() {
  const { resetPassword } = useAuth();
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || "");
  const [submitting, setSubmitting] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      await resetPassword(email);
      toast.success("Password reset email sent. Please check your inbox.");
    } catch (e) {
      toast.error(e.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-base-100 shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold mb-4 text-center">Reset Password</h1>
      <form onSubmit={handleReset} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input input-bordered w-full p-3 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="btn btn-primary w-full p-3 text-white font-semibold mt-4"
        >
          {submitting ? "Sending..." : "Send Reset Link"}
        </button>
      </form>

      <p className="text-xs text-gray-500 mt-3 text-center">
        Tip: Quickly check via{" "}
        <a
          className="link link-primary"
          href="https://mail.google.com"
          target="_blank"
          rel="noreferrer"
        >
          Gmail
        </a>
        .
      </p>
    </div>
  );
}
