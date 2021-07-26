<template>
  <div class="caloriapp">
    <HeaderComponent />
    <SideBar />
    
    <router-view />
  </div>
</template>

<script>
import "../../assets/styles/layouts/main/main.css";
import HeaderComponent from "@/layouts/mainLayout/HeaderComponent";
import SideBar from "@/layouts/mainLayout/SideBar";
//import WelcomePage from "@/layouts/mainLayout/WelcomePage";
export default {
  name: "MainLayout",
  components: { SideBar, HeaderComponent },
};
</script>

<style>
</style>