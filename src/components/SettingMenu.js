import React, {Component} from 'react';
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

render() {
    return (
      <View>
        <Menu>
        <MenuTrigger text='Select action' />
        <MenuOptions>
            <MenuOption onSelect={() => alert(`Save`)} text='Save' />
            <MenuOption onSelect={() => alert(`Delete`)} >
            <Text style={{color: 'red'}}>Delete</Text>
            </MenuOption>
            <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
        </MenuOptions>
        </Menu>
    </View>
    );
}

const styles = StyleSheet.create({
});
export default SettingMenu;
