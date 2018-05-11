import React from 'react'
import { shallow, mount } from 'enzyme'
import 'jest-styled-components'

import Title from '../Title'

describe('<Title />', () => {
    const titleText = 'title text'

    describe('enzyme mount', () => {
        it('renders text', () => {
            const wrapper = mount(<Title>{titleText}</Title>)
            expect(wrapper.text()).toEqual(titleText)
        })

        it('renders the text and emoji', () => {
            const wrapper = mount(<Title emoji="👍">{titleText}</Title>)
            expect(wrapper.text()).toEqual(`${titleText} 👍`)
        })
    })

    describe('enzyme shallow', () => {
        it('calls onClick when clicked', () => {
            const onClickFn = jest.fn()
            const component = <Title onClick={onClickFn}>{titleText}</Title>
            const wrapper = shallow(component)
            wrapper.simulate('click')
            expect(onClickFn).toHaveBeenCalled()
        })
    })

    describe('jest snapshot', () => {
        it('renders shallow component', () => {
            const wrapper = shallow(<Title emoji="👍">{titleText}</Title>)
            expect(wrapper).toMatchSnapshot()
        })
        it('renders mounted component', () => {
            const wrapper = mount(<Title emoji="👍">{titleText}</Title>)
            expect(wrapper).toMatchSnapshot()
        })
        it('checks style rules', () => {
            const wrapper = mount(<Title emoji="👍">{titleText}</Title>)
            expect(wrapper).toHaveStyleRule('font-size', '84px')
        })
    })
})
