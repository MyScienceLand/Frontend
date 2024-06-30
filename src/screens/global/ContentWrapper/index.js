import React from 'react';

const ContentWrapper = ({ children }) => {
  return (
    <div>
      <div className="px-8 py-6">{children}</div>
    </div>
  );
};

export default ContentWrapper;
