<template>
  <div ref="activator" class="popup-base">
    <!-- @slot Slot for the activator hovering the slot will show the tooltip -->
    <slot name="activator" v-bind:on="activatorListeners" />
  </div>
  <transition name="tooltip-fade" @after-leave="removePopperInstance">
    <div
      v-show="showPopup && $slots.default"
      v-on="tooltipListeners"
      ref="tooltip"
      role="tooltip"
      :class="[{ 'popup-base__tooltip': baseDesign }]"
      @blur.capture="handleBlur"
    >
      <!-- @slot Content of tooltip -->
      <slot />
      <div v-if="baseDesign" class="popup-base__arrow" data-popper-arrow />
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, nextTick, watchEffect } from 'vue';
import type { Ref } from 'vue';
import { createPopper } from '@popperjs/core';
import type { Instance as PopperInstance, Placement } from '@popperjs/core';

interface Props {
  // Test
  childHasFocus?: boolean;
  baseDesign?: boolean;
  placement?: Placement;
}

// Props
const props = withDefaults(defineProps<Props>(), {
  childHasFocus: false,
  baseDesign: false,
  placement: 'top',
});

// Refs
const activator = ref();
const tooltip = ref();
const showPopup = ref(false);
const popperInstance: Ref<PopperInstance | undefined> = ref(undefined);
const windowTimeout: Ref<number | undefined> = ref(undefined);

// Listeners
const activatorListeners = {
  mouseenter: async () => {
    await nextTick();
    clearTimeout();
    showPopup.value = true;
  },
  mouseleave: () => {
    windowTimeout.value = window.setTimeout(() => {
      showPopup.value = false;
    }, 200);
  },
  focus: () => {
    showPopup.value = true;
  },
  blur: () => {
    if (!props.childHasFocus) {
      showPopup.value = false;
    }
  },
  click: () => {
    showPopup.value = !showPopup.value;
  },
};

const tooltipListeners = {
  mouseenter: async () => {
    await nextTick();
    clearTimeout();
    showPopup.value = true;
  },
  mouseleave: () => {
    windowTimeout.value = window.setTimeout(() => {
      showPopup.value = false;
    }, 200);
  },
};

// Functions
const removePopperInstance = () => {
  if (popperInstance.value) {
    popperInstance.value!.destroy();
    popperInstance.value = undefined;
  }
};

const handleBlur = (event: any) => {
  if (event.relatedTarget?.parentElement !== tooltip.value) {
    showPopup.value = false;
  }
};

const clearTimeout = () => {
  if (windowTimeout.value) {
    window.clearTimeout(windowTimeout.value!);
  }
};

// Watchers
watchEffect(async () => {
  if (showPopup.value) {
    await nextTick();
    removePopperInstance();
    popperInstance.value = createPopper(activator.value, tooltip.value, {
      placement: props.placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 11],
          },
        },
      ],
    });
  }
});
</script>

<style lang="scss">
@import 'PopupBase';
</style>
