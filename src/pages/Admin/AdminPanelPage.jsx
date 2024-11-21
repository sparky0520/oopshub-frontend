import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function AdminPanelPage() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/admin/access-requests")
      .then((reqs) => {
        console.log(reqs);
        setRequests(reqs.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {requests.map((item, index) => (
        <div key={index}>
          <h1>{item.name}</h1>
          <h2>{item.admin_user_id}</h2>
          <h3>{item.ai_answer_enabled}</h3>
        </div>
      ))}
    </div>
  );
}
