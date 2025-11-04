import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import toast from "react-hot-toast";
import PasswordField from "../components/PasswordField";

export default function Signup() {
  const { createUser, updateUserProfile, googleLogin } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validate = (pwd) => {
    if (pwd.length < 6) return "Password must be at least 6 characters";
    if (!/[A-Z]/.test(pwd)) return "Must include an uppercase letter";
    if (!/[a-z]/.test(pwd)) return "Must include a lowercase letter";
    return "";
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const err = validate(password);
    if (err) {
      setError(err);
      return;
    }
    try {
      await createUser(email, password);
      await updateUserProfile({ displayName: name, photoURL: photo });
      toast.success("Account created");
      navigate("/");
    } catch (e) {
      toast.error(e.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();
      toast.success("Signed up with Google");
      navigate("/");
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold mb-4 text-center">Signup</h1>
      <form onSubmit={handleSignup} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            value={name}
            autoComplete="name"
            onChange={(e) => setName(e.target.value)}
            required
            className="input input-bordered w-full p-3 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Photo URL
          </label>
          <input
            type="url"
            value={photo}
            placeholder="https://example.com/avatar.jpg"
            onChange={(e) => setPhoto(e.target.value)}
            className="input input-bordered w-full p-3 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

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
          label="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
          showStrength
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

        <button
          type="submit"
          className="btn btn-primary w-full p-3 text-white font-semibold"
        >
          Register
        </button>
      </form>

      <div className="flex justify-between mt-3 text-sm">
        <span>
          Have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:text-blue-700">
            Login
          </Link>
        </span>
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
