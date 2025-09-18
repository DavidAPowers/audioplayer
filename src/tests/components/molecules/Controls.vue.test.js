import Controls from '../../../components/molecules/Controls.vue'
import { mount } from '@vue/test-utils'

test('renders component', async () => {
  const wrapper = mount(Controls, {
    props: {
      position: '0',
      duration: '200'
    }
  })
  expect(wrapper.get('svg.playBtn').attributes('stroke')).toBe('black')
  const rewindClick = await wrapper.get("svg.rewind").trigger("click")
  await wrapper.vm.$nextTick() // Wait until $emits have been handled
  expect(wrapper.emitted().audioclick).toBeTruthy()
  expect(wrapper.emitted().audioclick[0]).toEqual(['rewind'])

  const ffwdClick = await wrapper.get("svg.ffwd").trigger("click")
  await wrapper.vm.$nextTick() // Wait until $emits have been handled
  expect(wrapper.emitted().audioclick).toBeTruthy()
  expect(wrapper.emitted().audioclick[1]).toEqual(['ffwd'])

  //const seek = await wrapper.get("svg.rewind").trigger("seek")
  const positionInput = wrapper.find('input')
  await positionInput.setValue('50')
  await wrapper.vm.$nextTick() // Wait until $emits have been handled
  expect(wrapper.emitted().seek).toBeTruthy()
  expect(wrapper.emitted().seek[0]).toEqual(['50'])

})