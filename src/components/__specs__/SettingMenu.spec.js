/*eslint-disable max-nested-callbacks*/

import React from 'react';
import {shallow} from 'enzyme';
import {hasStyles} from '../../../test/assertions';
import SettingMenu from '../SettingMenu';

const tabs = {
  index: 0,
  routes: [
    {key: 'tab-1', title: 'Tab 1'},
    {key: 'tab-2', title: 'Tab 2'},
    {key: 'tab-3', title: 'Tab 3'}
  ]
};

describe('<SettingMenu />', () => {

  it('should render a <Menu> with a title', () => {
    const wrapper = shallow(
      <SettingMenu menuTitle='Measurement Units' />
    );

    expect(wrapper.props().menuTitle).to.equal('Measurement Units');        
  });

});
