<template>
  <PolygonBorderBase
    v-bind="props"
    :computedPoints="computedPoints"
  >
    <slot></slot>
  </PolygonBorderBase>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import PolygonBorderBase from './PolygonBorderBase.vue';
/*<polygon points="0,15 15,0 285,0 300,15 300,185 285,200 210,200 200,190 100,190 90,200 15,200 0,185" fill="none" stroke="#00f9ff" stroke-width="1"></polygon> */
const props = defineProps({
  width: { type: Number, default: 300 },
  height: { type: Number, default: 200 },
  duration: { type: String, default: '10s' },
  color: { type: String, default: '#00f9ff' },
  strokeWidth: { type: Number, default: 1 },
  cornerSize: { type: Number, default: 12 },
});

const computedPoints = computed(() => {
  const { width, height, cornerSize, strokeWidth } = props;
  const halfStroke = strokeWidth / 2;

  // 基础坐标计算（完全对应示例结构）
  return [
    // 左上角斜切（从原点开始）
    [halfStroke, cornerSize + halfStroke],
    [cornerSize + halfStroke, halfStroke],

    // 上边线（减去右角）
    [width - cornerSize - halfStroke, halfStroke],

    // 右上角斜切
    [width - halfStroke, cornerSize + halfStroke],
    
    // 右边线（减去下角）
    [width - halfStroke, height - cornerSize - halfStroke],
    
    // 右下角斜切
    [width - cornerSize - halfStroke, height - halfStroke],
    
    // 底部凹陷右侧平台
    [width - cornerSize * 5 - halfStroke, height - halfStroke],
    
    // 凹陷右侧斜坡
    [width - cornerSize * 6 - halfStroke, height - cornerSize - halfStroke],
    
    // 凹陷左侧斜坡
    [cornerSize * 6 + halfStroke, height - cornerSize - halfStroke],
    
    // 底部凹陷左侧平台
    [cornerSize * 5 + halfStroke, height - halfStroke],
    
    // 左下角斜切
    [cornerSize + halfStroke, height - halfStroke],
    [halfStroke, height - cornerSize - halfStroke]
  ].map(p => p.join(',')).join(' ');
});


</script>
