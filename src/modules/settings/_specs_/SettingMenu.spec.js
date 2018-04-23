/*eslint-disable max-nested-callbacks*/

import React from 'react';
import {shallow} from 'enzyme';
import {hasStyles} from '../../../../test/assertions';
import SettingMenu from '../SettingMenu';

import {
  Text
} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from 'react-native-popup-menu';

import {render, normalizeStyle, nthChild} from './helpers';
import {createSpy, objectContaining} from 'jasmine';




describe('<SettingMenu />', () => {

  const makeMockContext = ({optionsCustomStyles, onSelect, closeMenu} = {}) => ({
    menuActions: {
      _getOpenedMenu: () => ({
        optionsCustomStyles: optionsCustomStyles || {},
        instance: {props: {onSelect: onSelect}}
      }),
      closeMenu: closeMenu || createSpy()
    }
  });

  it('should render a <Menu> with a menu title', () => {
    const wrapper = shallow(
      <SettingMenu/>
    );

    expect(wrapper.find(Menu).exists()).toEqual(true);
    expect(wrapper.find(MenuTrigger).exists()).toEqual(true);
    expect(wrapper.find(Text).render().text()).toEqual('Units of Measurement: CM');
  });

  // it('should update menu title when option selected', () => {
  //   const spy = createSpy();
  //   const { renderer } = render(
  //     <MenuOption onSelect={spy} value='random title value' />,
  //     makeMockContext()
  //   );
  //   const touchable = renderer.getRenderOutput();
  //   touchable.props.onPress();
  //   expect(spy).toHaveBeenCalledWith('hello');
  //   expect(spy.calls.count()).toEqual(1);

  //   expect(wrapper.find(Text).render().text()).not.toEqual('Units of Measurement: CM');

  // });

});
