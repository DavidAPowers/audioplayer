import ProgressBar from '../../../components/atoms/ProgressBar.vue'
import { mount } from '@vue/test-utils'

test('renders component', () => {
  const wrapper = mount(ProgressBar, {
    props: {
      msg: 'Hello world'
    }
  })
  expect(wrapper.get('div').html()).toContain('input')
})