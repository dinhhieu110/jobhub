<script setup>
import { onMounted, ref } from "vue";

const name = ref('Wilson Tran');
const status = ref('active');
const tasks = ref(['Task one', 'Task two', 'Task three']);
const newTask = ref("");


const toggleStatus = () => {
  if (status.value === 'active') {
    status.value = 'pending'
  } else if (status.value === 'pending') {
    status.value = 'inactive'
  } else {
    status.value = 'active'
  }
};

const addTask = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push(newTask.value);
    newTask.value = "";
  }
}

const deleteTask = (index) => {
  tasks.value.splice(index, 1);

}

onMounted(async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    tasks.value = data.map(task => task.title);
  } catch (error) {
    console.log("Error fetching tasks!")
  }
});
</script>
<template>
  <h1>Welcome {{ name }} to JobHub</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else="status === 'inactive'">User is inactive</p>

  <form @submit.prevent="addTask">
    <label for="newTask">
      Add new Task
      <input type="text" name="newTask" id="newTask" v-model="newTask">
      <button type="submit">Submit</button>
    </label>
  </form>

  <h3>Tasks: </h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>{{ task }}</span>
      <button @click="deleteTask(index)">X</button>
    </li>
  </ul>
  <br />
  <!-- <button v-on:click="toggleStatus">Change Status</button> -->
  <button @click="toggleStatus">Change Status</button>

</template>

<style scoped>
h1 {
  color: blue;
}
</style>