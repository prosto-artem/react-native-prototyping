import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as NavigationStateActions from '../navigation/NavigationState';
import * as squareOffsetStateActions from '../squareOffset/SquareOffsetState';
import SquareOffsetView from './SquareOffsetView';

export default connect(
  state => ({
    rise: state.getIn(['squareOffset', 'rise']),
    length: state.getIn(['squareOffset', 'length']),
    height: state.getIn(['squareOffset', 'height']),
    calcResult: state.getIn(['squareOffset', 'calcResult']),
    loading: state.getIn(['squareOffset', 'loading'])
  }),
   dispatch => {
     return {
       navigationStateActions: bindActionCreators(NavigationStateActions, dispatch),
       squareOffsetStateActions: bindActionCreators(squareOffsetStateActions, dispatch)
     };
   }
)(SquareOffsetView);
