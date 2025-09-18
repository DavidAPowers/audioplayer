import FastFwd from '../../../components/atoms/FastFwd.vue'
import { mount } from '@vue/test-utils'

test('displays message', () => {
  const wrapper = mount(FastFwd, {
    props: {
      msg: 'Hello world'
    }
  })
  expect(wrapper.get('svg').attributes('fill')).toBe('black')
})