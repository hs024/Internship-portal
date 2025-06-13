import { useSelector } from "react-redux";
import InternshipCard from "../components/InternshipCard";

const InternshipList = () => {
  const internships = useSelector((state) => state.internships.list);

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Available Internships</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {internships.map((internship) => (
          <InternshipCard key={internship.id} internship={internship} />
        ))}
      </div>
    </main>
  );
};

export default InternshipList;
