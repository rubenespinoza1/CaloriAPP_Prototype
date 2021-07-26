<template>
  <div id="sidebar">
    <ul>
      <li>Perfil Nutricional</li>
      <li><router-link to="/">Ingresar Alimentos</router-link></li>
      <li>Vista gráfica</li>
    </ul>
  </div>
</template>

<script>
import '../../assets/styles/layouts/main/main.css'
import axios from 'axios'
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
    async test(){
      let url = 'http://localhost:9000/api/alimentos';
      let alimentosJSON=await axios.get(url);
      let alimentosData = alimentosJSON.data;
      console.log(alimentosData);
      for(let alimento in alimentosData){
        this.alimentos.push(alimento.value)
      }
      // for(let i=0;i<alimentosJSON.data.length;i++){
      //   let id = alimentosJSON[i].id;
      //   let calorias = alimentosJSON[i].calorias;
      //   let nombre = alimentosJSON[i].nombre;
      //   this.alimentos.push([id,nombre,calorias]);
      // }
      console.log(this.alimentos);
      if(this.alimentos.length==0){
        console.log('nada papi')
      }else{
        // console.log(this.alimentos);
      }
    }
  }
}

</script>

<style scoped>

</style>