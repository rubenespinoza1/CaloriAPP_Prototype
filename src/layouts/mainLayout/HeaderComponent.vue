<template>
  <div class="mainBar">
    <BurgerMenu />
    <router-link to="/">
      <img class="logo" src="../../assets/images/logo1.png">
    </router-link>
  </div>
</template>

<script>
import '../../assets/styles/layouts/main/main.css'
import BurgerMenu from "@/layouts/mainLayout/BurgerMenu";
export default {
name: "HeaderComponent",
  components: {BurgerMenu}
}
</script>

<style scoped>

</style>