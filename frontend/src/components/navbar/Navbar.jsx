// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/dashboard" },
    { name: "Chatbot", path: "/chatbot" },
    { name: "Tutors", path: "/tutors" },
    { name: "Friends", path: "/friends" },
  ];

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold">MyApp</div>

      <ul className="flex space-x-6">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className={`hover:text-gray-300 ${
                location.pathname === link.path ? "underline" : ""
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <div>
        <button className="bg-white text-blue-600 px-4 py-1 rounded hover:bg-gray-100">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;