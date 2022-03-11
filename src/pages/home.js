import React from "react";
import "./pages.css";
import SearchMain from "../components/SearchMain";
import ExploreSection from "../ExploreSection/ExploreSection";

const Home = () => {
  return (
    <>
      <div className="section" id="sectionSearch">
        <div className="sectionTitle">Search properties</div>
        <SearchMain />
      </div>
      <div className="section">
        <div className="sectionTitle">Explore</div>
        <ExploreSection />
      </div>
      <div className="sections">
        <div className="sectionTitle">Property news</div>
      </div>
      <div className="section">
        <div className="sectionTitle">Home loans</div>
      </div>
    </>
  );
};

export default Home;
