import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as SquareOffsetStateActions from '../settings/SettingMenuState';
import SettingMenu from './SettingMenu';

export default connect(
  state => ({
    isUnitInch: state.getIn(['settings', 'isUnitInch']),
    isUnitCm: state.getIn(['settings', 'isUnitCm'])
  }),
   dispatch => {
     return {
       squareOffsetStateActions: bindActionCreators(SquareOffsetStateActions, dispatch)
     };
   }
)(SettingMenu);
