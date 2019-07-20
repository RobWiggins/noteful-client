import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Note from './Note'

describe(`Note component`, () => {
  const props = {
    id: 3,
    name: 'test-class-name',
    modified: `2019-01-03T00:00:00.000Z`,
  }

  it('renders a .Note by default', () => {
    const wrapper = shallow(<Note />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the Note given props', () => {
    const wrapper = shallow(<Note {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
