import PlayPause from '../../../components/atoms/PlayPause.vue'
import { mount } from '@vue/test-utils'

test('renders svg', () => {
  const wrapper = mount(PlayPause, {
    props: {
      msg: 'Hello world'
    }
  })
  expect(wrapper.get('svg').attributes('stroke')).toBe('black')
})