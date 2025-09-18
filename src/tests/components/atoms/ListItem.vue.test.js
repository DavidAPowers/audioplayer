import ListItem from '../../../components/atoms/ListItem.vue'
import { mount } from '@vue/test-utils'
test('displays message', () => {
  const wrapper = mount(ListItem, {
    props: {
      track: {title: 'Okay test', artist: 'Hello world'},
      tracknum: 3,
      isCurrent: true
    }
  })
  expect(wrapper.get('li').text()).toContain('Hello world')
})