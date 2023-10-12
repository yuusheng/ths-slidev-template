<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'
import WithLogoLayout from '../components/WithLogoLayout.vue';

const props = defineProps<{
  class?: string
  title?: string
  chapter?: string | number
}>()

const style = computed(() => handleBackground( `/chapter-${props.chapter ?? 1}.jpg`))
</script>

<template>
  <WithLogoLayout :style="style" class="chapter flex items-center justify-center" :class="class">
    <slot>
      <h1>{{ title }}</h1>
    </slot>
  </WithLogoLayout>
</template>
