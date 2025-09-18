import Playlist from '../../../components/molecules/Playlist.vue'
import { mount } from '@vue/test-utils'

test('renders component', () => {
  const wrapper = mount(Playlist, {
    props: {
      msg: 'Hello world'
    }
  })
  expect(wrapper.get('div.playlist-heading').text()).toBe('Playlist')
})