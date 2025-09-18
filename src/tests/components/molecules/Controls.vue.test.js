import Controls from '../../../components/molecules/Controls.vue'
import { mount } from '@vue/test-utils'

test('renders component', () => {
  const wrapper = mount(Controls, {
    props: {
      msg: 'Hello world'
    }
  })
  expect(wrapper.get('svg.playBtn').attributes('stroke')).toBe('black')
})