<template>
  <div class="mainBar">
    <BurgerMenu />
    <img class="logo" src="../../assets/images/logo1.png">
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