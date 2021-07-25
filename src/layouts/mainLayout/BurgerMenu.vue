<template>
  <button class="menuBtn" @click="openMenu()">
    <div class="menuBarras"></div>
    <div class="menuBarras"></div>
    <div class="menuBarras"></div>
  </button>
</template>

<script>
import '../../assets/styles/layouts/main/main.css'
export default {
  name: "BurgerMenu",
  methods: {
    openMenu() {
      let test = document.getElementById('sidebar').classList.toggle('active');
      console.log(test);
    }
  }
}

</script>

<style scoped>
</style>