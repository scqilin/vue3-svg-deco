<template>
  <svg :width="width" :height="height" xmlns="http://www.w3.org/2000/svg">
    <polygon v-if="dashoffsetAnimate"
      :points="computedPoints"
      fill="none"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-dasharray="10,10"
      stroke-linecap="round"
    >
      <DashoffsetAnimate :dur="duration" :to="to" />
    </polygon>
    <polygon v-else
      :points="computedPoints"
      fill="none"
      :stroke="color"
      :stroke-width="strokeWidth"
    />
  </svg>
</template>

<script setup lang="ts">
import DashoffsetAnimate from '../common/DashoffsetAnimate.vue';
import { defineProps } from 'vue';

defineProps({
  width: { type: Number, default: 300 },
  height: { type: Number, default: 200 },
  duration: { type: String, default: '10s' },
  color: { type: String, default: '#00f9ff' },
  strokeWidth: { type: Number, default: 1 },
  computedPoints: { type: String, required: true },
  to: { type: [String, Number], default: -200 },
  dashoffsetAnimate: { type: Boolean, default: false }
});
</script>
