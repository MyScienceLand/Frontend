import React from "react";
import "./FullScreenLoading.scss";

const FullScreenLoading = () => {
  return (
    <div className="loading-overlay">
      <div className="spinner"></div>
      <div className="loading-text">LOADING</div>
    </div>
  );
};

export default FullScreenLoading;
