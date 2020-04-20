import React from 'react';
import CarContext from 'context/CarContext';

const Footer = () => {
  const { car } = React.useContext(CarContext);
  return (
    <footer className="flex p-1">
      <div className="w-7/12 flex flex-grow-0 justify-around">
        <div className="bg-orange-400 flex-grow text-center p-1 m-1 w-2/4">
          {car.vin}
        </div>
        <div className="bg-orange-400 flex-grow text-center p-1 m-1 w-1/4">
          {car.build}
        </div>
        <div className="bg-orange-400 flex-grow text-center p-1 m-1 w-1/4">
          {car.model}
        </div>
      </div>
      <div className="w-5/12 flex justify-around flex-grow-0">
        <div className="bg-gray-400 flex-grow text-center p-1 m-1 w-1/3">
          {car.size}
        </div>
        <div className="bg-gray-400 flex-grow text-center p-1 m-1 w-2/3">
          {car.color}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
