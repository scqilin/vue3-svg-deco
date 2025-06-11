<template>
  <div ref="containerRef" style="position: relative; width: 100%; height: 100%; display: inline-block;">
    <svg :width="size.width" :height="size.height" style="position: absolute;" xmlns="http://www.w3.org/2000/svg">
      <slot name="svg" :slotWidth="size.width" :slotHeight="size.height"></slot>
    </svg>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onBeforeUnmount, nextTick } from 'vue';
const defWidth = 30;
const defHeight = 20;
const containerRef = ref<HTMLElement | null>(null);
const size = reactive({ width: defWidth, height: defHeight });

let observer: ResizeObserver | null = null;

const updateSize = () => {
  if (containerRef.value) {
    const rect = containerRef.value.getBoundingClientRect();
    size.width = rect.width;
    size.height = rect.height;
  } else {
    size.width = defWidth;
    size.height = defHeight;
    console.warn('Container reference is null, using default size.');
  }
};

onMounted(() => {
  nextTick(() => {
    updateSize();
    observer = new ResizeObserver(updateSize);
    if (containerRef.value) {
      observer.observe(containerRef.value);
    }
  });
});

onBeforeUnmount(() => {
  if (observer && containerRef.value) {
    observer.unobserve(containerRef.value);
  }
  observer = null;
});
</script>

<style scoped>

</style>
