/*eslint-disable max-nested-callbacks, no-unused-expressions*/

import {Effects} from 'redux-loop-symbol-ponyfill';
import {initialState, dispatch} from '../../../../test/state';
import * as SquareOffsetStateActions from '../SquareOffsetState';

describe('SquareOffsetState', () => {



  describe('reset', () => {
    it('should reset state to initial values', () => {
      // create an incremented state to test against
      const [modifiedState] = dispatch(initialState, SquareOffsetStateActions.increment());
      expect(modifiedState.get('set')).not.toBe(initialState.get('set'));
      expect(modifiedState.get('travel')).not.toBe(initialState.get('travel'));
      expect(modifiedState.get('run')).not.toBe(initialState.get('run'));
      

      // reset to original and verify it === initial state
      const [resetState] = dispatch(modifiedState, SquareOffsetStateActions.reset());
      expect(resetState.get('set')).toBe(initialState.get('set'));
      expect(resetState.get('travel')).toBe(initialState.get('travel'));
      expect(resetState.get('run')).toBe(initialState.get('run'));
      
    });
  });

});

describe('SquareOffsetState', () => {

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

  describe('toggoleVisibility', () => {
    const getIsVisible = state => state.getIn(['squareOffset', 'isVisible']);

    it('should increment the toggle value property by one', () => {
      const [secondState] = dispatch(initialState, SquareOffsetStateActions.increment());
      expect(getIsVisible(secondState)).toBe(!getIsVisible('isVisible'));

    });

  });

  describe('reset', () => {
    it('should reset the set state to initial value', () => {
      const [resetState] = dispatch(modifiedState, SquareOffsetStateActions.reset());
      expect(resetState.get('set')).toBe(initialState.get('set'));
    });

    it('should reset the travel state to initial value', () => {
      const [resetState] = dispatch(modifiedState, SquareOffsetStateActions.reset());
      expect(resetState.get('travel')).toBe(initialState.get('travel'));
    });

    it('should reset the run state to initial value', () => {
      const [resetState] = dispatch(modifiedState, SquareOffsetStateActions.reset());
      expect(resetState.get('run')).toBe(initialState.get('run'));
    });
  });

  // Example of how to test side effects returned from reducers
  describe('calculator', () => {

    const [nextState, effects] = dispatch(initialState, SquareOffsetStateActions.calculate());

    it('should update loading bit', () => {
      expect(nextState.getIn(['squareOffset', 'set'])).toBe(true);
      expect(nextState.getIn(['squareOffset', 'travel'])).toBe(true);
      expect(nextState.getIn(['squareOffset', 'run'])).toBe(true);
    });

    it('should Calculator effect', () => {
      expect(effects).toEqual(
        Effects.promise(SquareOffsetStateActions)
      );
    });
  });

});

