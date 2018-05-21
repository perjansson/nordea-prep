import React from 'react'
import { shallow, mount } from 'enzyme'
import 'jest-styled-components'
import { MemoryRouter } from 'react-router-dom'

import Title from '@nordea-prep/components/dist/Title'
import Rotate from '@nordea-prep/components/dist/Rotate'

import StartPage from '../StartPage'

describe('<StartPage />', () => {
    describe('unit test', () => {
        it('should not rotate logo on initial state', () => {
            const wrapper = shallow(<StartPage />)
            expect(wrapper.find(Rotate).exists()).toBeFalsy()
        })

        it('should rotate logo when state isRotating true', () => {
            const wrapper = shallow(<StartPage />)
            wrapper.setState({ isRotating: true })
            expect(wrapper.find(Rotate).exists()).toBeTruthy()
        })
    })
    describe('integration test', () => {
        it('should not rotate logo on initial state', () => {
            const wrapper = mount(
                <MemoryRouter>
                    <StartPage />
                </MemoryRouter>,
            )
            expect(wrapper.find(Rotate).exists()).toBeFalsy()
        })

        it('should rotate logo when Title is clicked', () => {
            const wrapper = mount(
                <MemoryRouter>
                    <StartPage />
                </MemoryRouter>,
            )
            wrapper.find(Title).simulate('click')
            expect(wrapper.find(Rotate).exists()).toBeTruthy()
        })

        it('displays a link to the customers list page', () => {
            const wrapper = mount(
                <MemoryRouter>
                    <StartPage />
                </MemoryRouter>,
            )
            const link = wrapper.find('Link').find({ to: '/customers' })
            expect(link.text()).toContain('customers list page')
        })
    })
})
