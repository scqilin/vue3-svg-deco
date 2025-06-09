<script setup lang="ts">
import { BaseBorder, GradientBorder, AnimatedDashedBorder, 
PolygonBorder1, PolygonBorder2, PolygonBorder3,  PolygonBorder4, PolygonBorder5, PolygonBorder6
 } from './components/borders';

 import  { Header } from './components/headers';

 const width = 300;
 const height = 200;
 const strokeWidth = 1;
 const stroke = '#00f9ff';
 const color2 = '#ff00ff';
 const dashoffsetAnimate = false;
</script>

<template>
  <div class="demo-container">
    <Header :width="1200" :height="80" title="水平渐变 (0度)" color1="#3a7afe" color2="#00f9ff" textColor="#ffff00" lineColor="#ffffff" fontSize="24px" :radius="18" :angle="0"/>
    <Header :width="1200" :height="80" title="45度渐变" color1="#3a7afe" color2="#00f9ff"  lineColor="#ffffff" fontSize="24px" :radius="18" :angle="45"/>
    <Header :width="1200" :height="80" title="垂直渐变 (90度)" color1="#3a7afe" color2="#00f9ff" lineColor="#ffffff" fontSize="24px" :radius="18" :angle="90"/>
    <Header :width="1200" :height="80" title="圆形渐变" color1="#00f9ff" color2="#3a7afe90" textColor="#ffffff" lineColor="#ffffff" fontSize="24px" :radius="18" gradientType="radial" :radialCenterX="50" :radialCenterY="50" :radialRadius="40"/>

    <BaseBorder :width="width" :height="height">
      <div class="border-content">
        <span>基础边框</span>
      </div>
    </BaseBorder>
    <BaseBorder :width="width" :height="height" :strokeWidth="strokeWidth" :stroke="stroke" :fill="'none'" :rxy="10" :dur="'10s'" :strokeDasharray="'8,4'" :dashoffsetValues="'0;120;0'">
      <div class="border-content">
        <span>基础边框</span>
      </div>
    </BaseBorder>
    <GradientBorder :width="width" :height="height" :strokeWidth="strokeWidth" :stroke="color2" :color2="stroke">
      <div class="border-content">
        <span>渐变边框</span>
      </div>
    </GradientBorder>
    <AnimatedDashedBorder :width="width" :height="height" :strokeWidth="strokeWidth" :stroke="color2" :padding="2" duration="12s">
      <div class="border-content">
        <span>动画虚线边框</span>
      </div>
    </AnimatedDashedBorder>
    <PolygonBorder1 :width="width" :height="height" :strokeWidth="strokeWidth" :stroke="stroke">
      <div class="border-content">
        <span>多边形边框</span>
      </div>
    </PolygonBorder1>
    <PolygonBorder2 :width="width" :height="height" :strokeWidth="strokeWidth" :stroke="stroke" :dashoffsetAnimate="dashoffsetAnimate">
      <div class="border-content">
        <span>阶梯状圆角边框</span>
      </div>
    </PolygonBorder2>
    <PolygonBorder3 :width="width" :height="height" :strokeWidth="strokeWidth" :stroke="stroke" :dashoffsetAnimate="dashoffsetAnimate">
      <div class="border-content">
        <span>斜切边框</span>
      </div>
    </PolygonBorder3>
    <PolygonBorder4 :width="width" :height="height" :strokeWidth="strokeWidth" :stroke="stroke" :dashoffsetAnimate="dashoffsetAnimate">
      <div class="border-content">
        <span>圆角边框</span>
      </div>
    </PolygonBorder4>
    <PolygonBorder5 :width="width" :height="height" :strokeWidth="strokeWidth" :stroke="stroke" :dashoffsetAnimate="dashoffsetAnimate">
      <div class="border-content">
        <span>复杂斜切边框</span>
      </div>
    </PolygonBorder5>
    <PolygonBorder6 :width="width" :height="height" :strokeWidth="strokeWidth" :stroke="stroke" :dashoffsetAnimate="dashoffsetAnimate">
      <div class="border-content">
        <span>复杂阶梯斜切边框</span>
      </div>
    </PolygonBorder6>

    
  </div>
</template>

<style scoped>
.demo-container {
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  /* 子元素加背景 */
  & > * {
    background: rgba(255, 255, 255, 0.1);
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
