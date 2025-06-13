import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const InternshipDetail = () => {
  const { id } = useParams();
  const internship = useSelector((state) =>
    state.internships.list.find((job) => job.id === parseInt(id))
  );

  if (!internship)
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900 transition-colors">
        <p className="text-lg text-red-600 dark:text-red-400 font-medium">
          🚫 Internship not found.
        </p>
      </main>
    );

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-900 px-4 py-12 transition-colors">
      <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
        {/* Title */}
        <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-2">
          {internship.title}
        </h1>

        {/* Company and Meta Info */}
        <p className="text-lg text-indigo-600 dark:text-indigo-400 font-medium mb-1">
          {internship.company}
        </p>
        <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1 mb-6">
          <p>
            📍 <span className="font-medium">{internship.location}</span>
          </p>
          <p>
            💰 <span className="font-medium">{internship.stipend}</span>
          </p>
          <p>
            ⏳ <span className="font-medium">{internship.duration}</span>
          </p>
        </div>

        {/* Description */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            📄 Description
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {internship.description}
          </p>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            🛠 Skills Required
          </h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
            {internship.skills.map((skill, idx) => (
              <li key={idx} className="capitalize">
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Apply Button */}
        <div className="text-right">
          <Link to={`/apply/${internship.id}`}>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2 rounded-xl shadow transition">
              Apply Now →
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default InternshipDetail;
