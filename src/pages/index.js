import React from "react";
import SearchMain from "../components/SearchMain";
import ExploreSection from "../ExploreSection/ExploreSection";
import PropertyNewsSection from "../components/PropertyNewsSection/PropertyNewsSection";
import HomeLoansSection from "../components/HomeLoansSection";
import TabbedList from "../components/TabbedList";
import Footer from "../components/Footer";

import "./pages.css";

const Index = (props) => {
  return (
    <>
      <div className="sections">
        <div className="section" id="sectionSearch">
          <div className="sectionTitle">Search properties</div>
          <SearchMain tab={props.searchTab} />
        </div>
        <div className="section">
          <div className="sectionTitle">Explore</div>
          <ExploreSection tab={props.exploreTab} />
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
      <Footer />
    </>
  );
};

export default Index;
