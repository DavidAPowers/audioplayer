import PlayPause from '../../../components/atoms/PlayPause.vue'
import { mount } from '@vue/test-utils'

test('emits play when paused', async () => {
  const wrapper = mount(PlayPause, {
    props: {
      playing: false
    }
  })
  expect(wrapper.get('svg').attributes('stroke')).toBe('black')
  const verifyClick = await wrapper.get("svg").trigger("click")
  await wrapper.vm.$nextTick() // Wait until $emits have been handled
  expect(wrapper.emitted('play')).toBeTruthy()
})

test('emits pause when playing', async () => {
  const wrapper = mount(PlayPause, {
    props: {
      playing: true
    }
  })
  expect(wrapper.get('svg').attributes('stroke')).toBe('black')
  const verifyClick = await wrapper.get("svg").trigger("click")
  await wrapper.vm.$nextTick() // Wait until $emits have been handled
  expect(wrapper.emitted('pause')).toBeTruthy()
})