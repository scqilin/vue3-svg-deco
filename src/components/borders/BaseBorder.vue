<template>
  <DecoDiv :width = props.width :height="props.height">
    <slot></slot>
    <template #svg>
      <!-- 左上角折线 -->
      <BasePolyline v-bind="props" :points="lt" />
      <!-- 右上角折线 -->
      <BasePolyline v-bind="props" :points="rt(props.width)" />
      <!-- 右下角折线 -->
      <BasePolyline v-bind="props" :points="rb(props.width, props.height)" />
      <!-- 左下角折线 -->
      <BasePolyline v-bind="props" :points="lb(props.height)" />
    </template>
  </DecoDiv>
</template>

<script setup lang="ts">
import { baseGraphProps } from '../baseGraph/props';
import { BasePolyline } from '../baseGraph';
import DecoDiv from '../common/DecoDiv.vue';
import { computed } from 'vue';

/**
 * BaseBorder 组件属性
 * @property {number} [width=300] - 边框宽度
 * @property {number} [height=200] - 边框高度
 * @property {string} [fill="none"] - 填充色
 * @property {string} [stroke="#00f9ff"] - 边框颜色
 * @property {number} [strokeWidth=1] - 边框线宽
 * @property {string} [dur="0"] - 动画时长
 * @property {string} [strokeDasharray="0,0"] - 虚线样式
 * @property {string} [dashoffsetValues="0;-100"] - 虚线动画值
 * @property {"round"|"square"|"butt"} [round="round"] - 线帽样式
 * @property {string[]} [colors=["#00f9ff", "#ff00ff"]] - 渐变色
 * @property {number} [cornerLen=12] - 四角直角边长
 */
const props = defineProps({
  ...baseGraphProps,
  cornerLen: { type: Number, default: 12 } // 四角直角边长
});

/**
 * 线宽，默认为 1
 */
const strokeWidth = computed(() => Number(props.strokeWidth) || 1);

/**
 * 偏移量，等于线宽的一半
 */
const offset = computed(() => strokeWidth.value / 2);

/**
 * 左上角折线点
 */
const lt = `${offset.value},${props.cornerLen + offset.value} ${offset.value},${offset.value} ${props.cornerLen + offset.value},${offset.value}`;
/**
 * 右上角折线点
 * @param {number} slotWidth - 插槽宽度
 */
const rt = (slotWidth: number) => `${slotWidth - props.cornerLen - offset.value},${offset.value} ${slotWidth - offset.value},${offset.value} ${slotWidth - offset.value},${props.cornerLen + offset.value}`;
/**
 * 右下角折线点
 * @param {number} slotWidth - 插槽宽度
 * @param {number} slotHeight - 插槽高度
 */
const rb = (slotWidth: number, slotHeight: number) => `${slotWidth - offset.value},${slotHeight - props.cornerLen - offset.value} ${slotWidth - offset.value},${slotHeight - offset.value} ${slotWidth - props.cornerLen - offset.value},${slotHeight - offset.value}`;
/**
 * 左下角折线点
 * @param {number} slotHeight - 插槽高度
 */
const lb = (slotHeight: number) => `${props.cornerLen + offset.value},${slotHeight - offset.value} ${offset.value},${slotHeight - offset.value} ${offset.value},${slotHeight - props.cornerLen - offset.value}`;
</script>
