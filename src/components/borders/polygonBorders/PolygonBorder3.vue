<template>
  <DecoDiv>
    <slot></slot>
    <template #svg="{ slotWidth, slotHeight }">
      <BasePolygon v-bind="props" :width="slotWidth" :height="slotHeight"
        :points="computedPoints(slotWidth, slotHeight)" />
    </template>
  </DecoDiv>
</template>

<script setup lang="ts">
import { baseGraphProps, polygonProps } from '../../baseGraph/props';
import { BasePolygon } from '../../baseGraph';
import DecoDiv from '../../common/DecoDiv.vue';

const props = defineProps({
  ...baseGraphProps,
  ...polygonProps,
  bevelSize: { type: Number, default: 6 }
});

const computedPoints = (width: number, height: number) => {
  const { bevelSize, strokeWidth } = props;
  const inset = strokeWidth / 2;
  return [
    [bevelSize + inset, inset],
    [bevelSize * 2 + inset, bevelSize + inset],
    [width - bevelSize * 2 - inset, bevelSize + inset],
    [width - bevelSize - inset, inset],
    [width - inset, bevelSize + inset],
    [width - inset, height - bevelSize - inset],
    [width - bevelSize - inset, height - inset],
    [width - bevelSize * 2 - inset, height - bevelSize - inset],
    [bevelSize * 2 + inset, height - bevelSize - inset],
    [bevelSize + inset, height - inset],
    [inset, height - bevelSize - inset],
    [inset, bevelSize + inset]
  ].map(p => p.join(',')).join(' ');
};
</script>
