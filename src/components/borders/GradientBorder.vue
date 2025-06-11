<template>
  <DecoDiv>
    <slot></slot>
    <template #svg="{ slotWidth, slotHeight }">
      <defs>
        <linearGradient :id="`gradient-${uid}`" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" :stop-color="colors[0]" />
          <stop offset="100%" :stop-color="colors[1] || colors[0]" />
          <animateTransform 
            attributeName="gradientTransform"
            type="rotate"
            from="0 0.5 0.5"
            to="360 0.5 0.5"
            :dur="dur"
            repeatCount="indefinite"
          />
        </linearGradient>
      </defs>
      <BaseRect v-bind="props" :width="slotWidth" :height="slotHeight" :stroke="`url(#gradient-${uid})`"/>
    </template>
  </DecoDiv>
</template>
<!-- todo: 两个dur 没有区分 linearGradient没有提取-->
<script setup lang="ts">
import { BaseRect } from '../baseGraph';
import { baseGraphProps, rectProps } from '../baseGraph/props';
import { getUid } from '@/utils/uid';
import DecoDiv from '../common/DecoDiv.vue';
const uid = getUid();

const props = defineProps({
  ...baseGraphProps,
  ...rectProps
});

</script>

<style scoped>
</style>