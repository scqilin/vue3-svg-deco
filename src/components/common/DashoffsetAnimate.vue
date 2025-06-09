<template>
  <animate
    attributeName="stroke-dashoffset"
    :values="dashoffsetValues"
    :dur="dur"
    repeatCount="indefinite"
  />
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  dur: { type: String, required: true },
  dashoffsetValues: { type: String}
});
</script>
