import React from "react";
import "./pages.css";
import SearchMain from "../components/SearchMain";

const Home = () => {
  return (
    <>
      <div className="section" id="sectionSearch">
        <div className="sectionTitle">Search properties</div>
        <SearchMain />
      </div>
      <div className="section">Explore</div>
      <div className="sections">Property news</div>
      <div className="section">Home loans</div>
    </>
  );
};

export default Home;
