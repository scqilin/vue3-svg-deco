<template>
  <svg :width="width" :height="height" xmlns="http://www.w3.org/2000/svg">
    <rect 
      :x="strokeWidth/2" 
      :y="strokeWidth/2"
      rx="4"
      ry="4"
      :width="width - strokeWidth" 
      :height="height - strokeWidth" 
      fill="none" 
      :stroke="color" 
      :stroke-width="strokeWidth" 
      stroke-dasharray="10,10"
      stroke-linecap="round"
    >
      <animate
        attributeName="stroke-dashoffset"
        from="0"
        to="-200"
        :dur="duration"
        repeatCount="indefinite"
      />
    </rect>
    <ForeignObjectWrapper :xy="props.strokeWidth" :width="width" :height="height">
      <slot></slot>
    </ForeignObjectWrapper>
  </svg>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import ForeignObjectWrapper from '../common/ForeignObjectWrapper.vue';

const props = defineProps({
  width: { type: Number, default: 200 },
  height: { type: Number, default: 200 },
  color: { type: String, default: 'blue' },
  strokeWidth: { type: Number, default: 4 },
  duration: { type: String, default: '10s' }
});
</script>
