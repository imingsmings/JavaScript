export type SyntheticEvent = {
  nativeEvent: Event
  currentTarget: EventTarget | null
  target: EventTarget | null
  stopPropagation: () => void
  isPropagationStopped: () => boolean
}

function functionThatReturnsTrue() {
  return true
}

function functionThatReturnsFalse() {
  return false
}

interface SyntheticEventConstructor {
  new (nativeEvent: Event): SyntheticEvent
}

const SyntheticEvent = function (this: SyntheticEvent, nativeEvent: Event) {
  this.nativeEvent = nativeEvent
  this.currentTarget = null
  this.target = null
} as unknown as SyntheticEventConstructor

SyntheticEvent.prototype.stopPropagation = function () {
  this.isPropagationStopped = functionThatReturnsTrue
}

SyntheticEvent.prototype.isPropagationStopped = functionThatReturnsFalse

export function createSyntheticEvent(nativeEvent: Event): SyntheticEvent {
  return new SyntheticEvent(nativeEvent)
}
