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
  bevelSize: { type: Number, default: 10 } // 控制四角的圆角大小
});

const computedPoints = (width: number, height: number) => {
  const { bevelSize, strokeWidth } = props;
  const inset = strokeWidth / 2;
  return [
    [bevelSize + inset, bevelSize + inset],
    [bevelSize * 2 + inset, inset],
    [width - bevelSize * 2 - inset, inset],
    [width - bevelSize - inset, bevelSize + inset],
    [width - bevelSize - inset, bevelSize * 2 + inset],
    [width - inset, bevelSize * 3 + inset],
    [width - inset, height - bevelSize * 3 - inset],
    [width - bevelSize - inset, height - bevelSize * 2 - inset],
    [width - bevelSize - inset, height - bevelSize - inset],
    [width - bevelSize * 2 - inset, height - inset],
    [bevelSize * 2 + inset, height - inset],
    [bevelSize + inset, height - bevelSize - inset],
    [bevelSize + inset, height - bevelSize * 2 - inset],
    [inset, height - bevelSize * 3 - inset],
    [inset, bevelSize * 3 + inset],
    [bevelSize + inset, bevelSize * 2 + inset]
  ].map(p => p.join(',')).join(' ');
};
</script>
