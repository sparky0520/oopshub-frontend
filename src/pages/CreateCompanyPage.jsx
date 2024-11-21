import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateCompanyPage() {
  const [name, setName] = useState("");
  const [aiEnabled, setAiEnabled] = useState(true);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault(); // prevents reload
    const company = {
      name,
      aiEnabled,
    };
    console.log(company);
    axios
      .post(`http://127.0.0.1:8000/companies/`, company)
      .then(() => {
        console.log("Created company successfully!");
        navigate("/create-company");
      })
      .catch((error) => {
        console.log(error);
        alert("Error creating company.");
      });
  }

  return (
    <div className="min-h-[100vh] flex justify-center items-center text-center">
      <div>
        {/* login form */}
        <h1 className="text-2xl font-bold">Create a Company</h1>
        <form className="text-start" onSubmit={handleSubmit}>
          <label htmlFor="company_name">Company Name</label>
          <br />
          <input
            type="text"
            id="company_name"
            name="company_name"
            className="border-4 border-primary-900"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="aiEnabled">AI Enabled</label>
          <input
            type="checkbox"
            id="aiEnabled"
            name="aiEnabled"
            className="border-4 border-primary-900"
            onChange={(e) => setAiEnabled(e.target.value)}
          />
          <br />
          <button type="reset">Cancel</button>
          <button type="submit">Submit</button>
        </form>
        <p>
          Have your own company? <a>Create a Company</a>
        </p>
      </div>
    </div>
  );
}
