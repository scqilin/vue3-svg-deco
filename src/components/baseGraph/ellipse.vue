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
    <DashoffsetAnimate v-if="dur != '0'" :dur="dur" :dashoffsetValues="dashoffsetValues" />
  </ellipse>
</template>

<script setup lang="ts">
import { baseGraphProps, ellipseProps } from './props';
import DashoffsetAnimate from '../common/DashoffsetAnimate.vue';
defineProps({
  ...baseGraphProps,
  ...ellipseProps
});
</script>
