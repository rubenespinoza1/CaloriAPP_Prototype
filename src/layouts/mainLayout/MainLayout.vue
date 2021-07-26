<template>
  <div class="caloriapp">
    
    <HeaderComponent />
    <SideBar />
    <WelcomePage />
    <router-view></router-view>
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