<script setup lang="ts">
import Border from './components/Border.vue'
</script>

<template>
  <div class="demo-container">
    <Border :width="500" :height="300" type="tech" />
  </div>
</template>

<style scoped>
.demo-container {
  padding: 2rem;
  display: flex;
  justify-content: center;
}
</style>
