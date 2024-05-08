import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get("http://localhost:5000/logout");
      if (response.data.loggedOut) {
        navigate("/admin/login");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 py-5 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link
          to={"/"}
          className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
          aria-current="page"
        >
          Dashboard
        </Link>

        <button
          onClick={handleLogout}
          className="text-white bg-cyan-400 px-3 py-2 rounded-lg"
        >
          Sign Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
