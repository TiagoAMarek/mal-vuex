import { mount } from '@vue/test-utils'
import Logo from '@/components/AnimesList'

describe('AnimesList', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
