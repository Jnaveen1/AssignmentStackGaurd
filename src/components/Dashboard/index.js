import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./index.css";
import { useEffect } from "react";

const Dashboard = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("configKey");
    logout();
    navigate("/");
  };

  const configKey = localStorage.getItem("configKey");

  // If key somehow missing, protect the route
useEffect(() => {
  if (!configKey) {
    navigate("/configuration");
  }
}, [configKey, navigate]);

  return (
    <div className="dashboard-container">
      <h1>Dashboard Page</h1>
      <p>Welcome to your secured StackGuard dashboard.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
