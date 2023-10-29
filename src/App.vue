<script setup lang="ts">
  import { RouterView } from "vue-router"
</script>

<template>
  <div class="container">
    <RouterView />
  </div>
</template>


<style scoped>
  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding-top: 4rem
  }
</style>
