<template>
  <DecoDiv>
    <slot></slot>
    <template #svg="{ slotWidth, slotHeight }">
      <!-- 左上角折线 -->
      <BasePolyline v-bind="props" :points="lt" />
      <!-- 右上角折线 -->
      <BasePolyline v-bind="props" :points="rt(slotWidth)" />
      <!-- 右下角折线 -->
      <BasePolyline v-bind="props" :points="rb(slotWidth, slotHeight)" />
      <!-- 左下角折线 -->
      <BasePolyline v-bind="props" :points="lb(slotHeight)" />
    </template>
  </DecoDiv>
</template>

<script setup lang="ts">
import { baseGraphProps } from '../baseGraph/props';
import { BasePolyline } from '../baseGraph';
import DecoDiv from '../common/DecoDiv.vue';
import { computed } from 'vue';

const props = defineProps({
  ...baseGraphProps,
  cornerLen: { type: Number, default: 12 } // 四角直角边长
});

const strokeWidth = computed(() => Number(props.strokeWidth) || 1);
const offset = computed(() => strokeWidth.value / 2);

const lt = `${offset.value},${props.cornerLen + offset.value} ${offset.value},${offset.value} ${props.cornerLen + offset.value},${offset.value}`;
const rt = (slotWidth: number) => `${slotWidth - props.cornerLen - offset.value},${offset.value} ${slotWidth - offset.value},${offset.value} ${slotWidth - offset.value},${props.cornerLen + offset.value}`;
const rb = (slotWidth: number, slotHeight: number) => `${slotWidth - offset.value},${slotHeight - props.cornerLen - offset.value} ${slotWidth - offset.value},${slotHeight - offset.value} ${slotWidth - props.cornerLen - offset.value},${slotHeight - offset.value}`;
const lb = (slotHeight: number) => `${props.cornerLen + offset.value},${slotHeight - offset.value} ${offset.value},${slotHeight - offset.value} ${offset.value},${slotHeight - props.cornerLen - offset.value}`;
</script>
