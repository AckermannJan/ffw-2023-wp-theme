<template>
  <popup-base child-has-focus>
    <template #activator="{ on }">
      <button v-on="on" type="button">
        <slot />
      </button>
    </template>
    <ul class="popup-menu">
      <li v-for="(menuItem, index) in menuItems" :key="index" class="popup-menu__list-item">
        <component
          :is="menuItem.to ? 'router-link' : 'a'"
          :to="menuItem.to ? menuItem.to : ''"
          :href="menuItem.href ? menuItem.href : null"
          class="popup-menu__item-wrapper"
        >
          <icon-component :name="menuItem.icon" class="popup-menu__icon" size="24" />
          {{ menuItem.name }}
        </component>
        <ul class="popup-menu__children">
          <li
            v-for="(child, childIndex) in menuItem.children"
            :key="childIndex"
            class="popup-menu__list-item"
          >
            <component
              :is="child.to ? 'router-link' : 'a'"
              :to="child.to ? child.to : null"
              :href="child.href ? child.href : null"
              class="popup-menu__item-wrapper"
            >
              <span class="popup-menu__item-wrapper--child">
                <icon-component :name="child.icon" class="popup-menu__icon" size="24" />
                {{ child.name }}
              </span>
            </component>
          </li>
        </ul>
      </li>
    </ul>
  </popup-base>
</template>

<script setup lang="ts">
import PopupBase from '../PopupBase/PopupBase.vue';
import IconComponent from '../IconComponent/IconComponent.vue';

interface MenuItem {
  name: string;
  icon: string;
  to?: object;
  href?: string;
  children: Child[];
}

interface Child {
  name: string;
  icon: string;
  to?: object;
  href?: string;
}

defineProps<{
  menuItems: MenuItem[];
}>();
</script>

<style lang="scss">
@import 'PopupMenu';
</style>
