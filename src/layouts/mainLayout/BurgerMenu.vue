<template>
  <button class="menuBtn" @click="openMenu()">
    <div class="menuBarras"></div>
    <div class="menuBarras"></div>
    <div class="menuBarras"></div>
  </button>
</template>

<script>
import "../../assets/styles/layouts/main/main.css";
export default {
  name: "BurgerMenu",
  methods: {
    openMenu() {
      const isToggled = document.getElementById("sidebar").classList.toggle("active");
      if (isToggled){
        document.getElementById("welcome-main-div").setAttribute('style', 'align-self: right; width: 80%; overflow-y: scroll; overflow-x: hidden; font-size: 3px; float: right;transition: all .5s ease-in-out;');
      }else{
        document.getElementById("welcome-main-div").setAttribute('style', 'align-self: right; width: 100%; overflow-y: scroll; overflow-x: hidden; font-size: 3px;');
      }
      
    }
  },
};
</script>

<style scoped>
</style>