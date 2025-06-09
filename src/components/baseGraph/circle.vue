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
import { type PropType } from 'vue';
import DashoffsetAnimate from '../common/DashoffsetAnimate.vue';
defineProps({
  cx: { type: Number, default: 50 },
  cy: { type: Number, default: 50 },
  r: { type: Number, default: 40 },
  fill: { type: String, default: 'none' },
  stroke: { type: String, default: '#00f9ff' },
  strokeWidth: { type: Number, default: 1 },
  dur: { type: String, default: '0' },
  strokeDasharray: { type: String, default: '0,0' },
  dashoffsetValues: { type: String, default: '0;100;0' },
  round: { type: String as PropType<'round' | 'square' | 'butt' | undefined>, default: 'round' }
});
</script>
