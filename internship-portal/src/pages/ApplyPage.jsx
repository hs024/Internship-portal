import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ApplicationForm from "../components/ApplicationForm";

const ApplyPage = () => {
  const { id } = useParams();
  const internship = useSelector((state) =>
    state.internships.list.find((item) => item.id === parseInt(id))
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
    <main className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors px-4 py-12">
      <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 shadow-lg rounded-2xl p-8">
        {/* Heading */}
        <h1 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-2">
          Apply for Internship
        </h1>

        {/* Role Title */}
        <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
          {internship.title}
        </h2>

        {/* Company */}
        <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
          {internship.company}
        </p>

        {/* Application Form */}
        <ApplicationForm internship={internship} />
      </div>
    </main>
  );
};

export default ApplyPage;
