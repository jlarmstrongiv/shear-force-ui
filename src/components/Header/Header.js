import React from 'react';
import { dashboard } from 'data';
import Moment from 'react-moment';

const Header = () => {
  return (
    <header className="flex p-1">
      <div className="w-7/12 flex flex-grow-0 justify-around content-center">
        <div className="flex flex-col flex-grow text-center w-2/4">
          <div className="bg-red-500 p-1 m-1 text-xs">
            {dashboard.id2}
          </div>
          <div className="bg-red-500 p-1 m-1 text-xs">
            {dashboard.id}
          </div>
        </div>
        <div className="bg-red-500 flex-grow text-center p-1 m-1 w-1/4 flex justify-center flex-col">
          {dashboard.station}
        </div>
        <div className="text-xs bg-red-500 flex-grow text-center p-1 m-1 w-1/4 flex justify-center flex-col">
          <Moment format="MM/DD" interval={30000} />
          <Moment format="HH:MM" interval={30000} />
        </div>
      </div>
      <div className="w-5/12 flex justify-around flex-grow-0">
        <div className="bg-gray-400 flex-grow text-center p-1 m-1 w-1/3 flex justify-center flex-col">
          00:20
        </div>
        <div className="bg-gray-400 flex-grow text-center p-1 m-1 w-2/3 flex justify-center flex-col">
          <div className="flex justify-center">
            <div className="rounded-full border-black border-2 border w-6">
              1
            </div>
            <div className="rounded-full border-black border-2 border w-6">
              2
            </div>
            <div className="rounded-full border-black border-2 border w-6">
              3
            </div>
            {/* <div className="rounded-full border-black border-2 border w-6">
              4
            </div>
            <div className="rounded-full border-black border-2 border w-6">
              5
            </div>
            <div className="rounded-full border-black border-2 border w-6">
              6
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
