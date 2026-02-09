<template>
  <div class="app">
    <header>
      <h1>Welcome to Your Vue Static Site</h1>
    </header>
    <main>
      <HelloWorld msg="Get started by editing src/App.vue" />
    </main>
  </div>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<style scoped>
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

header {
  text-align: center;
  margin-bottom: 2rem;
}

h1 {
  color: #42b983;
}
</style>
