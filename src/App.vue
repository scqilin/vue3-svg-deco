<script setup lang="ts">
import { BaseBorder, GradientBorder } from './components/borders';
</script>

<template>
  <div class="demo-container">
    <BaseBorder :width="200" :height="200" :strokeWidth="4" color="#3a7afe">
      <div class="border-content">
        <span>基础边框</span>
      </div>
    </BaseBorder>
    <GradientBorder :width="200" :height="200" :strokeWidth="4" color="#ff00ff" color2="#0000ff">
      <div class="border-content">
        <span>渐变边框</span>
      </div>
    </GradientBorder>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  padding: 10px;
}

.border-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
</style>
