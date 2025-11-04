import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

export default function Profile() {
  const { user, updateUserProfile } = useAuth();
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile({ displayName: name, photoURL: photo });
      toast.success("Profile updated");
    } catch (e) {
      toast.error(e.message);
    }
  };

  if (!user) return null;

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold mb-4 text-center">My Profile</h1>

      <div className="flex items-center gap-4 mb-6">
        <img
          src={user.photoURL || `https://i.pravatar.cc/100?u=${user.uid}`}
          alt="User Avatar"
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">{user.displayName || "No name set"}</p>
          <p className="opacity-70 text-sm">{user.email}</p>
        </div>
      </div>

      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Update Name
          </label>
          <input
            className="input input-bordered w-full p-3 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Update Photo URL
          </label>
          <input
            className="input input-bordered w-full p-3 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full p-3 text-white font-semibold mt-4"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}
