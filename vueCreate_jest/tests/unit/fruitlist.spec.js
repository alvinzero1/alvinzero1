//  https://blog.canopas.com/vue-3-component-testing-with-jest-8b80a8a8946b
import { shallowMount } from '@vue/test-utils'
import FruitList from '@/components/fruitList.vue'

describe('FruitList component test', () => {
    it("tests data attributes", () => {
        const wrapper = shallowMount(FruitList)
        expect(wrapper.vm.fruits).toEqual(["apple", "banana", "orange"]);
    })

    test('return total number of fruits', () => {
        const wrapper = shallowMount(FruitList)
        expect(wrapper.vm.numFruits).toBe(3);
    })

    test('displays a list of fruits', () => {
        const wrapper = shallowMount(FruitList)
        const fruits = wrapper.findAll('li')

        expect(fruits.at(0).text()).toBe('apple')
        expect(fruits.at(1).text()).toBe('banana')
        expect(fruits.at(2).text()).toBe('orange')
    })

    test('displays the number of fruits', () => {
        const wrapper = shallowMount(FruitList)
        const numFruits = wrapper.find('p')
        expect(numFruits.text()).toBe('Number of fruits: 3')
    })


})