import {createRouter, createWebHistory} from 'vue-router'
import New from '../views/New'
import Task from '../views/Task'
import Tasks from '../views/Tasks.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Tasks },
    { path: '/task', component: Task},
    { path: '/new', component: New },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})