import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

export default function SkillDetails() {
  const { id } = useParams();
  const { user } = useAuth();
  const [skill, setSkill] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch("/skills.json")
      .then((r) => r.json())
      .then((data) => {
        const s = data.find((x) => String(x.skillId) === String(id));
        setSkill(s);
        setName(user?.displayName || "");
        setEmail(user?.email || "");
      });
  }, [id, user]);

  const onBook = (e) => {
    e.preventDefault();
    toast.success("Session booked successfully!");

    setName("");
    setEmail("");
  };

  if (!skill) return <div className="py-10">Loading...</div>;

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <img
          src={skill.image}
          alt={skill.skillName}
          className="rounded-2xl w-full object-cover shadow-lg"
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold">{skill.skillName}</h1>
        <p className="opacity-80 mt-2">{skill.description}</p>
        <ul className="mt-4 space-y-1 text-sm">
          <li>
            <b>Provider:</b> {skill.providerName} ({skill.providerEmail})
          </li>
          <li>
            <b>Category:</b> {skill.category}
          </li>
          <li>
            <b>Rating:</b> ⭐ {skill.rating}
          </li>
          <li>
            <b>Price:</b> ${skill.price}
          </li>
          <li>
            <b>Slots Available:</b> {skill.slotsAvailable}
          </li>
        </ul>

        <div className="mt-6 p-5 rounded-2xl border shadow-lg">
          <h3 className="font-semibold mb-3">Book Session</h3>
          <form onSubmit={onBook} className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
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
                Email
              </label>
              <input
                className="input input-bordered w-full p-3 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full p-3 text-white font-semibold mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
