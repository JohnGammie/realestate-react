import React from "react";
import "./pages.css";
import SearchMain from "../components/SearchMain";
import ExploreSection from "../ExploreSection/ExploreSection";
import PropertyNewsSection from "../components/PropertyNewsSection/PropertyNewsSection";
import HomeLoansSection from "../components/HomeLoansSection";
import TabbedList from "../components/TabbedList";

const Home = () => {
  return (
    <div className="sections">
      <div className="section" id="sectionSearch">
        <div className="sectionTitle">Search properties</div>
        <SearchMain />
      </div>
      <div className="section">
        <div className="sectionTitle">Explore</div>
        <ExploreSection />
      </div>
      <div className="section">
        <div className="sectionTitle">Latest Property news</div>
        <PropertyNewsSection />
      </div>
      <div className="section">
        <div className="sectionTitle">Home loans</div>
        <HomeLoansSection />
      </div>
      <div className="section">
        <TabbedList />
      </div>
    </div>
  );
};

export default Home;
