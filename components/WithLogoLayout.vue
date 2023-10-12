<script setup lang="ts">
defineProps<{
  style?: any
}>()
</script>

<template>
  <div class="slidev-layout w-full h-full intro-image relative" :style="style">
    <img src="/logo.png" class="position-logo h-12" alt="">
    <slot />
  </div>
</template>
