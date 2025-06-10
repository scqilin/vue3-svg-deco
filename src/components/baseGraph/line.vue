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
    <DashoffsetAnimate v-if="dur != '0'" :dur="dur" :dashoffsetValues="dashoffsetValues" />
  </line>
</template>

<script setup lang="ts">
import { baseGraphProps, lineProps } from './props';
import DashoffsetAnimate from '../common/DashoffsetAnimate.vue';
defineProps({
  ...baseGraphProps,
  ...lineProps
});
</script>
