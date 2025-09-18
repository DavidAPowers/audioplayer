import ProgressBar from '../../../components/atoms/ProgressBar.vue'
import { mount } from '@vue/test-utils'

test('renders component', async () => {
  const wrapper = mount(ProgressBar, {
    props: {
      position: '300',
      duration: '500'
    }
  })
  const positionInput = wrapper.find('input')
  await positionInput.setValue('123')
  expect(wrapper.emitted('seek')).toBeTruthy()
  expect(wrapper.emitted().seek[0]).toEqual(['123'])

})