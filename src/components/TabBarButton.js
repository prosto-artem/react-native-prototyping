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
          backgroundColor: '#FFA500'
        }}
        >
        <Icon style={{color: '#fff'}} name='md-construct'/><Text style={{color: '#fff'}}>{this.props.text}</Text>
      </Button>
    ) : (<Button light large
    onPress={this.props.action}
    style={{flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#2A3390'

    }}
    >
    <Icon style={{color: '#fff'}} name='md-hammer'/><Text style={{color: '#fff'}}>{this.props.text}</Text>
  </Button>);
  }
}
export default TabBarButton;
