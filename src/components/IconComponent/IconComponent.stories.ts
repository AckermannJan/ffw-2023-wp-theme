import type { Meta, StoryObj } from '@storybook/vue3';

import IconComponent from './IconComponent.vue';

const meta = {
  component: IconComponent,
  render: (args: any) => ({
    components: { IconComponent },
    setup() {
      return { args };
    },
    template: `
      <icon-component v-bind="args"/>`,
  }),
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {
    name: 'calendar',
    size: 22,
    spin: false,
  },
} satisfies Meta<typeof IconComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
