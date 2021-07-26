<template>
  <div id="sidebar">
    <ul>
      <li><router-link to="/profile" class="rl">Perfil Nutricional</router-link></li>
      <li>Ingresar Alimentos</li>
      <li><router-link to="/grafica-historica" class="rl">Vista gráfica</router-link></li>
    </ul>
  </div>
</template>

<script>
import '../../assets/styles/layouts/main/main.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
export default {
  name: "SideBar",
  data() {
    return {
      alimentos: [],
    }
  },
  methods: {
    swapPage(){

    },
  }
}

</script>

<style scoped>

</style>