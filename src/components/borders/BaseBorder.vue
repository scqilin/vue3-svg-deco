<template>
  <svg :width="width" :height="height" xmlns="http://www.w3.org/2000/svg">
    <path :d="borderPath" :stroke="color" fill="transparent" :stroke-width="props.strokeWidth" />
    <ForeignObjectWrapper :xy="props.strokeWidth" :width="width" :height="height">
      <slot></slot>
    </ForeignObjectWrapper>
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import ForeignObjectWrapper from '../common/ForeignObjectWrapper.vue';

const props = defineProps({
  width: { type: Number, default: 300 },
  height: { type: Number, default: 200 },
  color: { type: String, default: '#3a7afe' },
  strokeWidth: { type: Number, default: 2 }
});

const borderPath = computed(() => {
  const { width, height, strokeWidth } = props;
  const offset = strokeWidth / 2;
  return `M${offset},${offset} L${width - offset},${offset} L${width - offset},${height - offset} L${offset},${height - offset} Z`;
});
</script>

<style scoped></style>
