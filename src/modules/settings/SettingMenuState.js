import {Map} from 'immutable';

// Actions
const UPDATE_UNITS = 'SettingMenuState/UPDATE_UNITS';
const RESET = 'SettingMenuState/RESET';

// Action creators
export function updateUnits() {
  return {type: UPDATE_UNITS};
}

export function reset() {
  return {type: RESET};
}

// Initial state
const initialState = Map({
  isUnitInch: false,
  isUnitCm: true
});

// Reducer
export default function SettingMenuStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case RESET:
      return initialState;

    case UPDATE_UNITS:
      return state
          .update('isUnitInch', isUnitInch => action.payload.isUnitInch)
          .update('isUnitCm', isUnitCm => action.payload.isUnitCm)

    default:
      return state;
  }
}
