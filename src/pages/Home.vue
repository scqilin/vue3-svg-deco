<template>
  <div class="welcome">
    <h1>Vue3 SVG Deco 组件库</h1>
    <router-link to="/demo" class="demo-link">进入 Demo 演示页面</router-link>
  </div>
</template>

<script setup lang="ts">
// 空内容
</script>

<style scoped>
.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #3a7afe;
}
.demo-link {
  margin-top: 2rem;
  font-size: 1.2rem;
  color: #fff;
  background: #3a7afe;
  padding: 0.5em 1.5em;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.2s;
}
.demo-link:hover {
  background: #0056b3;
}
</style>
