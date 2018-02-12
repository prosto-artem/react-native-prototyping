import React, {PropTypes, Component} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {Button,Badge,Icon} from 'native-base';


class TabBarButton extends Component {
  static displayName = 'TabBarButton';

  static propTypes = {
    text: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired
  };

  render() {
    return (
      <Button light large
        onPress={this.props.action}
        style={{flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
          }}
        >
        <Icon name='close' color='#900' /><Text>{this.props.text}</Text>
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selected: {
    backgroundColor: 'blue'
  }
});

export default TabBarButton;
