<script setup lang="ts">
import InlineSvg from 'vue-inline-svg';

interface Props {
  name: string;
  size?: string | number;
  spin?: boolean;
}

// Props
const props = withDefaults(defineProps<Props>(), {
  size: '22',
  spin: false,
});

const iconSrc = `/icons/${props.name}.svg`;
</script>

<template>
  <inline-svg
    :src="iconSrc"
    :width="props.size"
    :height="props.size"
    :class="['icon-component', { 'icon-component--spin': spin }]"
  />
</template>

<style lang="scss">
@import 'IconComponent';
</style>
