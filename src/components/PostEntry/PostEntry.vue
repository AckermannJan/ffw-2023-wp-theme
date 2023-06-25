<template>
  <div :class="['post-entry', { 'post-entry--small': variant === 'small' }]">
    <div :class="['post-entry__img', { 'post-entry__img--small': variant === 'small' }]">
      <img :src="imgSrc" :alt="imgAlt" class="post-entry__img--visible" />
      <img :src="imgSrc" :alt="imgAlt" class="post-entry__img--bg" />
    </div>
    <div
      :class="[
        'post-entry__body-wrapper',
        { 'post-entry__body-wrapper--small': variant === 'small' },
      ]"
    >
      <div>
        <h2 :class="['post-entry__title', { 'post-entry__title--small': variant === 'small' }]">
          <slot name="title" />
        </h2>
        <div :class="['post-entry__text', { 'post-entry__text--small': variant === 'small' }]">
          <slot />
        </div>
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
  variant: string;
}>();
</script>

<style lang="scss">
@import 'PostEntry';
</style>
