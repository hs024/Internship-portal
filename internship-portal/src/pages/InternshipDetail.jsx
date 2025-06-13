import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const InternshipDetail = () => {
  const { id } = useParams();
  const internship = useSelector((state) =>
    state.internships.list.find((job) => job.id === parseInt(id))
  );

  if (!internship) return <p className="p-4">Internship not found.</p>;

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">{internship.title}</h1>
      <p className="text-gray-700 mb-1">{internship.company}</p>
      <p className="text-sm">📍 {internship.location}</p>
      <p className="text-sm">💰 {internship.stipend}</p>
      <p className="text-sm mb-4">⏳ {internship.duration}</p>

      <h2 className="text-xl font-semibold mt-4">Description:</h2>
      <p className="text-gray-700">{internship.description}</p>

      <h3 className="mt-4 font-medium">Skills Required:</h3>
      <ul className="list-disc list-inside text-gray-600">
        {internship.skills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>

      <Link to={`/apply/${internship.id}`}>
        <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Apply Now
        </button>
      </Link>
    </main>
  );
};

export default InternshipDetail;
