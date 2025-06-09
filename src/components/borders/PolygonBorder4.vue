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
/* <polygon points="5,5 15,0 25,10 35,0 45,10 255,10 265,0 275,10 285,0 
295,10 300,20 300,180 295,190 285,180 275,190 265,180 
45,180 35,190 25,180 15,190 5,180 0,170 0,20" fill="none" stroke="#00f9ff" stroke-width="1" stroke-opacity="0.3"></polygon> */
const props = defineProps({
  width: { type: Number, default: 300 },
  height: { type: Number, default: 200 },
  duration: { type: String, default: '10s' },
  color: { type: String, default: '#00f9ff' },
  strokeWidth: { type: Number, default: 1 },
  cornerSize: { type: Number, default: 10 } // 锯齿大小属性
});
const computedPoints = computed(() => {
  const { width, height, cornerSize = 10, strokeWidth = 0 } = props;
  const halfStroke = strokeWidth / 2;
  
  // 动态计算关键点
  return [
    // 左上起始点 (5,5)
    [cornerSize/2 + halfStroke, cornerSize/2 + halfStroke],
    
    // 顶部左侧锯齿 (15,0 → 45,10)
    [cornerSize*1.5 + halfStroke, halfStroke],
    [cornerSize*2.5 + halfStroke, cornerSize + halfStroke],
    [cornerSize*3.5 + halfStroke, halfStroke],
    [cornerSize*4.5 + halfStroke, cornerSize + halfStroke],
    
    // 顶部右侧锯齿 (255,10 → 295,10)
    [width - cornerSize*4.5 - halfStroke, cornerSize + halfStroke],
    [width - cornerSize*3.5 - halfStroke, halfStroke],
    [width - cornerSize*2.5 - halfStroke, cornerSize + halfStroke],
    [width - cornerSize*1.5 - halfStroke, halfStroke],
    [width - cornerSize/2 - halfStroke, cornerSize + halfStroke],
    
    // 右上转折点 (300,20)
    [width - halfStroke, cornerSize*2 + halfStroke],
    
    // 右侧垂直线 (300,180)
    [width - halfStroke, height - cornerSize*2 - halfStroke],
    
    // 底部右侧锯齿 (295,190 → 265,180)
    [width - cornerSize/2 - halfStroke, height - cornerSize - halfStroke],
    [width - cornerSize*1.5 - halfStroke, height - cornerSize*2 - halfStroke],
    [width - cornerSize*2.5 - halfStroke, height - cornerSize - halfStroke],
    [width - cornerSize*3.5 - halfStroke, height - cornerSize*2 - halfStroke],
    
    // 底部左侧锯齿 (45,180 → 5,180)
    [cornerSize*4.5 + halfStroke, height - cornerSize*2 - halfStroke],
    [cornerSize*3.5 + halfStroke, height - cornerSize - halfStroke],
    [cornerSize*2.5 + halfStroke, height - cornerSize*2 - halfStroke],
    [cornerSize*1.5 + halfStroke, height - cornerSize - halfStroke],
    [cornerSize/2 + halfStroke, height - cornerSize*2 - halfStroke],
    
    // 左下转折点 (0,170)
    [halfStroke, height - cornerSize*3 - halfStroke],
    
    // 左侧垂直线 (0,20)
    [halfStroke, cornerSize*2 + halfStroke]
  ].map(p => p.join(',')).join(' ');
});


</script>
