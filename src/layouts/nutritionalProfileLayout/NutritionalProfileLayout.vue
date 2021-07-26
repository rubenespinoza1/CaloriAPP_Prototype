<template>
  <div>
    <NutritionalProfileOutput />

    <router-view></router-view>
  </div>
</template>

<script>
import NutritionalProfileOutput from "@/layouts/nutritionalProfileLayout/NutritionalProfileOutput";
export default {
name: "nutritionalProfileLayout",
  components: {NutritionalProfileOutput}
}
</script>

<style scoped>

</style>