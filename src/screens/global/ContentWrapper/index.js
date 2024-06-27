import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import TailwindSidebar from "../TailwindSidebar";

const ContentWrapper = ({ children }) => {
  return (
    <div>
      <div className="px-8 py-6">{children}</div>
    </div>
  );
};

export default ContentWrapper;
