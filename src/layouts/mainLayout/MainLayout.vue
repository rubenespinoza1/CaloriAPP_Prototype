<template>
  <div class="caloriapp">
    <router-view></router-view>
    <HeaderComponent />
    <SideBar />
    <WelcomePage />
  </div>
</template>

<script>
import "../../assets/styles/layouts/main/main.css";
import HeaderComponent from "@/layouts/mainLayout/HeaderComponent";
import SideBar from "@/layouts/mainLayout/SideBar";
import WelcomePage from "@/layouts/mainLayout/WelcomePage";
export default {
  name: "MainLayout",
  components: { SideBar, HeaderComponent, WelcomePage },
};
</script>

<style>
</style>