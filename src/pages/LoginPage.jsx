import { useState } from "react";
import api from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault(); // prevents reload
    const user = {
      email,
      password,
    };
    api
      .post("http://127.0.0.1:8000/auth/login", user)
      .then((token) => {
        console.log("User loggedin successfully!");
        console.log("Token: " + token.data);
        navigate("/join-company");
      })
      .catch((error) => {
        console.log(error);
        alert("Error logging in new user.");
      });
  }

  return (
    <div className="min-h-[100vh] flex justify-center items-center text-center">
      <div>
        {/* login form */}
        <h1 className="text-2xl font-bold">Login</h1>
        <form className="text-start" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            className="border-4 border-primary-900"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            className="border-4 border-primary-900"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="reset">Cancel</button>
          <button type="submit">Submit</button>
        </form>
        <p>
          Need an account? <a>SignUp</a>
        </p>
      </div>
    </div>
  );
}
