import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TypeMe from '../TypeMe.vue'



describe('test TypeMe', () => {
    it('should render', () => {
        const wrapper = mount(TypeMe)
        // has p
        expect(wrapper.find('h1').exists()).toBeTruthy()
        // has input
        expect(wrapper.find('input[type="text"]').exists()).toBeTruthy()
        // has button
        expect(wrapper.find('button').exists()).toBeTruthy()
    })

    it('should change message', async () => {
        const wrapper = mount(TypeMe)
        await wrapper.find('input[type="text"]').setValue('LearnVue')
        await wrapper.find('button').trigger('click')
        console.log(">:>:> " + wrapper.text())
        expect(wrapper.find('h1').text()).toEqual('LearnVue')
    })
})
