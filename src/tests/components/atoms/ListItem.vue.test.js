import ListItem from '../../../components/atoms/ListItem.vue'
import { mount } from '@vue/test-utils'
test('displays message', () => {
  const wrapper = mount(ListItem, {
    props: {
      tracknum: 3,
      isCurrent: true,
      title: 'Okay test', 
      artist: 'Hello world'
    }
  })
  expect(wrapper.get('li').text()).toContain('Hello world')
})