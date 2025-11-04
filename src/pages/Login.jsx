import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import toast from "react-hot-toast";
import PasswordField from "../components/PasswordField";

export default function Login() {
  const { signIn, googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      toast.success("Welcome back!");
      navigate(from, { replace: true });
    } catch (e) {
      toast.error(e.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();
      toast.success("Logged in with Google");
      navigate(from, { replace: true });
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            value={email}
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input input-bordered w-full p-3 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <PasswordField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />

        <button
          type="submit"
          className="btn btn-primary w-full p-3 text-white font-semibold"
        >
          Login
        </button>
      </form>

      <div className="flex justify-between mt-3 text-sm">
        <Link
          to="/forgot"
          state={{ email }}
          className="text-blue-500 hover:text-blue-700"
        >
          Forgot Password?
        </Link>
        <Link to="/signup" className="text-blue-500 hover:text-blue-700">
          Create account
        </Link>
      </div>

      <div className="divider my-4">OR</div>

      <button
        onClick={handleGoogle}
        className="btn btn-outline w-full p-3 text-white font-semibold bg-gray-800 hover:bg-gray-900"
      >
        Continue with Google
      </button>
    </div>
  );
}
