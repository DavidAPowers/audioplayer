import FastFwd from '../../../components/atoms/FastFwd.vue'
import { mount } from '@vue/test-utils'

test('displays message', async () => {
  const wrapper = mount(FastFwd, {
    props: {
      msg: 'Hello world'
    }
  })
  expect(wrapper.get('svg').attributes('fill')).toBe('black')
  const verifyClick = await wrapper.get("svg.ffwd").trigger("click")
  await wrapper.vm.$nextTick() // Wait until $emits have been handled
  expect(wrapper.emitted('ffwd')).toBeTruthy()

})