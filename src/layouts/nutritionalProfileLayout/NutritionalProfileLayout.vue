<template>
  <div class="caloriapp">
    <HeaderComponent />
    <SideBar />
    <h1>Holitas</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from "@/layouts/mainLayout/HeaderComponent";
import SideBar from "@/layouts/mainLayout/SideBar";
export default {
name: "nutritionalProfileLayout",
  components: {SideBar, HeaderComponent}
}
</script>

<style scoped>

</style>