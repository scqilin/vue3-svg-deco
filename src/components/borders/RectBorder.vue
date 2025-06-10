<template>
  <DecoDiv>
    <slot></slot>
    <template #svg="{ slotWidth, slotHeight }">
      <BaseRect v-bind="props" :width="slotWidth" :height="slotHeight" />
    </template>
  </DecoDiv>
</template>

<script setup lang="ts">
import { BaseRect } from '../baseGraph';
import DecoDiv from '../common/DecoDiv.vue';
import { baseGraphProps, rectProps } from '../baseGraph/props';
/* 基本Rect边框  */
const props = defineProps({
  ...baseGraphProps,
  ...rectProps
});
</script>
