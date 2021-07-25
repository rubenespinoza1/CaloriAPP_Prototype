<template>
  <div class="caloriapp">
    <HeaderComponent />
    <SideBar />
    <h>Holitas</h>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from "@/layouts/mainLayout/HeaderComponent";
import SideBar from "@/layouts/SideBar";
export default {
name: "nutritionalProfileLayout",
  components: {SideBar, HeaderComponent}
}
</script>

<style scoped>

</style>