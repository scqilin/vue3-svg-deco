<template>
  <svg :width="width" :height="height" xmlns="http://www.w3.org/2000/svg">
    <BaseRect v-bind="props"/>
    <BaseCircle v-bind="props"/>
    <BaseEllipse v-bind="props"/>
    <BaseLine v-bind="props"/>
    <BasePolygon v-bind="props"/>
    <BasePolyline v-bind="props"/>
    <BasePath v-bind="props" :d="d"/>
    <ForeignObjectWrapper :xy="props.strokeWidth" :width="width" :height="height">
      <slot></slot>
    </ForeignObjectWrapper>
  </svg>
</template>

<script setup lang="ts">
import { defineProps, type PropType } from 'vue';
import ForeignObjectWrapper from '../common/ForeignObjectWrapper.vue';
import { BaseRect, BaseCircle, BaseEllipse, BaseLine, BasePolygon, BasePolyline, BasePath } from '../baseGraph';
/* 基本边框  */
const props = defineProps({
  width: { type: Number, default: 300 }, // rect 宽度
  height: { type: Number, default: 200 }, // rect 高度
  cx: { type: Number, default: 50 }, // 圆心x坐标
  cy: { type: Number, default: 50 }, // 圆心y坐标
  r: { type: Number, default: 40 }, // 半径
  rx : { type: Number, default: 4 }, // 椭圆x半径 和 rect圆角
  ry : { type: Number, default: 4 }, // 椭圆y半径 和 rect圆角
  x1: { type: Number, default: 0 }, // 线段起点x坐标
  y1: { type: Number, default: 10 }, // 线段起点y坐标
  x2: { type: Number, default: 300 }, // 线段终点x坐标
  y2: { type: Number, default: 10 }, // 线段终点y坐标
  // points : { type: String, default: '' }, // 多边形点坐标
  // d: { type: String, default: '' }, // 路径数据

  fill: { type: String, default: 'none' },
  stroke: { type: String, default: '#00f9ff' },
  strokeWidth: { type: Number, default: 1 },
  rxy: { type: Number, default: 0 },
  dur: { type: String, default: '0' },
  strokeDasharray: { type: String, default: '0,0' },
  dashoffsetValues: { type: String, default: '0;100;0' },
  round: { type: String as PropType<'round' | 'square' | 'butt' | undefined>, default: 'round' }
});

const d = 'M 10 80 Q 70 10 130 80 T 250 80';
</script>
