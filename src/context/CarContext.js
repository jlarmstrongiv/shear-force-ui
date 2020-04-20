import React from 'react';
import { cars } from 'data';

// context
const defaultValue = {
  car: cars[0],
  stepIndex: 0,
  attachmentIndex: 0,
  nextCar: () => {},
  prevCar: () => {},
  push: () => {},
  pull: () => {},
};

const CarContext = React.createContext(defaultValue);
export default CarContext;

// reducer
const initialState = {
  car: cars[0],
  carsIndex: 0,
  stepIndex: 0,
  attachmentIndex: 0,
};
const actions = {
  NEXT_CAR: 'NEXT_CAR',
  PREV_CAR: 'PREV_CAR',
  PUSH: 'PUSH',
  PULL: 'PULL',
};
const nextCar = (state, action) => {
  if (state.carsIndex === cars.length - 1) {
    return {
      ...state,
      car: cars[0],
      carsIndex: 0,
      attachmentIndex: 0,
      stepIndex: 0,
    };
  }
  return {
    ...state,
    car: cars[state.carsIndex + 1],
    carsIndex: state.carsIndex + 1,
    attachmentIndex: 0,
    stepIndex: 0,
  };
};
const prevCar = (state, action) => {
  if (state.carsIndex === 0) {
    return {
      ...state,
      car: cars[cars.length - 1],
      carsIndex: cars.length - 1,
      attachmentIndex: 0,
      stepIndex: 0,
    };
  }
  return {
    ...state,
    car: cars[state.carsIndex - 1],
    carsIndex: state.carsIndex - 1,
    attachmentIndex: 0,
    stepIndex: 0,
  };
};
const push = (state, action) => {
  // check for pull
  if (state.stepIndex === 1) {
    console.log('PULL DUMMY');
    return state;
  }

  const actualValue = action.payload.actualValue;
  // same as next car
  if (
    state.attachmentIndex ===
    state.car.attachments.length - 1
  ) {
    if (state.stepIndex === 2) {
      if (state.carsIndex === cars.length - 1) {
        return {
          ...state,
          car: cars[0],
          carsIndex: 0,
          attachmentIndex: 0,
          stepIndex: 0,
        };
      }
      return {
        ...state,
        car: cars[state.carsIndex + 1],
        carsIndex: state.carsIndex + 1,
        attachmentIndex: 0,
        stepIndex: 0,
      };
    }
  }

  if (state.stepIndex === 0) {
    return {
      ...state,
      car: {
        ...state.car,
        attachments: state.car.attachments.map(
          (attachment, index) => {
            if (index === state.attachmentIndex) {
              attachment = { ...attachment, actualValue };
            }
            return attachment;
          },
        ),
      },
      stepIndex: state.stepIndex + 1,
    };
  }

  if (state.stepIndex === 2) {
    return {
      ...state,
      car: {
        ...state.car,
        attachments: state.car.attachments.map(
          (attachment, index) => {
            if (index === state.attachmentIndex) {
              // override previous push
              if (actualValue > attachment.actualValue) {
                attachment = { ...attachment, actualValue };
              }
            }
            return attachment;
          },
        ),
      },
      attachmentIndex: state.attachmentIndex + 1,
      stepIndex: 0,
    };
  }
  // increment step
  return state;
};
const pull = (state, action) => {
  if (state.stepIndex === 0 || state.stepIndex === 2) {
    console.log('PUSH DUMMY');
    return state;
  }
  return {
    ...state,
    stepIndex: state.stepIndex + 1,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.NEXT_CAR:
      return nextCar(state, action);
    case actions.PREV_CAR:
      return prevCar(state, action);
    case actions.PUSH:
      return push(state, action);
    case actions.PULL:
      return pull(state, action);
    default:
      return state;
  }
};

export const CarProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    reducer,
    initialState,
  );
  const value = {
    nextCar: () => {
      dispatch({ type: actions.NEXT_CAR });
    },
    prevCar: () => {
      dispatch({ type: actions.PREV_CAR });
    },
    push: (actualValue) => {
      dispatch({
        type: actions.PUSH,
        payload: { actualValue },
      });
    },
    pull: (actualValue) => {
      dispatch({
        type: actions.PULL,
        payload: { actualValue },
      });
    },
    car: state.car,
    stepIndex: state.stepIndex,
  };

  return (
    <CarContext.Provider value={value}>
      {children}
    </CarContext.Provider>
  );
};
