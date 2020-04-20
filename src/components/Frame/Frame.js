import React from 'react';
import { dashboard } from 'data';

const Frame = ({ children }) => {
  return (
    <div className="relative bg-gray-800 p-7 max-w-7xl mx-auto">
      {children}
      <small className="absolute px-2 text-xs left bottom-1 bg-gray-50">
        {dashboard.id}
      </small>
      <small className="absolute px-2 text-xs left-1/2 bottom-1 bg-gray-50">
        {dashboard.ipAddress}
      </small>
    </div>
  );
};

export default Frame;
