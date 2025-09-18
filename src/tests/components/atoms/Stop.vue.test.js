import Stop from '../../../components/atoms/Stop.vue'
import { mount } from '@vue/test-utils'

test('renders component', () => {
  const wrapper = mount(Stop, {
    props: {
      msg: 'Hello world'
    }
  })
  expect(wrapper.get('svg').attributes('fill')).toBe('none')
})