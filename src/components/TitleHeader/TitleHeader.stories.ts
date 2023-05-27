import type { Meta, StoryObj } from '@storybook/vue3';

import TitleHeader from './TitleHeader.vue';

const meta = {
  component: TitleHeader,
  render: (args: any) => ({
    components: { TitleHeader },
    setup() {
      return { args };
    },
    template: '<title-header :text-align="args.textAlign"> {{ args.text }} </title-header>',
  }),
  argTypes: {
    textAlign: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TitleHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Hello world',
  },
};

export const CenterText: Story = {
  args: {
    textAlign: 'center',
    text: 'Hello world',
  },
};

export const RightText: Story = {
  args: {
    textAlign: 'right',
    text: 'Hello world',
  },
};
