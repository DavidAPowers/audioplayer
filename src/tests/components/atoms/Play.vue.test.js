import Play from '../../../components/atoms/Play.vue'
import { mount } from '@vue/test-utils'

test('displays message', () => {
  const wrapper = mount(Play, {
    props: {
      msg: 'Hello world'
    }
  })
  expect(wrapper.get('svg').attributes('stroke')).toBe('black')
})