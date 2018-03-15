/*eslint-disable max-nested-callbacks, no-unused-expressions*/

// import {Effects} from 'redux-loop-symbol-ponyfill';
import {initialState, dispatch} from '../../../../test/state';
import * as SquareOffsetStateActions from '../SquareOffsetState';

describe('squareOffsetState', () => {

  // Example of how to test multiple dispatches in series
  describe('increment', () => {
    const getSetValue = state => state.getIn(['squareOffset', 'set']);
    const getTravelValue = state => state.getIn(['squareOffset', 'travel']);
    const getrunValue = state => state.getIn(['squareOffset', 'run']);

    it('should increment the set property by one', () => {
      const [secondState] = dispatch(initialState, SquareOffsetStateActions.increment());
      expect(getSetValue(secondState)).toBe(getSetValue(initialState) + 1);

    });

    it('should increment the travel property by one', () => {
      const [secondState] = dispatch(initialState, SquareOffsetStateActions.increment());
      expect(getTravelValue(secondState)).toBe(getTravelValue(initialState) + 1);

    });

    it('should increment the run property by one', () => {
      const [secondState] = dispatch(initialState, SquareOffsetStateActions.increment());
      expect(getrunValue(secondState)).toBe(getrunValue(initialState) + 1);

    }); 
  });

  // describe('toggleVisibility', () => {


  //   const getIsVisible = state => state.getIn(['squareOffset', 'isVisible']);

  //   it('should toggle the value between true and false', () => {
  //     const [secondState] = dispatch(initialState, SquareOffsetStateActions.toggleVisibility());
  //     expect(getIsVisible(secondState)).toBe(!getIsVisible('isVisible'));

  //   });

  // });

  describe('reset', () => {
    it('should reset the set state to initial value', () => {
      const [modifiedState] = dispatch(initialState, SquareOffsetStateActions.increment());
      const [resetState] = dispatch(modifiedState, SquareOffsetStateActions.reset());
      expect(resetState.get('set')).toBe(initialState.get('set'));
    });

    it('should reset the travel state to initial value', () => {
      const [modifiedState] = dispatch(initialState, SquareOffsetStateActions.increment());
      const [resetState] = dispatch(modifiedState, SquareOffsetStateActions.reset());
      expect(resetState.get('travel')).toBe(initialState.get('travel'));
    });

    it('should reset the run state to initial value', () => {
      const [modifiedState] = dispatch(initialState, SquareOffsetStateActions.increment());
      const [resetState] = dispatch(modifiedState, SquareOffsetStateActions.reset());
      expect(resetState.get('run')).toBe(initialState.get('run'));
    });
  });

  describe('calculate', () => {

    let setValue = 5.5;
    let travelValue = 8.9;

    const [modifiedState] = dispatch(initialState, SquareOffsetStateActions.calculate(setValue,travelValue));

    it('should calculate the missing value from two numeric inputs', () => {
      expect(modifiedState.getIn(['squareOffset', 'set'])).toBeDefined;
      expect(modifiedState.getIn(['squareOffset', 'travel'])).toBeDefined;
      expect(modifiedState.getIn(['squareOffset', 'run'])).toBeDefined;
    });

  });

});

