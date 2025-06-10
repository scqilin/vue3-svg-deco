<template>
  <circle
    :cx="cx"
    :cy="cy"
    :r="r"
    :fill="fill" 
    :stroke="stroke" 
    :stroke-width="strokeWidth" 
    :stroke-dasharray="strokeDasharray"
    stroke-linecap="round"
  >
    <DashoffsetAnimate :dur="dur" :dashoffsetValues="dashoffsetValues" />
  </circle>
</template>

<script setup lang="ts">
import { baseGraphProps, circleProps } from './props';
import DashoffsetAnimate from '../common/DashoffsetAnimate.vue';
defineProps({
  ...baseGraphProps,
  ...circleProps
});
</script>
