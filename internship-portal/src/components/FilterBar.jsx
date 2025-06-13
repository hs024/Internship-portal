import { useDispatch, useSelector } from "react-redux";
import { setFilter, resetFilters } from "../redux/internshipSlice";

const FilterBar = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.internships.filters);

  const handleChange = (e) => {
    dispatch(setFilter({ [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex flex-wrap items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow mb-8">
      {/* Location Filter */}
      <input
        type="text"
        name="location"
        value={filters.location}
        onChange={handleChange}
        placeholder="📍 Location"
        className="flex-1 min-w-[150px] px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-xl bg-gray-50 dark:bg-slate-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {/* Company Filter */}
      <input
        type="text"
        name="company"
        value={filters.company}
        onChange={handleChange}
        placeholder="🏢 Company"
        className="flex-1 min-w-[150px] px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-xl bg-gray-50 dark:bg-slate-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {/* Skill Filter */}
      <input
        type="text"
        name="skill"
        value={filters.skill}
        onChange={handleChange}
        placeholder="🛠️ Skill"
        className="flex-1 min-w-[150px] px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-xl bg-gray-50 dark:bg-slate-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      {/* title Filter */}
      <input
        type="text"
        name="title"
        value={filters.title}
        onChange={handleChange}
        placeholder="🛠️ title"
        className="flex-1 min-w-[150px] px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-xl bg-gray-50 dark:bg-slate-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {/* Reset Button */}
      <button
        onClick={() => dispatch(resetFilters())}
        className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium transition shadow"
      >
        Reset
      </button>
    </div>
  );
};

export default FilterBar;
