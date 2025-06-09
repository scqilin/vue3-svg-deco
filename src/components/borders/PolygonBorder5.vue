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
/* <polygon points="10,10 290,10 300,20 300,180 290,190 210,190 200,200 100,200 90,190 10,190 0,180 0,20" fill="none" stroke="#00f9ff" stroke-width="1"></polygon> */
const props = defineProps({
  width: { type: Number, default: 300 },
  height: { type: Number, default: 200 },
  duration: { type: String, default: '10s' },
  color: { type: String, default: '#00f9ff' },
  strokeWidth: { type: Number, default: 1 },
  cornerSize: { type: Number, default: 10 }
});
const computedPoints = computed(() => {
  const { width, height, cornerSize = 10, strokeWidth = 0 } = props;
  const halfStroke = strokeWidth / 2;
  
  // 动态计算关键点（保持与示例完全相同的结构比例）
  return [
    // 左上水平线起点（示例中的10,10）
    [cornerSize + halfStroke, halfStroke],
    
    // 上边线终点（示例中的290,10）
    [width - cornerSize - halfStroke, halfStroke],
    
    // 右上角转折（示例中的300,20）
    [width - halfStroke, cornerSize  + halfStroke],
    
    // 右边线终点（示例中的300,180）
    [width - halfStroke, height - cornerSize * 2 - halfStroke],
    
    // 右下角转折（示例中的290,190）
    [width - cornerSize - halfStroke, height - cornerSize - halfStroke],
    
    // 凹陷起点（示例中的210,190）
    [width - cornerSize * 9 - halfStroke, height - cornerSize - halfStroke],
    
    // 凹陷底部（示例中的200,200）
    [width - cornerSize * 10 - halfStroke, height - halfStroke],
    
    // 凹陷左侧（示例中的100,200）
    [cornerSize * 10 + halfStroke, height - halfStroke],
    
    // 凹陷终点（示例中的90,190）
    [cornerSize * 9 + halfStroke, height - cornerSize - halfStroke],
    
    // 左下角转折（示例中的10,190）
    [cornerSize + halfStroke, height - cornerSize - halfStroke],
    
    // 左边线起点（示例中的0,180）
    [halfStroke, height - cornerSize * 2 - halfStroke],
    
    // 左上角转折（示例中的0,20）
    [halfStroke, cornerSize + halfStroke]
  ].map(p => p.join(',')).join(' ');
});



</script>
