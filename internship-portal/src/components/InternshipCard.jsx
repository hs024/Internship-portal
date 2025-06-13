import { Link } from "react-router-dom";

const InternshipCard = ({ internship }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{internship.title}</h2>
      <p className="text-gray-600">{internship.company}</p>
      <p className="text-sm mt-1">📍 {internship.location}</p>
      <p className="text-sm">💰 {internship.stipend}</p>
      <p className="text-sm mb-2">⏳ {internship.duration}</p>
      <Link to={`/internships/${internship.id}`}>
        <button className="mt-2 text-blue-600 hover:underline">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default InternshipCard;
