import React from 'react';
import CarContext from 'context/CarContext';

const Metadata = () => {
  const { car } = React.useContext(CarContext);

  return (
    <div>
      <div className="flex px-1">
        <div className="flex-grow bg-blue-700 text-sm text-white m-1 text-center w-1/3">
          Vin #
        </div>
        <div className="flex-grow bg-blue-700 text-sm text-white m-1 text-center w-1/3">
          Model Type
        </div>
        <div className="flex-grow bg-blue-700 text-sm text-white m-1 text-center w-1/3">
          Build #
        </div>
      </div>
      <div className="flex px-1">
        <div className="flex-grow m-1 text-3xl text-center w-1/3">
          {car.vin}
        </div>
        <div className="flex-grow m-1 text-3xl text-center w-1/3">
          {car.model}
        </div>
        <div className="flex-grow m-1 text-3xl text-center w-1/3">
          {car.build}
        </div>
      </div>
    </div>
  );
};

export default Metadata;
