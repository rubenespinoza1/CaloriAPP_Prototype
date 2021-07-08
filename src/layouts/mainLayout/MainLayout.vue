<template>
  <div class="caloriapp">
    <HeaderComponent />
    <SideBar />
  </div>
</template>

<script>
import '../../assets/styles/layouts/main/main.css'
import HeaderComponent from "@/layouts/mainLayout/HeaderComponent";
import SideBar from "@/layouts/mainLayout/SideBar";
export default {
name: "MainLayout",
  components: {SideBar, HeaderComponent}
}
</script>

<style scoped>

</style>