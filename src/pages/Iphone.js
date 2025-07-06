import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Iphone = () => {
  const [iphones, setIphones] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/iphones") // adjust to your backend API
      .then((res) => setIphones(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">iPhone Products</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {iphones.map((phone) => (
          <div key={phone.pid} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{phone.name}</h2>
            <p>{phone.description}</p>
            <Link
              to={`/iphone/${phone.pid}`}
              className="text-blue-600 underline"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Iphone;
