import {Map} from 'immutable';
import {calculateSetTravelRun} from '../../services/offsetCalculateService';

// Initial state
const initialState = Map({
  set: 0,
  travel: 0,
  run: 0,
  loading: false,
  isVisible: false
});

// Actions
const INCREMENT = 'SquareOffsetState/INCREMENT';
const CALCULATE = 'SquareOffsetState/CALCULATE';
const RESET = 'SquareOffsetState/RESET';
const SET_VISIBILITY = 'SquareOffsetState/SET_VISIBILITY';

// Action creators
export function increment() {
  return {type: INCREMENT};
}

export function calculate(set,travel,run) {
  return {
    type: CALCULATE,
    payload: calculateSetTravelRun(set,travel,run)
  };
}

export function reset() {
  return {type: RESET};
}

export function setVisibility() {
  return {type: SET_VISIBILITY};
}

// Reducer
export default function SquareOffsetStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case RESET:
      return initialState;

    case SET_VISIBILITY:
      return Object.assign({}, state, {
        isVisible: !state.isVisible
      });

    case INCREMENT:
      return state
      .set('set', set => set + 1)
      .set('travel', travel => travel + 1)
      .set('run', run => run + 1);

    case CALCULATE:
      return Object.assign({}, state, {
        set: action.payload.set,
        travel: action.payload.travel,
        run: action.payload.run
      });

    default:
      return state;
  }
}
