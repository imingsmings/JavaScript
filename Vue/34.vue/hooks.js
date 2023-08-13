import { ref, reactive, toRefs } from 'vue';

export function useState(initialState) {
  const _state = ref(initialState);
  const _setState = (newState) => {
    if (typeof newState === 'function') {
      _state.value = newState(_state);
    } else {
      _state.value = newState;
    }
  };

  return [_state, _setState];
}

export function useReactive(data) {
  const state = reactive(data);

  for (let key in data) {
    state[`set${key.slice(0, 1).toUpperCase()}${key.slice(1)}`] = function (
      newState
    ) {
      state[key] =
        typeof newState === 'function' ? newState(state[key]) : newState;
    };
  }

  return [state, toRefs(state)];
}
