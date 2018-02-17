import React, {PropTypes, Component} from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';
import {Button,Icon} from 'native-base';


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
          justifyContent: 'space-around',
          alignItems: 'center'
        }}
        >
        <Icon name='close'/><Text>{this.props.text}</Text>
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
