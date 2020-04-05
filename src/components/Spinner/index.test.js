import React from 'react'

import {shallow} from 'enzyme'

import Spinner from './index'

describe('Spinner Component', () => {
  describe('Basic Rendering', () => {
    let wrapper
    beforeEach(() => {
      wrapper = shallow(<Spinner />)
    })

    it('should match the snapshot', () => {
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})
