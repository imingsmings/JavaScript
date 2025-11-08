import { createSyntheticEvent } from '../SyntheticEvent'

describe('合成事件', () => {
  test('创建合成事件', () => {
    const event = new Event('click')
    const se = createSyntheticEvent(event)
    expect(se.nativeEvent).toBe(event)
    expect(se.currentTarget).toBeNull()
    expect(se.target).toBeNull()
    expect(se.stopPropagation).toBeInstanceOf(Function)
    expect(se.isPropagationStopped()).toBe(false)
    se.stopPropagation()
    expect(se.isPropagationStopped()).toBe(true)
  })
})
