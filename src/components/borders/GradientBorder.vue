<template>
  <div class="svg-border">
    <svg :width="width" :height="height" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" :stop-color="color" />
          <stop offset="50%" stop-color="#00ff00" />
          <stop offset="100%" :stop-color="color2 || color" />
          <animateTransform 
            attributeName="gradientTransform"
            type="rotate"
            from="0 0.5 0.5"
            to="360 0.5 0.5"
            :dur="duration"
            repeatCount="indefinite"
          />
        </linearGradient>
      </defs>
      <rect :x="strokeWidth / 2" :y="strokeWidth / 2" rx="4" ry="4" :width="width - strokeWidth"
        :height="height - strokeWidth" fill="none" stroke="url(#gradient)" :stroke-width="strokeWidth" stroke-dasharray="10,10"
        stroke-linecap="round">
        <animate attributeName="stroke-dashoffset" from="0" to="-200" :dur="duration" repeatCount="indefinite" />
      </rect>
      <ForeignObjectWrapper :xy="props.strokeWidth" :width="width" :height="height">
        <slot></slot>
      </ForeignObjectWrapper>
    </svg>
  </div>
</template>

<script setup lang="ts">
import ForeignObjectWrapper from '../common/ForeignObjectWrapper.vue';

const props = defineProps({
  width: { type: Number, default: 300 },
  height: { type: Number, default: 200 },
  color: { type: String, default: '#3a7afe' },
  color2: { type: String },
  strokeWidth: { type: Number, default: 2 },
  duration: { type: String, default: '15s' }
});

</script>

<style scoped>
.svg-border {
  display: inline-block;
}
</style>
