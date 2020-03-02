import React from "react";

const TestMenu = () => {
  return (
    <div id="test-menu">
      <div className="test-menu-btn first">
        <span className="test-name">Standard Test</span>
        <span className="test-desc">Top 300 words</span>
      </div>
      <div className="test-menu-btn">
        <span className="test-name">Advanced Test</span>
        <span className="test-desc">Top 1000 words</span>
      </div>
      <div className="test-menu-btn">
        <span className="test-name">Your tests</span>
        <span className="test-desc">See or create your own!</span>
      </div>
      <div className="test-menu-btn">
        <span className="test-name">Exercises</span>
        <span className="test-desc">Practice our custom tests</span>
      </div>
      <div className="test-menu-btn last">
        <span className="test-name">Special Test</span>
        <span className="test-desc">Placeholder for now</span>
      </div>
    </div>
  );
};

export default TestMenu;
