import React,{PropTypes,Component} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from 'react-native-popup-menu';

class SettingMenu extends Component {

  static propTypes = {
    //meausurementUnits: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      menuTitle: 'Units of Measurement: CM'
    };
  }

  onInchUnitsSelected = () => {
    this.setState({menuTitle: 'Units of Measurement: Inch'});
    //TODO: call store action
  }

  onCmUnitsSelected = () => {
    this.setState({menuTitle: 'Units of Measurement: CM'});
    //TODO: call store action
  }

  render() {
    return (
      <View style={styles.container}>
        <Menu>
          <MenuTrigger style={styles.menuTitle}>
            <Text style={styles.menuTitle}>{this.state.menuTitle}</Text>
          </MenuTrigger>
          <MenuOptions>
            <MenuOption onSelect={this.onCmUnitsSelected} text='Centimetres (CM)' />
            <MenuOption onSelect={this.onInchUnitsSelected} text='Inches (")' />
          </MenuOptions>
        </Menu>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    marginLeft: 5,
    marginTop: 4

  },
  menuTitle: {
    color: '#fff',
    textAlign: 'center'
  }

});

export default SettingMenu;
