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
  const maxBevel = Math.floor((width - halfStroke * 2) / 14); // 6+6+1+1=14
  if (bevelSize > maxBevel) bevelSize = maxBevel;

  return [
    [halfStroke, bevelSize + halfStroke],
    [bevelSize + halfStroke, halfStroke],
    [width - bevelSize - halfStroke, halfStroke],
    [width - halfStroke, bevelSize + halfStroke],
    [width - halfStroke, height - bevelSize - halfStroke],
    [width - bevelSize - halfStroke, height - halfStroke],
    [width - bevelSize * 5 - halfStroke, height - halfStroke],
    [width - bevelSize * 6 - halfStroke, height - bevelSize - halfStroke],
    [bevelSize * 6 + halfStroke, height - bevelSize - halfStroke],
    [bevelSize * 5 + halfStroke, height - halfStroke],
    [bevelSize + halfStroke, height - halfStroke],
    [halfStroke, height - bevelSize - halfStroke]
  ].map(p => [p[0], height - p[1]].join(',')).join(' ');
};
</script>
