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
  bevelSize: { type: Number, default: 4 },
});

const computedPoints = (width: number, height: number) => {
  let { bevelSize, strokeWidth } = props;
  const halfStroke = strokeWidth / 20; // 这里的12是为了让边框外溢 制造相框效果

  // 上下边锯齿数量和宽度
  const teethCountX = Math.max(2, Math.floor((width - halfStroke * 2) / (bevelSize * 2)));
  const toothW = (width - halfStroke * 2) / teethCountX;
  // 左右边锯齿数量和高度
  const teethCountY = Math.max(2, Math.floor((height - halfStroke * 2) / (bevelSize * 2)));
  const toothH = (height - halfStroke * 2) / teethCountY;

  const points = [];

  // 上边锯齿（左到右）
  for (let i = 0; i <= teethCountX; i++) {
    const x = halfStroke + i * toothW;
    const y = (i % 2 === 0) ? halfStroke : halfStroke + toothH / 2;
    points.push([x, y]);
  }
  // 右边锯齿（上到下）
  for (let i = 1; i <= teethCountY; i++) {
    const y = halfStroke + i * toothH;
    const x = (i % 2 === 0) ? width - halfStroke - toothW / 2 : width - halfStroke;
    points.push([x, y]);
  }
  // 下边锯齿（右到左）
  for (let i = teethCountX - 1; i >= 0; i--) {
    const x = halfStroke + i * toothW;
    const y = ((teethCountX - i) % 2 === 0) ? height - halfStroke : height - halfStroke - toothH / 2;
    points.push([x, y]);
  }
  // 左边锯齿（下到上）
  for (let i = teethCountY - 1; i > 0; i--) {
    const y = halfStroke + i * toothH;
    const x = (i % 2 === 0) ? halfStroke + toothW / 2 : halfStroke;
    points.push([x, y]);
  }
  // 闭合
  points.push(points[0]);

  return points.map(p => p.join(",")).join(" ");
};
</script>
