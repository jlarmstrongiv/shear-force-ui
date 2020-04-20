import React from 'react';
import CarContext from 'context/CarContext';

const lightblue = {
  backgroundColor: '#4094F6',
};

const Attachment = () => {
  const { car, stepIndex } = React.useContext(CarContext);

  return (
    <div className="px-1">
      <div className="text-center bg-blue-700 text-white mx-1 text-xl">
        Attachment
      </div>
      <div className="flex mx-1">
        <div
          className={`text-6xl w-1/3 pt-4 pb-6 text-center ${
            stepIndex === 0 ? 'bg-yellow-300' : ''
          }`}
        >
          Push
        </div>
        <div
          className={`text-6xl w-1/3 pt-4 pb-6 text-center ${
            stepIndex === 1 ? 'bg-yellow-300' : ''
          }`}
        >
          Pull
        </div>
        <div
          className={`text-6xl w-1/3 pt-4 pb-6 text-center ${
            stepIndex === 2 ? 'bg-yellow-300' : ''
          }`}
        >
          Push
        </div>
      </div>
      <div
        className="flex text-white mx-1 text-center"
        style={lightblue}
      >
        <div className="w-1/3">Name</div>
        <div className="w-1/3">Desired value</div>
        <div className="w-1/3">Actual value</div>
      </div>
      <div className="mx-1">
        {car.attachments.map((attachment) => (
          <div
            key={attachment.name}
            className="flex border-black border first:border-t-2 last:border-b-2 border-r-2 border-l-2 text-center text-2xl"
          >
            <div
              className={`w-1/3 border-black border-r-2 ${
                attachment.actualValue
                  ? attachment.actualValue >=
                    attachment.desiredValue
                    ? 'bg-green-500'
                    : 'bg-red-500'
                  : ''
              }`}
            >
              {attachment.name}
            </div>
            <div
              className={`w-1/3 border-black border-r-2 ${
                attachment.actualValue
                  ? attachment.actualValue >=
                    attachment.desiredValue
                    ? 'bg-green-500'
                    : 'bg-red-500'
                  : ''
              }`}
            >
              {attachment.desiredValue}N
            </div>
            <div
              className={`w-1/3 ${
                attachment.actualValue
                  ? attachment.actualValue >=
                    attachment.desiredValue
                    ? 'bg-green-500'
                    : 'bg-red-500'
                  : ''
              }`}
            >
              {attachment.actualValue
                ? `${attachment.actualValue}N`
                : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attachment;
