import React from "react";
import Feed from "../Feed/Feed";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Widgets from "../Widgets/Widgets";
import "./Home.css";
const Home = () => {
  return (
    <div className="Home">
      <Header />
      <div className="home_body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
};

export default Home;
