import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to the Internship Portal
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Find and apply to internships across top companies.
      </p>
      <Link to="/internships">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Browse Internships
        </button>
      </Link>
    </main>
  );
};

export default Home;
