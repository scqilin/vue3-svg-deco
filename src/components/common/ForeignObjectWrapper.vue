<template>
  <foreignObject :x="positionX" :y="positionY" :width="innerWidth" :height="innerHeight">
    <slot></slot>
  </foreignObject>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  width: { type: Number, required: true },
  height: { type: Number, required: true },
  xy: { type: Number, default: 2 }
});

const positionX = computed(() => props.xy);
const positionY = computed(() => props.xy);
const innerWidth = computed(() => props.width - (props.xy * 2));
const innerHeight = computed(() => props.height - (props.xy * 2));
</script>
