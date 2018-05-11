import React from 'react'
import { mount } from 'enzyme'

import Title from '../Title'

describe('<Title />', () => {
    it('renders text', () => {
        const titleText = 'title text'
        const wrapper = mount(<Title>{titleText}</Title>)
        expect(wrapper.text()).toEqual(titleText)
    })
    it('renders the text and emoji', () => {
        const titleText = 'title text'
        const wrapper = mount(<Title emoji="👍">{titleText}</Title>)
        expect(wrapper.text()).toEqual(`${titleText} 👍`)
    })
})
