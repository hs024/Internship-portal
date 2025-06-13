import { useSelector } from "react-redux";
import InternshipCard from "../components/InternshipCard";

const InternshipList = () => {
  const internships = useSelector((state) => state.internships.list);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-900 px-4 py-12 transition-colors">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-10 text-center">
          Available Internships
        </h1>

        {/* Grid of Internships */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internships.length > 0 ? (
            internships.map((internship) => (
              <InternshipCard key={internship.id} internship={internship} />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-600 dark:text-gray-400 text-lg">
              🚫 No internships available at the moment.
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default InternshipList;
