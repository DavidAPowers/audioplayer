import Rewind from '../../../components/atoms/Rewind.vue'
import { mount } from '@vue/test-utils'

test('renders component', () => {
  const wrapper = mount(Rewind, {
    props: {
      msg: 'Hello world'
    }
  })
  expect(wrapper.get('svg').attributes('fill')).toBe('black')
})