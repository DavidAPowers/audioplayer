import Pause from '../../../components/atoms/Pause.vue'
import { mount } from '@vue/test-utils'
test('displays message', () => {
  const wrapper = mount(Pause, {
    props: {
      msg: 'Hello world'
    }
  })
  expect(wrapper.get('svg').attributes('stroke')).toBe('black')
})