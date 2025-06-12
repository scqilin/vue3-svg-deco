<template>
  <DecoDiv :width = props.width :height="props.height">
    <slot></slot>
    <template #svg>
      <defs>
        <linearGradient v-if="gradientType === 'linear'" :id="`headerGradient-${uid}`" :x1="gradientStartX"
          :y1="gradientStartY" :x2="gradientEndX" :y2="gradientEndY">
          <stop offset="0%" :stop-color="color1" />
          <stop offset="100%" :stop-color="color2" />
        </linearGradient>
        <radialGradient v-else :id="`headerGradient-${uid}`" :cx="`${radialCenterX}%`" :cy="`${radialCenterY}%`"
          :r="`${radialRadius}%`" fx="50%" fy="50%">
          <stop offset="0%" :stop-color="color1" />
          <stop offset="100%" :stop-color="color2" />
        </radialGradient>
      </defs>
      <rect :width="props.width" :height="props.height" :fill="`url(#headerGradient-${uid})`" :rx="radius" :ry="radius" />
      <!-- 标题文字 -->
      <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" :fill="textColor" :font-size="fontSize"
        font-weight="bold">
        {{ title }}
      </text>
      <line :x1="props.width * 0.1" :y1="props.height * 0.9" :x2="props.width * 0.9" :y2="props.height * 0.9"
        :stroke="lineColor" stroke-width="2" stroke-dasharray="5,3" />
    </template>
  </DecoDiv>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import DecoDiv from '@/components/common/DecoDiv.vue';
import { getUid } from '@/utils/uid';

const props = defineProps({
  width: { type: Number, default: 300 },
  height: { type: Number, default: 100 },
  title: { type: String, default: '' },
  color1: { type: String, default: '#3a7afe' },
  color2: { type: String, default: '#00f9ff' },
  textColor: { type: String, default: '#ffffff' },
  lineColor: { type: String, default: '#ffffff' },
  fontSize: { type: String, default: '24px' },
  radius: { type: Number, default: 8 },
  angle: { type: Number, default: 0 },
  gradientType: {
    type: String as () => 'linear' | 'radial',
    default: 'linear'
  },
  radialCenterX: { type: Number, default: 50 },
  radialCenterY: { type: Number, default: 50 },
  radialRadius: { type: Number, default: 50 }
});

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

const uid = getUid();

</script>

<style scoped></style>
