import { Link } from "react-router-dom";

const InternshipCard = ({ internship }) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-all">
      <h2 className="text-2xl font-bold text-blue-700 dark:text-indigo-400 mb-1">
        {internship.title}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 font-medium">
        {internship.company}
      </p>

      <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 space-y-1">
        <p>
          📍 <span className="font-semibold">{internship.location}</span>
        </p>
        <p>
          💰 <span className="font-semibold">{internship.stipend}</span>
        </p>
        <p>
          ⏳ <span className="font-semibold">{internship.duration}</span>
        </p>
      </div>

      <Link to={`/internships/${internship.id}`}>
        <button className="mt-4 inline-block bg-blue-600 dark:bg-indigo-500 text-white text-sm px-4 py-2 rounded-full font-semibold hover:bg-blue-700 dark:hover:bg-indigo-600 transition">
          View Details →
        </button>
      </Link>
    </div>
  );
};

export default InternshipCard;
