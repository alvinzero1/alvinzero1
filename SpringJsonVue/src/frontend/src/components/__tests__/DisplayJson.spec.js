import { describe, it, expect } from 'vitest'

import { mount, shallowMount } from '@vue/test-utils'
import DisplayJson from '../DisplayJson.vue'


describe('DisplayJson', () => {
  it('test api url', () => {
    const wrapper = mount(DisplayJson)
    expect(wrapper.vm.API_URL).toBe('/api/messages/json');
  })

  it('test sum', () => {
    const wrapper = mount(DisplayJson)
    const vm = wrapper.vm
    console.log(">> sum(1, 2):: " + vm.sum(1, 2))
    expect(vm.sum(1, 2)).toBe(3);
  })

  it('test something', () => {
    const wrapper = mount(DisplayJson)
    const vm = wrapper.vm
    vm.chgSome()
    console.log(">>>>>" + vm.someString)
    expect(vm.someString).toEqual("someString")
  })

  let store
  it('test button click', async () => {
    const wrapper = shallowMount(DisplayJson,{ store})
    const button = wrapper.find("#testButton")
    expect(button.text()).toBe('get JSON')

    // https://stackoverflow.com/questions/62828904/vue-testing-jest-button-triggerclick-not-working
    //await button.trigger('click')
  })

  // https://vitest.dev/
  it('should work', (ctx) => {
    // prints name of the test
    console.log(">:> " + ctx.meta.name)
  })

})