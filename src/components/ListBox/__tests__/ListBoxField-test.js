/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { mount } from 'enzyme';
import ListBox from '../';

describe('ListBoxField', () => {
  it('should render', () => {
    const wrapper = mount(
      <ListBox.Field>
        <ListBox.Selection clearSelection={jest.fn()} />
      </ListBox.Field>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should be focusable', () => {
    const wrapper = mount(
      <ListBox.Field>
        <ListBox.Selection clearSelection={jest.fn()} />
      </ListBox.Field>
    );
    expect(wrapper.children().prop('tabIndex')).toBe('0');
  });
});
