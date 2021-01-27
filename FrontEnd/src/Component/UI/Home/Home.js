import React from "react";
import Feed from "../Feed/Feed";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./Home.css";
const Home = () => {
  return (
    <div className="Home">
      <Header />

      <div className="home_body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
};

export default Home;
