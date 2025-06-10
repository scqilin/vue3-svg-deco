<template>
  <polyline
    :points="points"
    :fill="fill" 
    :stroke="stroke" 
    :stroke-width="strokeWidth" 
    :stroke-dasharray="strokeDasharray"
    :stroke-linecap="round"
  >
    <DashoffsetAnimate :dur="dur" :dashoffsetValues="dashoffsetValues" />
  </polyline>
</template>

<script setup lang="ts">
import { baseGraphProps, polylineProps } from './props';
import DashoffsetAnimate from '../common/DashoffsetAnimate.vue';
defineProps({
  ...baseGraphProps,
  ...polylineProps
});
</script>
