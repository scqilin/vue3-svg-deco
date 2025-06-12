<template>
  <div style="position: relative; color: red">
    <svg :width="width" :height="height" style="position: absolute;" xmlns="http://www.w3.org/2000/svg">
      <slot name="svg"></slot>
    </svg>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

defineProps({
  width: { type: Number, default: 300 }, // 宽度
  height: { type: Number, default: 200 } // 高度
});
</script>


