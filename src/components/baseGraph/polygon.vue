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
import { defineProps, type PropType } from 'vue';
import DashoffsetAnimate from '../common/DashoffsetAnimate.vue';
defineProps({
  points: { type: String, default: '3.55,81.35 3.55,3.39 106.64,3.39 113.75,10.74 295.93,10.74 300,13.56 300,196.61 135.57,196.61 131.48,192.23 3.55,192.23 3.55,81.35' },
  fill: { type: String, default: 'none' },
  stroke: { type: String, default: '#00f9ff' },
  strokeWidth: { type: Number, default: 1 },
  dur: { type: String, default: '0' },
  strokeDasharray: { type: String, default: '0,0' },
  dashoffsetValues: { type: String, default: '0;100;0' },
  round: { type: String as PropType<'round' | 'square' | 'butt' | undefined>, default: 'round' }
});
</script>
