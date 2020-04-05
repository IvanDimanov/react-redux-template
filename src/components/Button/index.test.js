import React from 'react'

import {shallow} from 'enzyme'

import Button from './index'

describe('Button', () => {
  describe('Default view', () => {
    let wrapper
    beforeEach(() => {
      wrapper = shallow(<Button />)
    })

    it('should match the snapshot', () => {
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})
