<template>
  <ellipse
    :cx="cx"
    :cy="cy"
    :rx="rx"
    :ry="ry"
    :fill="fill" 
    :stroke="stroke" 
    :stroke-width="strokeWidth" 
    :stroke-dasharray="strokeDasharray"
    :stroke-linecap="round"
  >
    <DashoffsetAnimate :dur="dur" :dashoffsetValues="dashoffsetValues" />
  </ellipse>
</template>

<script setup lang="ts">
import { defineProps, type PropType } from 'vue';
import DashoffsetAnimate from '../common/DashoffsetAnimate.vue';
defineProps({
  cx: { type: Number, default: 50 },
  cy: { type: Number, default: 50 },
  rx: { type: Number, default: 40 },
  ry: { type: Number, default: 20 },
  fill: { type: String, default: 'none' },
  stroke: { type: String, default: '#00f9ff' },
  strokeWidth: { type: Number, default: 1 },
  dur: { type: String, default: '0' },
  strokeDasharray: { type: String, default: '0,0' },
  dashoffsetValues: { type: String, default: '0;100;0' },
  round: { type: String as PropType<'round' | 'square' | 'butt' | undefined>, default: 'round' }
});
</script>
