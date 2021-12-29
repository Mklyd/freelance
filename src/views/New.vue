<template>
  <form class="card" @submit.prevent="submit">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description"></textarea>
    </div>

    <button class="btn primary" >Создать</button>
  </form>
</template>


<script>
import { useStore} from 'vuex'


export default {
  setup() {
    const store = useStore()

    const submit = () => {
      const newTask = {
        
      }
    }

    store.dispatch('createTask', newTask)
    return {
      
      submit
    }
  }
}
</script>