import React,{PropTypes,Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from 'react-native-popup-menu';

class SettingMenu extends Component {

  static propTypes = {
    meausurementUnits: PropTypes.string.isRequired
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
          <MenuTrigger style={styles.menuTitle} text={this.state.menuTitle} />
          <MenuOptions>
            <MenuOption onSelect={this.onCmUnitsSelected} text='CM' />
            <MenuOption onSelect={this.onInchUnitsSelected} text='Inch' />
          </MenuOptions>
        </Menu>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: .5,
    flexDirection: 'row'
  },
  menuTitle: {
  }
});

export default SettingMenu;
