import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import HomeCard from "./HomeCard";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-neutral-950 py-6 flex-column space-y-12 px-12 sm:py-12">
        <div className="flex-column">
          <div className="font-spectral text-4xl flex">
            <div className="text-gray-700 font-spectral">Welcome,</div>
            <div className="text-gray-400 ml-2">Akshit</div>
          </div>
          <div className="font-montserrat text-gray-400 mt-1 ml-1">
            Click on any card to get started!
          </div>
        </div>
        <div className="flex space-x-12 h-[calc(100vh/4)]">
          <HomeCard
            backgroundColor="bg-emerald-950"
            textColor="text-emerald-400"
            borderColor="border-emerald-900"
            icon={<ScienceOutlinedIcon fontSize="large" />}
            title="Create Experiment"
            content="Kickstart your research—design and initiate your next experiment
                with ease."
          />
          <HomeCard
            backgroundColor="bg-amber-950"
            textColor="text-amber-400"
            borderColor="border-amber-600"
            icon={<AssessmentOutlinedIcon fontSize="large" />}
            title="Track Experiment"
            content="Stay on top of your work—monitor and manage your experiments in real-time."
          />
          <HomeCard
            backgroundColor="bg-indigo-950"
            textColor="text-indigo-400"
            borderColor="border-indigo-600"
            icon={<InsightsOutlinedIcon fontSize="large" />}
            title="Data Visualization"
            content="Turn data into insights—visualize your findings with clarity and depth."
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
