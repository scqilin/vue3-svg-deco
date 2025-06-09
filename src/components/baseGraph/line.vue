<template>
  <line
    :x1="x1"
    :y1="y1"
    :x2="x2"
    :y2="y2"
    :stroke="stroke" 
    :stroke-width="strokeWidth" 
    :stroke-dasharray="strokeDasharray"
    :stroke-linecap="round"
  >
    <DashoffsetAnimate :dur="dur" :dashoffsetValues="dashoffsetValues" />
  </line>
</template>

<script setup lang="ts">
import { defineProps, type PropType } from 'vue';
import DashoffsetAnimate from '../common/DashoffsetAnimate.vue';
defineProps({
  x1: { type: Number, default: 0 },
  y1: { type: Number, default: 10 },
  x2: { type: Number, default: 300 },
  y2: { type: Number, default: 10 },
  stroke: { type: String, default: '#00f9ff' },
  strokeWidth: { type: Number, default: 1 },
  dur: { type: String, default: '0' },
  strokeDasharray: { type: String, default: '0,0' },
  dashoffsetValues: { type: String, default: '0;100;0' },
  round: { type: String as PropType<'round' | 'square' | 'butt' | undefined>, default: 'round' }
});
</script>
