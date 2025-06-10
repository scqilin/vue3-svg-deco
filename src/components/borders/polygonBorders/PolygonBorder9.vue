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
  let { bevelSize, strokeWidth } = props;
  const halfStroke = strokeWidth / 2;
  // 计算最大允许的 bevelSize，保证凹槽不会重叠
  const maxBevel = Math.floor(Math.min(width, height) / 14);
  if (bevelSize > maxBevel) bevelSize = maxBevel;

  return [
    // 上边凹槽
    [halfStroke, halfStroke],
    [bevelSize * 5 + halfStroke, halfStroke],
    [bevelSize * 6 + halfStroke, bevelSize + halfStroke],
    [width - bevelSize * 6 - halfStroke, bevelSize + halfStroke],
    [width - bevelSize * 5 - halfStroke, halfStroke],
    [width - halfStroke, halfStroke],
    // 右边凹槽
    [width - halfStroke, bevelSize * 5 + halfStroke],
    [width - bevelSize - halfStroke, bevelSize * 6 + halfStroke],
    [width - bevelSize - halfStroke, height - bevelSize * 6 - halfStroke],
    [width - halfStroke, height - bevelSize * 5 - halfStroke],
    [width - halfStroke, height - halfStroke],
    // 下边凹槽
    [width - bevelSize * 5 - halfStroke, height - halfStroke],
    [width - bevelSize * 6 - halfStroke, height - bevelSize - halfStroke],
    [bevelSize * 6 + halfStroke, height - bevelSize - halfStroke],
    [bevelSize * 5 + halfStroke, height - halfStroke],
    [halfStroke, height - halfStroke],
    // 左边凹槽
    [halfStroke, height - bevelSize * 5 - halfStroke],
    [bevelSize + halfStroke, height - bevelSize * 6 - halfStroke],
    [bevelSize + halfStroke, bevelSize * 6 + halfStroke],
    [halfStroke, bevelSize * 5 + halfStroke],
    [halfStroke, halfStroke],
  ].map(p => Array.isArray(p) ? p.join(',') : p).join(' ');
};
</script>
