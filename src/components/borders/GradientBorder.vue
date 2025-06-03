<template>
  <div class="svg-border">
    <svg :width="width" :height="height" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" :stop-color="color" />
          <stop offset="100%" :stop-color="color2 || color" />
        </linearGradient>
      </defs>
      <path 
        :d="borderPath" 
        stroke="url(#gradient)" 
        fill="transparent" 
        :stroke-width="props.strokeWidth"
      />
      <foreignObject :x="props.strokeWidth * 10" :y="props.strokeWidth * 10" 
                    :width="width - props.strokeWidth * 20" 
                    :height="height - props.strokeWidth * 20">
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
  color2: { type: String },
  strokeWidth: { type: Number, default: 2 }
});

const borderPath = computed(() => {
  const { width, height, strokeWidth } = props;
  const offset = strokeWidth / 2;
   return `M${offset},${offset} L${width - offset},${offset} L${width - offset},${height - offset} L${offset},${height - offset} Z`;
});
</script>

<style scoped>
.svg-border {
  display: inline-block;
}
</style>
