<template>
  <DecoDiv :width = props.width :height="props.height">
    <slot></slot>
    <template #svg>
      <BasePolygon v-bind="props" :width="props.width" :height="props.height"
        :points="computedPoints(props.width, props.height)" />
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
  const maxBevel = Math.floor((height - halfStroke * 2) / 14); // 使用高度计算最大凹槽
  if (bevelSize > maxBevel) bevelSize = maxBevel;

  return [
    // 上边
    [bevelSize + halfStroke, halfStroke],
    [width - bevelSize - halfStroke, halfStroke],
    // 右上
    [width - halfStroke, bevelSize + halfStroke],
    // 右边凹槽
    [width - halfStroke, bevelSize * 5 + halfStroke],
    [width - bevelSize - halfStroke, bevelSize * 6 + halfStroke],
    [width - bevelSize - halfStroke, height - bevelSize * 6 - halfStroke],
    [width - halfStroke, height - bevelSize * 5 - halfStroke],
    // 右下
    [width - halfStroke, height - bevelSize - halfStroke],
    [width - bevelSize - halfStroke, height - halfStroke],
    // 下边
    [bevelSize + halfStroke, height - halfStroke],
    // 左下
    [halfStroke, height - bevelSize - halfStroke],
    // 左边凹槽
    [halfStroke, height - bevelSize * 5 - halfStroke],
    [bevelSize + halfStroke, height - bevelSize * 6 - halfStroke],
    [bevelSize + halfStroke, bevelSize * 6 + halfStroke],
    [halfStroke, bevelSize * 5 + halfStroke],
    // 左上
    [halfStroke, bevelSize + halfStroke],
  ].map(p => Array.isArray(p) ? p.join(',') : p).join(' ');
};
</script>
