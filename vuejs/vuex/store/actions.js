export default {
  addToDo: ({ commit }, text) => {
    commit('addTodo', text)
  },
  removeToDo: ({ commit }, id) => {
    commit('removeTodo', id)
  },
  toggleToDo: ({ commit }, id) => {
    commit('toggleTodo', id)
  }
}