import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as NavigationStateActions from '../navigation/NavigationState';
import * as SquareOffsetStateActions from '../squareOffset/SquareOffsetState';
import SquareOffsetView from './SquareOffsetView';

export default connect(
  state => ({
    set: state.getIn(['squareOffset', 'set']),
    travel: state.getIn(['squareOffset', 'travel']),
    run: state.getIn(['squareOffset', 'run']),
    loading: state.getIn(['squareOffset', 'loading']),
    isVisible: state.getIn(['squareOffset', 'isVisible']),
    isCalcEnabled: state.getIn(['squareOffset', 'isCalcEnabled'])
  }),
   dispatch => {
     return {
       navigationStateActions: bindActionCreators(NavigationStateActions, dispatch),
       squareOffsetStateActions: bindActionCreators(SquareOffsetStateActions, dispatch)
     };
   }
)(SquareOffsetView);
