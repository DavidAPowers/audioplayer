import Rewind from '../../../components/atoms/Rewind.vue'
import { mount } from '@vue/test-utils'

test('renders component', async () => {
  const wrapper = mount(Rewind, {
    props: {
      msg: 'Hello world'
    }
  })
  expect(wrapper.get('svg').attributes('fill')).toBe('black')
  const verifyClick = await wrapper.get("svg.rewind").trigger("click")
  await wrapper.vm.$nextTick() // Wait until $emits have been handled
  expect(wrapper.emitted('rewind')).toBeTruthy()

})