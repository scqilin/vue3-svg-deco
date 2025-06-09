<template>
  <svg :width="width" :height="height" xmlns="http://www.w3.org/2000/svg">
    <polygon 
      :points="computedPoints"
      fill="none" 
      :stroke="color" 
      :stroke-width="strokeWidth"
      stroke-dasharray="10,10"
      stroke-linecap="round"
    >
      <animate
        attributeName="stroke-dashoffset"
        from="0"
        to="-200"
        :dur="duration"
        repeatCount="indefinite"
      />
    </polygon>
    <ForeignObjectWrapper :xy="strokeWidth" :width="width" :height="height">
      <slot></slot>
    </ForeignObjectWrapper>
  </svg>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import ForeignObjectWrapper from '../common/ForeignObjectWrapper.vue';

const props = defineProps({
  width: { type: Number, default: 200 },
  height: { type: Number, default: 200 },
  color: { type: String, default: '#00f9ff' },
  strokeWidth: { type: Number, default: 4 },
  duration: { type: String, default: '10s' },
  bevelSize: { type: Number, default: 20 } // 斜角尺寸控制
});

const computedPoints = computed(() => {
  const { width, height, bevelSize, strokeWidth } = props;
  const inset = strokeWidth / 2;
  
  // 计算关键点坐标（考虑描边宽度）
  const points = [
    [bevelSize + inset, inset],                              // 左上内点
    [width - bevelSize - inset, inset],                     // 右上内点
    [width - inset, bevelSize + inset],                     // 右上外点
    [width - inset, height - bevelSize - inset],            // 右下外点
    [width - bevelSize - inset, height - inset],            // 右下内点
    [bevelSize + inset, height - inset],                    // 左下内点
    [inset, height - bevelSize - inset],                    // 左下外点
    [inset, bevelSize + inset]                              // 左上外点
  ];

  // 闭合路径
  return points.map(p => p.join(',')).join(' ');
});
</script>
