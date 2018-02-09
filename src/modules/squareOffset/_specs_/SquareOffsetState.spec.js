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


  //TODO: Add a test spec for each reducer and action to prove that
  // they function as expected and updated state -
  //toggleVisibility
  //reset
  //calculate
  //increment

  
});
