import CarContext from 'context/CarContext';
import React from 'react';

const Controls = () => {
  const {
    prevCar,
    nextCar,
    push,
    pull,
    stepIndex,
  } = React.useContext(CarContext);
  const [
    pushActualValue,
    setPushActualValue,
  ] = React.useState(270);
  const pushRef = React.useRef();
  const [
    pullActualValue,
    setPullActualValue,
  ] = React.useState(270);
  const pullRef = React.useRef();
  return (
    <div className="mt-24 text-center">
      <button
        onClick={prevCar}
        className="px-8 py-4 mx-2 font-bold bg-white rounded-md shadow-base"
      >
        Previous Car
      </button>
      <button
        onClick={nextCar}
        className="px-8 py-4 mx-2 font-bold bg-white rounded-md shadow-base"
      >
        Next Car
      </button>
      <button
        className={`pl-8 pr-3 py-4 mx-2 font-bold bg-white rounded-md shadow-base ${
          stepIndex !== 1 ? 'bg-yellow-300' : ''
        }`}
      >
        <span
          onClick={() => {
            if (stepIndex === 0) {
              pullRef.current.focus();
            }
            push(pushActualValue);
          }}
        >
          Push
        </span>{' '}
        <input
          type="number"
          min={0}
          max={300}
          step={1}
          ref={pushRef}
          onChange={(event) =>
            setPushActualValue(event.target.value)
          }
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              setPushActualValue(event.target.value);
              if (stepIndex === 0) {
                pullRef.current.focus();
              }
              push(event.target.value);
            }
          }}
          value={pushActualValue}
          className={`${
            stepIndex !== 1 ? 'bg-yellow-300' : ''
          }`}
        />
      </button>
      <button
        className={`pl-8 pr-3 py-4 mx-2 font-bold bg-white rounded-md shadow-base ${
          stepIndex === 1 ? 'bg-yellow-300' : ''
        }`}
      >
        <span
          onClick={() => {
            pull(pullActualValue);
            pushRef.current.focus();
          }}
        >
          Pull
        </span>{' '}
        <input
          type="number"
          min={0}
          max={300}
          step={1}
          ref={pullRef}
          onChange={(event) =>
            setPullActualValue(event.target.value)
          }
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              setPullActualValue(event.target.value);
              pull(event.target.value);
              pushRef.current.focus();
            }
          }}
          value={pullActualValue}
          className={`${
            stepIndex === 1 ? 'bg-yellow-300' : ''
          }`}
        />
      </button>
    </div>
  );
};

export default Controls;
