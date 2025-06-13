import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ApplicationForm = ({ internship }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
    portfolio: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.resume) {
      alert("Please upload your resume.");
      return;
    }

    alert(
      `✅ Thank you, ${form.name}!\nYou have successfully applied to ${internship.title} at ${internship.company}.`
    );

    console.log("Application Submitted:", {
      ...form,
      internshipId: internship.id,
      internshipTitle: internship.title,
      company: internship.company,
    });

    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="space-y-6 text-gray-800 dark:text-gray-100"
    >
      {/* Name */}
      <div>
        <label className="block text-sm font-medium mb-1">Full Name</label>
        <input
          name="name"
          onChange={handleChange}
          required
          placeholder="himanshu"
          className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          required
          placeholder="you@gmail.com"
          className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium mb-1">Phone Number</label>
        <input
          type="tel"
          name="phone"
          onChange={handleChange}
          required
          placeholder="99999991111"
          className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Portfolio */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Portfolio / LinkedIn (optional)
        </label>
        <input
          type="url"
          name="portfolio"
          onChange={handleChange}
          placeholder="https://portfolio"
          className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Cover Letter */}
      <div>
        <label className="block text-sm font-medium mb-1">Cover Letter</label>
        <textarea
          name="coverLetter"
          rows={5}
          onChange={handleChange}
          required
          placeholder="Write a short cover letter..."
          className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Resume */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Upload Resume (PDF/DOC)
        </label>
        <input
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          onChange={handleChange}
          required
          className="w-full text-sm text-gray-600 dark:text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-xl transition shadow-lg"
        >
          Submit Application
        </button>
      </div>
    </form>
  );
};

export default ApplicationForm;
