<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'
import WithLogoLayout from '../components/WithLogoLayout.vue';

const props = defineProps<{
  background?: string
}>()
const style = computed(() => handleBackground(props.background ?? '/main-background.jpg'))
</script>

<template>
  <WithLogoLayout :style="style" class="intro flex justify-center items-center flex-col">
    <slot />
  </WithLogoLayout>
</template>
