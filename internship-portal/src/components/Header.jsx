import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="bg-white dark:bg-slate-900 shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Title */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-blue-600 dark:text-indigo-400 tracking-wide hover:opacity-90 transition"
        >
          Internship Portal
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6 text-sm sm:text-base font-medium">
          <Link
            to="/"
            className={`${
              pathname === "/"
                ? "text-blue-600 dark:text-indigo-400"
                : "text-gray-700 dark:text-gray-300"
            } hover:underline transition`}
          >
            Home
          </Link>
          <Link
            to="/internships"
            className={`${
              pathname === "/internships"
                ? "text-blue-600 dark:text-indigo-400"
                : "text-gray-700 dark:text-gray-300"
            } hover:underline transition`}
          >
            Internships
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
