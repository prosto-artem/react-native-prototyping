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
const CALCULATE = 'SquareOffsetState/CALCULATE';
const RESET = 'SquareOffsetState/RESET';

// Action creators
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
    case CALCULATE:
      Object.assign({}, state, {
        calcResult : calculateSetTravelRun(action.payload),
        set: calcResult[0],
        travel: calcResult[1],
        run: calcResult[2]
      });
      break;

    case RESET:
      return initialState;

    default:
      return state;
  }
}
