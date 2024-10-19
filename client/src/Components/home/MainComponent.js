import React from "react";
import Banner from "./Banner.js";
import "./home.css";

const MainComponent = () => {
  return (
    <div>
      <div className="home_section">
        <div className="banner_part">
          <Banner />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
