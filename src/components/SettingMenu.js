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
    menuTitle: PropTypes.string.isRequired
  };

  render() {
    return (
      <View>
        <Menu>
        <MenuTrigger text={this.props.menuTitle} />
        <MenuOptions>
            <MenuOption onSelect={() => alert('Save')} text='Save' />
            <MenuOption onSelect={() => alert('Delete')} >
            <Text style={{color: 'red'}}>Delete</Text>
            </MenuOption>
            <MenuOption onSelect={() => alert('Not called')} disabled={true} text='Disabled' />
        </MenuOptions>
        </Menu>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonWrapper: {
    flex: 1,
    position: 'relative'
  }
});

export default SettingMenu;
