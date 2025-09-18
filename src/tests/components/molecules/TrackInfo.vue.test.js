import TrackInfo from '../../../components/molecules/TrackInfo.vue'
import { mount } from '@vue/test-utils'

test('renders component', () => {
  const wrapper = mount(TrackInfo, {
    props: {
      title: 'Hello world',
    }
  })
  expect(wrapper.get('span').text()).toContain('Hello world')
})