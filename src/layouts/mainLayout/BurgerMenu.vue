<template>
  <button class="menuBtn" @click="openMenu($event)">
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
      document.getElementById('sidebar').classList.toggle('active');
    }
  }
}

</script>

<style scoped>
</style>