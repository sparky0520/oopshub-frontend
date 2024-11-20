import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault(); // prevents page refresh

    const fullName = fname + lname;
    const user = {
      name: fullName,
      email,
      password,
    };
    axios
      .post("http://127.0.0.1:8000/auth/register", user)
      .then(() => {
        console.log("User registered successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("Error registering new user.");
      });
  }

  return (
    <div className="min-h-[100vh] flex justify-center items-center text-center">
      <div>
        {/* register form */}
        <h1 className="text-2xl font-bold">Register</h1>
        <form className="text-start" onSubmit={handleSubmit}>
          <label htmlFor="fname">First name</label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            className="border-4 border-primary-900"
            onChange={(e) => setFname(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Last name</label>
          <br />
          <input
            type="text"
            id="lname"
            name="lname"
            className="border-4 border-primary-900"
            onChange={(e) => setLname(e.target.value)}
          />
          <br />
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
          Already have an account? <a>SignIn</a>
        </p>
      </div>
    </div>
  );
}
