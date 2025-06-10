<template>
  <polygon
    :points="points"
    :fill="fill" 
    :stroke="stroke" 
    :stroke-width="strokeWidth" 
    :stroke-dasharray="strokeDasharray"
    :stroke-linecap="round"
  >
    <DashoffsetAnimate :dur="dur" :dashoffsetValues="dashoffsetValues" />
  </polygon>
</template>

<script setup lang="ts">
import { baseGraphProps, polygonProps } from './props';
import DashoffsetAnimate from '../common/DashoffsetAnimate.vue';
defineProps({
  ...baseGraphProps,
  ...polygonProps
});
</script>
