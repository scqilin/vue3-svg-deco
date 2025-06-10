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
  bevelSize: { type: Number, default: 12 }
});

const computedPoints = (width: number, height: number) => {
  let { bevelSize, strokeWidth } = props;
  const halfStroke = strokeWidth / 2;
  // 计算最大允许的 bevelSize，保证凹槽不会重叠
  const maxBevel = Math.floor((width - halfStroke * 2) / 14); // 6+6+1+1=14
  if (bevelSize > maxBevel) bevelSize = maxBevel;

  return [
    // 左上
    [halfStroke, bevelSize + halfStroke],
    [bevelSize + halfStroke, halfStroke],
    // 上边中部（凹槽）
    [bevelSize * 5 + halfStroke, halfStroke],
    [bevelSize * 6 + halfStroke, bevelSize + halfStroke],
    [width - bevelSize * 6 - halfStroke, bevelSize + halfStroke],
    [width - bevelSize * 5 - halfStroke, halfStroke],
    // 右上
    [width - bevelSize - halfStroke, halfStroke],
    [width - halfStroke, bevelSize + halfStroke],
    // 右侧
    [width - halfStroke, height - bevelSize - halfStroke],
    // 右下
    [width - bevelSize - halfStroke, height - halfStroke],
    // 下边中部（凹槽）
    [width - bevelSize * 5 - halfStroke, height - halfStroke],
    [width - bevelSize * 6 - halfStroke, height - bevelSize - halfStroke],
    [bevelSize * 6 + halfStroke, height - bevelSize - halfStroke],
    [bevelSize * 5 + halfStroke, height - halfStroke],
    // 左下
    [bevelSize + halfStroke, height - halfStroke],
    [halfStroke, height - bevelSize - halfStroke]
  ].map(p => Array.isArray(p) ? p.join(',') : p).join(' ');
};
</script>
