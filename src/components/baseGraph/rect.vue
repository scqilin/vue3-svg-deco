<template>
  <rect 
    :x="strokeWidth/2" 
    :y="strokeWidth/2"
    :width="width - strokeWidth" 
    :height="height - strokeWidth"
    :rx="rx"
    :ry="ry"
    :fill="fill" 
    :stroke="stroke" 
    :stroke-width="strokeWidth" 
    :stroke-dasharray="strokeDasharray"
    :stroke-linecap="round"
  >
    <DashoffsetAnimate :dur="dur" :dashoffsetValues="dashoffsetValues" />
  </rect>
</template>

<script setup lang="ts">
import { defineProps, type PropType } from 'vue';
import DashoffsetAnimate from '../common/DashoffsetAnimate.vue';
defineProps({
  width: { type: Number, default: 300 },
  height: { type: Number, default: 200 },
  fill: { type: String, default: 'none' },
  stroke: { type: String, default: '#00f9ff' },
  strokeWidth: { type: Number, default: 1 },
  rx: { type: Number, default: 0 },
  ry: { type: Number, default: 0 },
  dur: { type: String, default: '0' },
  strokeDasharray: { type: String, default: '0,0' },
  dashoffsetValues: { type: String, default: '0;100;0' },
  round: { type: String as PropType<'round' | 'square' | 'butt' | undefined>, default: 'round' }
});
</script>