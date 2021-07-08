<template>
  <div>
    <MainPlan />
  </div>
</template>

<script>
import MainPlan from './layouts/mainLayout/MainLayout.vue'

export default {
  name: 'App',
  components: {
    MainPlan
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
