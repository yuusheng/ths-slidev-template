<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'
import WithLogoLayout from '../components/WithLogoLayout.vue';

const style = computed(() => handleBackground('/thanks.jpg'))
</script>

<template>
  <WithLogoLayout :style="style" class="thanks flex items-center justify-center">
    <slot>
      <h1>谢谢</h1>
    </slot>
  </WithLogoLayout>
</template>
