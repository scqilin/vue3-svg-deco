<script setup lang="ts">
import {
  BaseBorder, GradientBorder, RectBorder,
  PolygonBorder1, PolygonBorder2, PolygonBorder3, PolygonBorder4, PolygonBorder5, PolygonBorder6
} from '@/components/borders';

import { Header } from '@/components/headers';

const width = 400;
const height = 100;
const strokeWidth = 2;
const stroke = '#34a264'; //00f9ff
const color2 = '#ff00ff';
const dashoffsetAnimate = false;
</script>

<template>
  <div class="demo-container">
    <!-- <Header :width="1200" :height="80" title="水平渐变 (0度)" color1="#3a7afe" color2="#00f9ff" textColor="#ffff00" lineColor="#ffffff" fontSize="24px" :radius="18" :angle="0"/>
    <Header :width="1200" :height="80" title="45度渐变" color1="#3a7afe" color2="#00f9ff"  lineColor="#ffffff" fontSize="24px" :radius="18" :angle="45"/>
    <Header :width="1200" :height="80" title="垂直渐变 (90度)" color1="#3a7afe" color2="#00f9ff" lineColor="#ffffff" fontSize="24px" :radius="18" :angle="90"/>
    <Header :width="1200" :height="80" title="圆形渐变" color1="#00f9ff" color2="#3a7afe90" textColor="#ffffff" lineColor="#ffffff" fontSize="24px" :radius="18" gradientType="radial" :radialCenterX="50" :radialCenterY="50" :radialRadius="40"/> -->
    <RectBorder :strokeWidth="strokeWidth" :stroke="stroke">
      <div class="border-content">
        <span>矩形边框</span>
      </div>
    </RectBorder>
    <BaseBorder :strokeWidth="strokeWidth" :stroke="'#45d323'">
      <div class="border-content">
        <span>基础边框</span>
      </div>
    </BaseBorder>
    <BaseBorder :strokeWidth="strokeWidth" :dur="'12s'" :strokeDasharray="'12,8'">
      <div class="border-content">
        <span>基础边框</span>
      </div>
    </BaseBorder>
    <BaseBorder :strokeWidth="strokeWidth" :stroke="stroke" :fill="'none'" :rxy="10" :dur="'10s'"
      :strokeDasharray="'8,4'" :dashoffsetValues="'0;120;0'">
      <div class="border-content">
        <span>基础边框</span>
      </div>
    </BaseBorder>
    <GradientBorder :strokeWidth="strokeWidth" :colors="['#ff0000', '#00ffff']" :angle="45" :dur="'5s'"
      :strokeDasharray="'8,4'">
      <div class="border-content">
        <span>渐变边框</span>
      </div>
    </GradientBorder>
    <GradientBorder :strokeWidth="strokeWidth" :dur="'3s'" :strokeDasharray="'8,4'">
      <div class="border-content">
        <span>渐变边框</span>
      </div>
    </GradientBorder>

    <PolygonBorder1 :bevelSize="15">
      <div class="border-content" >
        <span>多边形边框1</span>
      </div>
    </PolygonBorder1>
    <PolygonBorder1 :strokeWidth="strokeWidth" :stroke="stroke" :strokeDasharray="'12,8'" :dur="'5s'" :dashoffsetValues="'0;40;0'">
      <div class="border-content">
        <span>多边形边框2</span>
      </div>
    </PolygonBorder1>
    <PolygonBorder2 :bevelSize="10">
      <div class="border-content" >
        <span>阶梯状圆角边框1</span>
      </div>
    </PolygonBorder2>
    <PolygonBorder2 :strokeWidth="strokeWidth" :stroke="stroke" :bevelSize="5" :strokeDasharray="'12,8'" :dur="'10s'">
      <div class="border-content">
        <span>阶梯状圆角边框2</span>
      </div>
    </PolygonBorder2>
    <PolygonBorder3 :strokeWidth="strokeWidth" :stroke="stroke" :bevelSize="4">
      <div class="border-content">
        <span>斜切边框</span>
      </div>
    </PolygonBorder3>
    <PolygonBorder4 :strokeWidth="strokeWidth" :stroke="stroke" :bevelSize="6">
      <div class="border-content">
        <span>圆角边框</span>
      </div>
    </PolygonBorder4>
    <PolygonBorder5 :strokeWidth="strokeWidth" :stroke="stroke" :strokeDasharray="'12,8'" :dur="'10s'">
      <div class="border-content">
        <span>复杂斜切边框</span>
      </div>
    </PolygonBorder5>
    <PolygonBorder6 :strokeWidth="strokeWidth" :stroke="stroke" >
      <div class="border-content">
        <span>复杂阶梯斜切边框</span>
      </div>
    </PolygonBorder6>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(5, minmax(100px, 1fr));
  gap: 1rem;

  &>* {
    background: rgba(255, 255, 255, 0.1);
    min-height: 200px;
  }
}

.border-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
</style>
