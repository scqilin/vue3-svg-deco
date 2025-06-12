<script setup lang="ts">
import {
  BaseBorder, GradientBorder, RectBorder,
  PolygonBorder1, PolygonBorder2, PolygonBorder3, PolygonBorder4, PolygonBorder5, PolygonBorder6,
  PolygonBorder7, PolygonBorder8, PolygonBorder9, PolygonBorder10
} from '@/components/borders';

import { Header } from '@/components/headers';

const strokeWidth = 2;
const stroke = '#34a264'; //00f9ff
const width = 200;
const height = 100;
</script>

<template>
  <div class="header-container">
    <Header :width="width" :height="height" color1="#3a7afe" color2="#00f9ff" textColor="#ffff00" lineColor="#ffffff" fontSize="24px" :radius="18"
      :angle="0">
      <div class="border-content">
        <span>水平渐变 (0度)</span>
      </div>
    </Header>
    <Header :width="width" :height="height"  title="45度渐变" color1="#3a7afe" color2="#00f9ff" lineColor="#ffffff" fontSize="24px" :radius="18"
      :angle="45">
    </Header>
    <Header :width="width" :height="height"  title="垂直渐变 (90度)" color1="#3a7afe" color2="#00f9ff" lineColor="#ffffff" fontSize="24px" :radius="18"
      :angle="90">
      <div class="border-content">
        <span>垂直渐变 (90度)</span>
      </div>
    </Header>
    <Header :width="width" :height="height" title="圆形渐变" color1="#00f9ff" color2="#3a7afe90" textColor="#ffffff" lineColor="#ffffff" fontSize="24px"
      :radius="18" gradientType="radial" :radialCenterX="50" :radialCenterY="50" :radialRadius="40">
      <div class="border-content">
        <span>圆形渐变</span>
      </div>
    </Header>
  </div>
  <div class="demo-container">

    <RectBorder :strokeWidth="strokeWidth" :stroke="stroke" :width="width" :height="height">
      <div class="border-content">
        <span>矩形边框</span>
      </div>
    </RectBorder>
    <BaseBorder :strokeWidth="strokeWidth" :stroke="'#45d323'" :width="width" :height="height">
      <div class="border-content">
        <span>基础边框</span>
      </div>
    </BaseBorder>
    <BaseBorder :strokeWidth="strokeWidth" :dur="'12s'" :strokeDasharray="'12,8'" :width="width" :height="height">
      <div class="border-content">
        <span>基础边框</span>
      </div>
    </BaseBorder>
    <BaseBorder :strokeWidth="strokeWidth" :stroke="stroke" :fill="'none'" :rxy="10" :dur="'10s'"
      :strokeDasharray="'8,4'" :dashoffsetValues="'0;120;0'" :width="width" :height="height">
      <div class="border-content">
        <span>基础边框</span>
      </div>
    </BaseBorder>
    <GradientBorder :strokeWidth="strokeWidth" :colors="['#ff0000', '#00ffff']" :angle="45" :dur="'5s'"
      :strokeDasharray="'8,4'" :width="width" :height="height">
      <div class="border-content">
        <span>渐变边框</span>
      </div>
    </GradientBorder>
    <GradientBorder :strokeWidth="strokeWidth" :dur="'3s'" :strokeDasharray="'8,4'" :width="width" :height="height">
      <div class="border-content">
        <span>渐变边框</span>
      </div>
    </GradientBorder>

    <PolygonBorder1 :bevelSize="15" :width="width" :height="height">
      <div class="border-content">
        <span>多边形边框1</span>
      </div>
    </PolygonBorder1>
    <PolygonBorder1 :strokeWidth="strokeWidth" :stroke="stroke" :strokeDasharray="'12,8'" :dur="'5s'"
      :dashoffsetValues="'0;40;0'" :width="width" :height="height">
      <div class="border-content">
        <span>多边形边框2</span>
      </div>
    </PolygonBorder1>
    <PolygonBorder2 :bevelSize="10" :width="width" :height="height">
      <div class="border-content">
        <span>阶梯状圆角边框1</span>
      </div>
    </PolygonBorder2>
    <PolygonBorder2 :strokeWidth="strokeWidth" :stroke="stroke" :bevelSize="5" :strokeDasharray="'12,8'" :dur="'10s'" :width="width" :height="height">
      <div class="border-content">
        <span>阶梯状圆角边框2</span>
      </div>
    </PolygonBorder2>
    <PolygonBorder3 :strokeWidth="strokeWidth" :stroke="stroke" :bevelSize="4" :width="width" :height="height">
      <div class="border-content">
        <span>斜切边框</span>
      </div>
    </PolygonBorder3>
    <PolygonBorder4 :strokeWidth="strokeWidth" :stroke="stroke" :bevelSize="6" :width="width" :height="height">
      <div class="border-content">
        <span>圆角边框</span>
      </div>
    </PolygonBorder4>
    <PolygonBorder5 :strokeWidth="strokeWidth" :stroke="stroke" :strokeDasharray="'12,8'" :dur="'10s'" :width="width" :height="height">
      <div class="border-content">
        <span>复杂斜切边框</span>
      </div>
    </PolygonBorder5>
    <PolygonBorder6 :strokeWidth="strokeWidth" :stroke="stroke" :width="width" :height="height">
      <div class="border-content">
        <span>复杂阶梯斜切边框</span>
      </div>
    </PolygonBorder6>
    <PolygonBorder7 :strokeWidth="strokeWidth" :stroke="stroke" :width="width" :height="height">
      <div class="border-content">
        <span>上下凹槽边框</span>
      </div>
    </PolygonBorder7>
    <PolygonBorder8 :strokeWidth="strokeWidth" :stroke="stroke" :width="width" :height="height">
      <div class="border-content">
        <span>8波浪形边框</span>
      </div>
    </PolygonBorder8>
    <PolygonBorder9 :strokeWidth="strokeWidth" :stroke="stroke" :width="width" :height="height">
      <div class="border-content">
        <span>9波浪形边框</span>
      </div>
    </PolygonBorder9>
    <PolygonBorder10 :strokeWidth="10" :stroke="stroke" :width="width" :height="height">
      <div class="border-content">
        <span>10波浪形边框1</span>
      </div>
    </PolygonBorder10>
    <PolygonBorder10 :strokeWidth="12" :stroke="'#00f4a0'" :strokeDasharray="'20,5'" :dur="'10s'" :width="width" :height="height">
      <div class="border-content">
        <span>10波浪形边框2</span>
      </div>
    </PolygonBorder10>
  </div>
</template>

<style scoped>
.header-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;

  &>* {
    width: 200px;
    height: 100px;
  }

}

.demo-container {
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  gap: 1rem;

  &>* {
    background: rgba(255, 255, 255, 0.1);
    width: 200px;
    height: 100px;
  }
}

.border-content {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
</style>
