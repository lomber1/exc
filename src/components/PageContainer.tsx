import React from 'react';

const PageContainer: React.FC = ({ children }) => (
  <div className="px-2 sm:px-16 lg:px-64 pt-4">
    {children}
  </div>
);

export default PageContainer;
