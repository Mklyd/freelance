<template>
  <h1 v-if="!tasks" class="text-white center">Задач пока нет </h1>
  <template v-else>
    <h3 class="text-white">Всего активных задач: 0</h3>
    <div class="card">
      <h2 class="card-title" v-for="task in tasks" :key="task.id">
        Название задачи
        <AppStatus :type="'done'" />
        {{task.title}}
      </h2>
      <p>
        <strong>
          <small>
            {{ new Date().toLocaleDateString() }}
          </small>
        </strong>
      </p>
      <button class="btn primary" > Посмотреть</button>
    </div>
   
  </template>
</template>

<script>
import {computed} from 'vue'
import {useStore} from 'vuex'

import AppStatus from '../components/AppStatus'

export default {
  components: {AppStatus},
  setup() {
    const store = useStore() 

    const tasks = computed(() => store.getters.tasks)
    return {
      tasks
    }
  }
}
</script>
