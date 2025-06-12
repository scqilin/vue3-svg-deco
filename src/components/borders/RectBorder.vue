<template>
  <DecoDiv :width = props.width :height="props.height">
    <slot></slot>
    <template #svg>
      <BaseRect v-bind="props" :width="props.width" :height="props.height" />
    </template>
  </DecoDiv>
</template>

<script setup lang="ts">
import { BaseRect } from '../baseGraph';
import DecoDiv from '@/components/common/DecoDiv.vue';
import { baseGraphProps, rectProps } from '../baseGraph/props';
/* 基本Rect边框  */
const props = defineProps({
  ...baseGraphProps,
  ...rectProps
});
</script>
