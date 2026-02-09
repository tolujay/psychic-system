<template>
  <div class="card">
    <p>{{ msg }}</p>
    <button @click="count++">Count is: {{ count }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<style scoped>
.card {
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
}

button:hover {
  background-color: #359268;
}

p {
  margin-bottom: 0.5rem;
}
</style>
