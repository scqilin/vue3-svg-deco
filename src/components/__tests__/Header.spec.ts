import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Header from '../headers/Header.vue'

describe('Header Component', () => {
  it('renders with default props', () => {
    const wrapper = mount(Header)
    
    expect(wrapper.find('svg').exists()).toBe(true)
    expect(wrapper.find('text').text()).toBe('标题')
    expect(wrapper.find('rect').attributes('rx')).toBe('8')
  })

  it('renders with custom props', () => {
    const wrapper = mount(Header, {
      props: {
        title: '自定义标题',
        width: 1000,
        height: 100,
        radius: 10
      }
    })
    
    expect(wrapper.find('text').text()).toBe('自定义标题')
    expect(wrapper.find('svg').attributes('width')).toBe('1000')
    expect(wrapper.find('svg').attributes('height')).toBe('100')
    expect(wrapper.find('rect').attributes('rx')).toBe('10')
  })

  it('applies gradient colors', () => {
    const wrapper = mount(Header, {
      props: {
        color1: '#ff0000',
        color2: '#00ff00'
      }
    });
    
    const gradient = wrapper.find('linearGradient')
    expect(gradient.find('stop').attributes('stop-color')).toBe('#ff0000')
    expect(gradient.findAll('stop')[1].attributes('stop-color')).toBe('#00ff00')
  })

  it('applies gradient angle', () => {
    const wrapper = mount(Header, {
      props: {
        angle: 90 // 垂直渐变
      }
    });
    
    const gradient = wrapper.find('linearGradient')
    expect(gradient.attributes('x1')).toBe('150%')
    expect(gradient.attributes('y1')).toBe('50%')
    expect(gradient.attributes('x2')).toBe('-50%')
    expect(gradient.attributes('y2')).toBe('50%')
  })
})
