<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'
import WithLogoLayout from '../components/WithLogoLayout.vue';

const props = defineProps<{
  background?: string
  sort?: '1' | '2'
  class?: string
  title?: string
}>()

const style = computed(
  () => handleBackground(
    props.background ?? `/common${props.sort ?? 1}-background.jpg`
  )
)
</script>

<template>
  <WithLogoLayout :style="style" class="default" :class="class">
    <h1>{{ title }}</h1>
    <slot />
  </WithLogoLayout>
</template>
