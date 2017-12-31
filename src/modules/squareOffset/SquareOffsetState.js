import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop-symbol-ponyfill';
import {calculateSetTravelRun} from '../../services/offsetCalculateService';

// Initial state
const initialState = Map({
  set: 0,
  travel: 0,
  run: 0,
  calcResult: [],
  loading: false
});

// Actions
const INCREMENT = 'SquareOffsetState/INCREMENT';
const CALCULATE = 'SquareOffsetState/CALCULATE';
const RESET = 'SquareOffsetState/RESET';

// Action creators
export function increment() {
  return {type: INCREMENT};
}

export function calculate(set,travel,run) {
  return {
    type: CALCULATE,
    payload: set,travel,run
  };
}

export function reset() {
  return {type: RESET};
}

// Reducer
export default function SquareOffsetStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
      return state.update(state, {
        set: {$set: state.set + 1},
        travel: {$travel: state.travel + 1},
        run: {$run: state.run + 1}   
      }); 
    case CALCULATE:
      Object.assign({}, state, {
        calcResult: calculateSetTravelRun(action.payload),
        set: action.payload[0],
        travel: action.payload[1],
        run: action.payload[2]
      });
      break;

    case RESET:
      return initialState;

    default:
      return state;
  }
}
