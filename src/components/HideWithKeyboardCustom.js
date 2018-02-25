import {Component} from 'react';
import PropTypes from 'prop-types';
import {Keyboard, Platform} from 'react-native';

class HideWithKeyboardCustom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyboardUp: false
    };
  }

  componentWillMount() {
    this._keyboardDidShowListener =
      Keyboard.addListener(
        Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow',
        this.keyboardDidShow.bind(this)
      );
    this._keyboardDidHideListener =
      Keyboard.addListener(
        Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide',
        this.keyboardDidHide.bind(this)
      );
  }

  componentWillUnmount() {
    this._keyboardDidShowListener.remove();
    this._keyboardDidHideListener.remove();
  }

  keyboardDidShow() {
    this.props.onKeyboardDidShow(true);
    this.setState({
      keyboardUp: true
    });
  }

  keyboardDidHide() {
    this.props.onKeyboardDidShow(false);
    this.setState({
      keyboardUp: false
    });
  }

  render() {
    return (null);
  }
}

HideWithKeyboardCustom.propTypes = {
  onKeyboardDidShow: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ])
};
export default HideWithKeyboardCustom;
