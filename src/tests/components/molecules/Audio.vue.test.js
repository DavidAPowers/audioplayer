import Audio from '../../../components/molecules/Audio.vue'
import { mount } from '@vue/test-utils'
test('renders component', () => {
  const wrapper = mount(Audio, {
    props: {
      msg: 'Hello world'
    }
  })
  expect(wrapper.get('audio').attributes('id')).toBe('htmlAudio')
})