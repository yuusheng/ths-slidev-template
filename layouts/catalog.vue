<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'
import WithLogoLayout from '../components/WithLogoLayout.vue';

const props = defineProps<{
  background?: string
}>()
const style = computed(() => handleBackground(props.background ?? '/quote.jpg'))
</script>

<template>
  <WithLogoLayout :style="style" class="catalog flex justify-around items-center">
    <h1>目 录</h1>
    <section>
      <slot />
    </section>
  </WithLogoLayout>
</template>
