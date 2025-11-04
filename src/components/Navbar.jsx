import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

export default function Navbar() {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("Logged out");
      navigate("/");
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between w-full">
        <div className="flex-1">
          <Link to="/" className="text-xl font-bold flex items-center gap-2">
            <img src="/logo.png" className="w-7 h-7" alt="logo" />
            SkillSwap
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 items-center gap-2">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {user && (
              <li>
                <NavLink to="/profile">My Profile</NavLink>
              </li>
            )}
            {!user && (
              <>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/signup">Signup</NavLink>
                </li>
              </>
            )}
            {user && (
              <>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div
                      className="w-10 rounded-full"
                      title={user.displayName || user.email}
                    >
                      <img
                        alt="avatar"
                        src={
                          user.photoURL ||
                          `https://i.pravatar.cc/100?u=${user.uid}`
                        }
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li className="px-2 py-1 text-sm opacity-70">
                      {user.displayName || "No name set"}
                    </li>
                    <li className="px-2 py-1 text-sm opacity-70">
                      {user.email}
                    </li>
                    <li>
                      <button onClick={handleLogout}>Logout</button>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
