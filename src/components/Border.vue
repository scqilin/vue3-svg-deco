<template>
  <div class="svg-border">
    <svg :width="width" :height="height" xmlns="http://www.w3.org/2000/svg">
      <!-- 动态路径，支持不同风格 -->
      <path 
        :d="borderPath" 
        :stroke="color" 
        fill="transparent" 
        stroke-width="2"
      />
      <!-- 插槽，允许用户嵌入内容 -->
      <foreignObject x="20" y="20" :width="width - 40" :height="height - 40">
        <slot></slot>
      </foreignObject>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  width: { type: Number, default: 300 },
  height: { type: Number, default: 200 },
  color: { type: String, default: '#3a7afe' },
  type: { type: String, default: 'tech' }, // 'tech' | 'gradient' | 'neon'
});

// 根据不同风格返回不同的 SVG Path
const borderPath = computed(() => {
  const { width, height, type } = props;
  if (type === 'tech') {
    return `M10,10 L${width - 10},10 L${width - 10},${height - 10} L10,${height - 10} Z`;
  } else if (type === 'gradient') {
    return `M5,5 Q${width / 2},0 ${width - 5},5 T${width - 5},${height - 5} T5,${height - 5} T5,5`;
  }
  return ''; // 其他风格...
});
</script>

<style scoped>
.svg-border {
  display: inline-block;
}
</style>
