import Textbox from '../../../components/atoms/Textbox.vue'
import { mount } from '@vue/test-utils'

test('renders component', () => {
  const wrapper = mount(Textbox, {
    props: {
      artist:'Goofballz', 
      title:'Hello world',
      tracknum: 4
    }
  })
  expect(wrapper.get('span').text()).toContain('Goofballz')
})