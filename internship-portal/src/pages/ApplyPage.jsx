import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ApplicationForm from "../components/ApplicationForm";

const ApplyPage = () => {
  const { id } = useParams();
  const internship = useSelector((state) =>
    state.internships.list.find((item) => item.id === parseInt(id))
  );

  if (!internship) return <p className="p-4">Internship not found.</p>;

  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">
        Apply to <span className="text-blue-600">{internship.title}</span>
      </h1>
      <p className="text-gray-600 mb-6">{internship.company}</p>
      <ApplicationForm internship={internship} />
    </main>
  );
};

export default ApplyPage;
