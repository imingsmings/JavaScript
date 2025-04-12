// 1. 导入所需的包
// 2. 描述测试单元
// 3. 写测试代码
// 4. 渲染组件到DOM
// 5. 从DOM中选择想要测试的元素
// 6. 断言结果

import { render, screen } from '@testing-library/react'
import UserStataus from '../../src/components/UserStatus'

describe('User Status Component', () => {
  test('display a welcome message when an email is provided', () => {
    render(<UserStataus email='tony@gmail.com' />)
    const message = screen.getByText(/Welcome/i)
    expect(message).toBeInTheDocument()
  })

  test('display a sign up when no email is provided', () => {
    render(<UserStataus />)
    const message = screen.getByText(/Sign Up/i)
    expect(message).toBeInTheDocument()
  })
})
