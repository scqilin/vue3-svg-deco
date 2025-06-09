<template>
  <PolygonBorderBase
    v-bind="props"
    :computedPoints="computedPoints"
  >
    <slot></slot>
  </PolygonBorderBase>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import PolygonBorderBase from './PolygonBorderBase.vue';

const props = defineProps({
  width: { type: Number, default: 300 },
  height: { type: Number, default: 200 },
  duration: { type: String, default: '10s' },
  color: { type: String, default: '#00f9ff' },
  strokeWidth: { type: Number, default: 1 },
  cornerSize: { type: Number, default: 10 }
});

const computedPoints = computed(() => {
  const { width, height, cornerSize, strokeWidth } = props;
  const inset = strokeWidth / 2;
  return [
    [cornerSize + inset, cornerSize + inset],
    [cornerSize * 2 + inset, inset],
    [width - cornerSize * 2 - inset, inset],
    [width - cornerSize - inset, cornerSize + inset],
    [width - cornerSize - inset, cornerSize * 2 + inset],
    [width - inset, cornerSize * 3 + inset],
    [width - inset, height - cornerSize * 3 - inset],
    [width - cornerSize - inset, height - cornerSize * 2 - inset],
    [width - cornerSize - inset, height - cornerSize - inset],
    [width - cornerSize * 2 - inset, height - inset],
    [cornerSize * 2 + inset, height - inset],
    [cornerSize + inset, height - cornerSize - inset],
    [cornerSize + inset, height - cornerSize * 2 - inset],
    [inset, height - cornerSize * 3 - inset],
    [inset, cornerSize * 3 + inset],
    [cornerSize + inset, cornerSize * 2 + inset]
  ].map(p => p.join(',')).join(' ');
});
</script>
