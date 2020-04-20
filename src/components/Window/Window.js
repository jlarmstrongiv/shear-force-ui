import React from 'react';
import { dashboard } from 'data';
import WebPage from './web-page.svg';
import Close from './close.svg';
import Maximize from './maximize.svg';
import Minimize from './minimize.svg';

const style = {
  background:
    'linear-gradient(90deg, #0E2264 0%, #A9C9EE 100%)',
};

const Window = ({ children }) => {
  return (
    <div className="bg-red-300 flex flex-col">
      <div className="flex" style={style}>
        <img src={WebPage} alt="" className="w-6 h-6 p-1" />
        <span className="text-white flex-grow">
          {dashboard.title}
        </span>
        <img
          src={Minimize}
          alt="Minimize"
          className="w-6 h-6"
        />
        <img
          src={Maximize}
          alt="Maximize"
          className="w-6 h-6"
        />
        <img
          src={Close}
          alt="Close"
          className="w-6 h-6 mx-1"
        />
      </div>
      <main className="flex-grow bg-white">{children}</main>
    </div>
  );
};

export default Window;
