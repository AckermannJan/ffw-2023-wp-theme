<template>
  <div class="post-entry">
    <div class="post-entry__img">
      <img :src="imgSrc" :alt="imgAlt" class="post-entry__img--visible" />
      <img :src="imgSrc" :alt="imgAlt" class="post-entry__img--bg" />
    </div>
    <div class="post-entry__body-wrapper">
      <h2 class="post-entry__title">
        <slot name="title" />
      </h2>
      <div class="post-entry__text">
        <slot />
      </div>
      <div class="post-entry__actions">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  imgSrc: string;
  imgAlt: string;
}>();
</script>

<style lang="scss">
@import 'PostEntry';
</style>
