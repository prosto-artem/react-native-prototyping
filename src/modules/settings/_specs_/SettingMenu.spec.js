/*eslint-disable max-nested-callbacks*/

import React from 'react';
import {shallow} from 'enzyme';
import {hasStyles} from '../../../../test/assertions';
import SettingMenu from '../SettingMenu';

describe('<SettingMenu />', () => {

  it('should render a <Menu> with a menu title', () => {
    const wrapper = shallow(
      <SettingMenu/>
    );

    expect(wrapper.state().menuTitle).to.equal('Measurement Units');        
  });

  // it('should update menu title when option selected', () => {
  //   const wrapper = shallow(
  //     <SettingMenu menuTitle='Measurement Units' />
  //   );

  //   // expect(wrapper.props().menuTitle).to.equal('Measurement Units');        
  // });

});
