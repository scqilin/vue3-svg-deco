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
  bevelSize: { type: Number, default: 10 } // 锯齿大小属性
});

const computedPoints = (width: number, height: number) => {
  const { bevelSize = 10, strokeWidth = 0 } = props;
  const halfStroke = strokeWidth / 2;
  return [
    [bevelSize/2 + halfStroke, bevelSize/2 + halfStroke],
    [bevelSize*1.5 + halfStroke, halfStroke],
    [bevelSize*2.5 + halfStroke, bevelSize + halfStroke],
    [bevelSize*3.5 + halfStroke, halfStroke],
    [bevelSize*4.5 + halfStroke, bevelSize + halfStroke],
    [width - bevelSize*4.5 - halfStroke, bevelSize + halfStroke],
    [width - bevelSize*3.5 - halfStroke, halfStroke],
    [width - bevelSize*2.5 - halfStroke, bevelSize + halfStroke],
    [width - bevelSize*1.5 - halfStroke, halfStroke],
    [width - bevelSize/2 - halfStroke, bevelSize + halfStroke],
    [width - halfStroke, bevelSize*2 + halfStroke],
    [width - halfStroke, height - bevelSize*2 - halfStroke],
    [width - bevelSize/2 - halfStroke, height - bevelSize - halfStroke],
    [width - bevelSize*1.5 - halfStroke, height - halfStroke],
    [width - bevelSize*2.5 - halfStroke, height - bevelSize - halfStroke],
    [width - bevelSize*3.5 - halfStroke, height - halfStroke],
    [width - bevelSize*4.5 - halfStroke, height - bevelSize - halfStroke],
    [bevelSize*4.5 + halfStroke, height - bevelSize - halfStroke],
    [bevelSize*3.5 + halfStroke, height - halfStroke],
    [bevelSize*2.5 + halfStroke, height - bevelSize - halfStroke],
    [bevelSize*1.5 + halfStroke, height - halfStroke],
    [bevelSize/2 + halfStroke, height - bevelSize - halfStroke],
    [halfStroke, height - bevelSize*2 - halfStroke],
    [halfStroke, bevelSize*2 + halfStroke]
  ].map(p => p.join(',')).join(' ');
};
</script>
