import api from "../api/axiosInstance";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function JoinCompanyPage() {
  const [companyid, setCompanyid] = useState("");
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault(); // prevents reload
    api
      .post(`http://127.0.0.1:8000/companies/${companyid}/access-request`)
      .then(() => {
        console.log("Request to join company sent successfully!");
        navigate("/create-company");
      })
      .catch((error) => {
        console.log(error);
        alert("Error sending request to join company.");
      });
  }

  return (
    <div className="min-h-[100vh] flex justify-center items-center text-center">
      <div>
        {/* login form */}
        <h1 className="text-2xl font-bold">Join a Company</h1>
        <form className="text-start" onSubmit={handleSubmit}>
          <label htmlFor="companyid">Company Id</label>
          <br />
          <input
            type="text"
            id="companyid"
            name="companyid"
            className="border-4 border-primary-900"
            onChange={(e) => setCompanyid(e.target.value)}
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
