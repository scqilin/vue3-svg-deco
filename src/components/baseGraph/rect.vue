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
    <DashoffsetAnimate v-if="dur != '0'" :dur="dur" :dashoffsetValues="dashoffsetValues" />
  </rect>
</template>

<script setup lang="ts">
import { baseGraphProps, rectProps } from './props';
import DashoffsetAnimate from '../common/DashoffsetAnimate.vue';
defineProps({
  ...baseGraphProps,
  ...rectProps
});
</script>