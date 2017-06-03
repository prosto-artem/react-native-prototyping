import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop-symbol-ponyfill';
import {calculateSquareOffset} from '../../services/offsetCalculateService';

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
    payload: calculateSquareOffset()
  };
}

export function reset() {
  return {type: RESET};
}

// Reducer
export default function SquareOffsetStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CALCULATE:
      return state.update('value', value => value + 1);

    case RESET:
      return initialState;

    case RANDOM_REQUEST:
      return loop(
        state.set('loading', true),
        Effects.promise(requestRandomNumber)
      );

    case RANDOM_RESPONSE:
      return state
        .set('loading', false)
        .set('value', action.payload);

    default:
      return state;
  }
}
