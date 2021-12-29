import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: JSON.parse(localStorage.getItem('my-tasks'))
  },
  getters: {

  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task)
      
    }
  },
  actions: {
    
  },
});