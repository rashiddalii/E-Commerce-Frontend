import { useEffect, useState } from "react";
import { logoutUser } from "../api/auth";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = async () => {
    try {
      await logoutUser();
      localStorage.removeItem("token");
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-6">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">
          Welcome to Your Dashboard
        </h1>
        {user && (
          <p className="text-gray-600 mb-4">
            Hello, <span className="font-semibold">{user.name}</span>!
          </p>
        )}
        <p className="text-gray-600 mb-6">
          You’re successfully logged in. This is your dashboard.
        </p>
        <button
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
