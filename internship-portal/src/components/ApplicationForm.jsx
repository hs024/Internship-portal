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

    // Redirect to home after short delay
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <input
        name="name"
        placeholder="Full Name"
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      />
      <input
        type="url"
        name="portfolio"
        placeholder="Portfolio/LinkedIn (optional)"
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <textarea
        name="coverLetter"
        placeholder="Write a short cover letter..."
        rows={5}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      ></textarea>
      <div>
        <label className="block mb-1">Upload Resume (PDF/DOC):</label>
        <input
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          onChange={handleChange}
          required
          className="w-full"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit Application
      </button>
    </form>
  );
};

export default ApplicationForm;
