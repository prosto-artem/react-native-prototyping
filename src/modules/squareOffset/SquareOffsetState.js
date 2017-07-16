import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop-symbol-ponyfill';
import {calculateSetTravelRun} from '../../services/offsetCalculateService';

// Initial state
const initialState = Map({
  rise: 0,
  length: 0,
  height: 0,
  calcResult: [],
  loading: false
});

// Actions
const CALCULATE = 'SquareOffsetState/CALCULATE';
const RESET = 'SquareOffsetState/RESET';

// Action creators
export function calculate() {
  return {
    type: CALCULATE,
    payload: calculateSetTravelRun()
  };
}

export function reset() {
  return {type: RESET};
}

// Reducer
export default function SquareOffsetStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CALCULATE:
      return loop(
        state.set('loading', true),
        Effects.promise(calculateSetTravelRun)
      );

    case RESET:
      return initialState;

    default:
      return state;
  }
}
