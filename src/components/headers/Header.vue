<template>
  <svg :width="width" :height="height" xmlns="http://www.w3.org/2000/svg">
    <!-- 背景渐变 -->
    <defs>
      <linearGradient 
        v-if="gradientType === 'linear'"
        :id="`headerGradient-${uid}`" 
        :x1="gradientStartX" 
        :y1="gradientStartY" 
        :x2="gradientEndX" 
        :y2="gradientEndY"
      >
        <stop offset="0%" :stop-color="color1" />
        <stop offset="100%" :stop-color="color2" />
      </linearGradient>
      <radialGradient
        v-else
        :id="`headerGradient-${uid}`"
        :cx="`${radialCenterX}%`"
        :cy="`${radialCenterY}%`"
        :r="`${radialRadius}%`"
        fx="50%"
        fy="50%"
      >
        <stop offset="0%" :stop-color="color1" />
        <stop offset="100%" :stop-color="color2" />
      </radialGradient>
    </defs>
    
    <!-- 背景矩形 -->
    <rect 
      width="100%" 
      height="100%" 
      :fill="`url(#headerGradient-${uid})`" 
      :rx="radius" 
      :ry="radius"
    />
    
    <!-- 标题文字 -->
    <text 
      x="50%" 
      y="50%" 
      text-anchor="middle" 
      dominant-baseline="middle"
      :fill="textColor"
      :font-size="fontSize"
      font-weight="bold"
    >
      {{ title }}
    </text>
    
    <!-- 装饰线条 -->
    <line 
      x1="10%" 
      y1="90%" 
      x2="90%" 
      y2="90%" 
      :stroke="lineColor"
      stroke-width="2"
      stroke-dasharray="5,3"
    />
  </svg>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps({
  width: { type: Number, default: 800 },
  height: { type: Number, default: 80 },
  title: { type: String, default: '标题' },
  color1: { type: String, default: '#3a7afe' },
  color2: { type: String, default: '#00f9ff' },
  textColor: { type: String, default: '#ffffff' },
  lineColor: { type: String, default: '#ffffff' },
  fontSize: { type: String, default: '24px' },
  radius: { type: Number, default: 8 },
  angle: { type: Number, default: 0 }, // 0-360度控制线性渐变方向
  gradientType: { 
    type: String as () => 'linear' | 'radial', 
    default: 'linear' 
  }, // 渐变类型
  radialCenterX: { type: Number, default: 50 }, // 圆形渐变中心X(百分比)
  radialCenterY: { type: Number, default: 50 }, // 圆形渐变中心Y(百分比)
  radialRadius: { type: Number, default: 50 } // 圆形渐变半径(百分比)
});

// 根据角度计算渐变坐标 (0度时为从左到右的水平渐变)
const gradientStartX = computed(() => {
  const rad = (props.angle * Math.PI) / 180;
  return `${50 - 50 * Math.cos(rad)}%`;
});

const gradientStartY = computed(() => {
  const rad = (props.angle * Math.PI) / 180;
  return `${50 + 50 * Math.sin(rad)}%`;
});

const gradientEndX = computed(() => {
  const rad = (props.angle * Math.PI) / 180;
  return `${50 + 50 * Math.cos(rad)}%`;
});

const gradientEndY = computed(() => {
  const rad = (props.angle * Math.PI) / 180;
  return `${50 - 50 * Math.sin(rad)}%`;
});

const uid =  Math.random().toString(36).substring(2);
</script>
