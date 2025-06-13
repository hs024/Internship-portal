import { useSelector } from "react-redux";
import FilterBar from "../components/FilterBar";
import InternshipCard from "../components/InternshipCard";

const Home = () => {
  const internships = useSelector((state) => state.internships.filtered);

  return (
    <main className="px-4 py-10 max-w-7xl mx-auto bg-gray-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif font-bold text-indigo-700 dark:text-indigo-400 tracking-tight mb-4">
          Welcome to the Internship Portal
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Find and apply to internships across top companies. Filter by skills,
          location, and more.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="mb-10">
        <FilterBar />
      </div>

      {/* Internships Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {internships.length === 0 ? (
          <p className="text-center col-span-full text-gray-600 dark:text-gray-400 text-lg">
            🚫 No internships match the current filters.
          </p>
        ) : (
          internships.map((internship) => (
            <InternshipCard key={internship.id} internship={internship} />
          ))
        )}
      </div>
    </main>
  );
};

export default Home;
