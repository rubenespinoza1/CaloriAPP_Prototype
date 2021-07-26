<template>
  <div class="caloriapp">
    <HeaderComponent />
    <SideBar />
    <NutritionalProfileOutput />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from "@/layouts/mainLayout/HeaderComponent";
import SideBar from "@/layouts/mainLayout/SideBar";
import NutritionalProfileOutput from "@/layouts/nutritionalProfileLayout/NutritionalProfileOutput";
export default {
name: "nutritionalProfileLayout",
  components: {SideBar, HeaderComponent, NutritionalProfileOutput}
}
</script>

<style scoped>

</style>