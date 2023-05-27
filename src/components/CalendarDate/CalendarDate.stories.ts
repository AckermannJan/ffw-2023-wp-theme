import type { Meta, StoryObj } from '@storybook/vue3';

import CalendarDate from './CalendarDate.vue';

const meta = {
  component: CalendarDate,
  render: (args: any) => ({
    components: { CalendarDate },
    setup() {
      return { args };
    },
    template: '<calendar-date :date="args.date"/>',
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof CalendarDate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    date: 1685836800,
  },
};
