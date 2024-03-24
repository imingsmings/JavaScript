import { mount } from '@vue/test-utils'
import Button from '@/components/Button.vue'

describe('Button.vue', () => {
  it('renders button with default type', () => {
    const wrapper = mount(Button)
    expect(wrapper.classes()).toContain('my-button')
    expect(wrapper.classes()).toContain('my-button-default')
  })

  it('renders button with correct type', () => {
    const wrapper = mount(Button, { props: { type: 'primary' } })
    expect(wrapper.classes()).toContain('my-button')
    expect(wrapper.classes()).toContain('my-button-primary')
  })
})
