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
    return this.props.isSelected ? (
      <Button light large
        onPress={this.props.action}
        style={{flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: '#BCBDC1'
        }}
        >
        <Icon style={{color: '#fff'}} name='close'/><Text style={{color: '#fff'}}>{this.props.text}</Text>
      </Button>
    ) : (<Button light large
    onPress={this.props.action}
    style={{flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#2A3390'

    }}
    >
    <Icon style={{color: '#fff'}} name='close'/><Text style={{color: '#fff'}}>{this.props.text}</Text>
  </Button>);
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'

  }
});

export default TabBarButton;
