<template>
  <component :is="component()" class="dynamic-button" v-bind="{ to, href, target }">
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { RouteRecord } from 'vue-router';

type HTMLAnchorTarget = '_blank' | '_self' | '_parent' | '_top';

const props = defineProps<{
  to?: RouteRecord;
  href?: URL;
  target?: HTMLAnchorTarget;
}>();

const component = () => {
  if (props.to) {
    return 'router-link';
  }
  if (props.href) {
    return 'a';
  }
  return 'button';
};
</script>

<style lang="scss">
@import 'DynamicButton';
</style>
