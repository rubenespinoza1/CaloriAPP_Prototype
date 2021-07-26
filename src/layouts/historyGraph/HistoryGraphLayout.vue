<template>
  <div>
    <HistoryGraphDisplay />

    <router-view></router-view>
  </div>
</template>

<script>
import HistoryGraphDisplay from "@/layouts/historyGraph/HistoryGraphDisplay";
export default {
name: "HistoryGraphLayout",
  components: {HistoryGraphDisplay}
}
</script>

<style scoped>

</style>