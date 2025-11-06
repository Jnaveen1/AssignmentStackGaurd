import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./index.css";
import { useEffect } from "react";

const Configuration = () => {
  const [key, setKey] = useState("");
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (key.length < 100 || key.length > 1000) {
      alert("Configuration key must be between 100 and 1000 characters!");
      return;
    }

    localStorage.setItem("configKey", key);
    navigate("/dashboard");
  };

useEffect(() => {
  if (!isAuthenticated) {
    navigate("/");
  }
}, [isAuthenticated, navigate]);

  return (
    <div className="config-container">
      <h2>Enter Configuration Key</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter your configuration key..."
          value={key}
          onChange={(e) => setKey(e.target.value)}
          rows={6}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Configuration;
