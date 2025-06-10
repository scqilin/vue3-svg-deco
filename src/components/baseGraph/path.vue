<template>
  <path
    :d="d"
    :fill="fill" 
    :stroke="stroke" 
    :stroke-width="strokeWidth" 
    :stroke-dasharray="strokeDasharray"
    :stroke-linecap="round"
  >
    <DashoffsetAnimate :dur="dur" :dashoffsetValues="dashoffsetValues" />
  </path>
</template>

<script setup lang="ts">
import { baseGraphProps, pathProps } from './props';
import DashoffsetAnimate from '../common/DashoffsetAnimate.vue';
defineProps({
  ...baseGraphProps,
  ...pathProps
});
</script>
