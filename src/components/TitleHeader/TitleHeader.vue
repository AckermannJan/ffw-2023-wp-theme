<script setup lang="ts">
type typeTextAlign = 'left' | 'center' | 'right'

withDefaults(
  defineProps<{
    /**
     * Used to align the text
     */
    textAlign?: typeTextAlign
  }>(),
  { textAlign: 'left' }
)
</script>

<template>
  <div :class="['title-header', `title-header--${textAlign}`]">Letzter Einsatz</div>
</template>

<style lang="scss">
@import 'TitleHeader.scss';
</style>
