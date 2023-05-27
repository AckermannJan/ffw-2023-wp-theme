<template>
  <div class="calendar-date">
    <div class="calendar-date__week-day">
      {{ weekDay }}
    </div>
    <div class="calendar-date__day">
      {{ day }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { getDay, getDate, fromUnixTime } from 'date-fns';

const shortDates = ['SO', 'MO', 'DI', 'MI', 'DO', 'FR', 'SA'];

const props = defineProps<{
  date: number;
}>();

const dateObject = fromUnixTime(props.date);
const weekDay = shortDates[getDay(dateObject)];
const day = getDate(dateObject);
</script>

<style lang="scss">
@import 'CalendarDate';
</style>
