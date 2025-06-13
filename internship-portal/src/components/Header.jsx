import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="max-w-5xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Internship Portal
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/internships" className="hover:underline">
            Internships
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
