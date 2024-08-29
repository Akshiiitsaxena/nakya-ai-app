import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt with:", username, password);
    localStorage.setItem("isLoggedIn", "true");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-between bg-black py-16 px-4 sm:px-6 lg:px-24">
      <div>
        <div className="flex font-spectral text-7xl">
          <div className="text-white">Nakya</div>
          <div className="text-emerald-400 font-semibold">.ai</div>
        </div>
        <div className="text-gray-500 font-spectral w-4/6 mt-7 text-xl">
          Track, analyze, and optimize your research with predictive insights
          and comprehensive reports—streamlining your journey from data to
          discovery.
        </div>
      </div>

      <div className="w-3/6 bg-gray-950 border border-gray-800 rounded-xl font-montserrat">
        <form className="space-y-6 py-6 px-6" onSubmit={handleSubmit}>
          <div className="text-gray-200 text-xl text-center font-bold">
            Login
          </div>
          <input
            type="text"
            required
            className="appearance-none bg-gray-900 relative block w-full px-3 py-2 border border-gray-800 placeholder-gray-500 text-gray-300 rounded-md focus:outline-none focus:ring-gray-300 focus:border-gray-300 focus:z-10 sm:text-sm "
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            required
            className="appearance-none bg-gray-900 relative block w-full px-3 py-2 border border-gray-800 placeholder-gray-500 text-gray-300 rounded-md focus:outline-none focus:ring-gray-300 focus:border-gray-300 focus:z-10 sm:text-sm "
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray bg-emerald-400 hover:bg-emerald-600 focus:outline-none"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
