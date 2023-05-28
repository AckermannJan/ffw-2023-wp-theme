import type { Meta, StoryObj } from '@storybook/vue3';

import DynamicButton from './DynamicButton.vue';

const meta = {
  component: DynamicButton,
  render: (args: any) => ({
    components: { DynamicButton },
    setup() {
      return { args };
    },
    template: '<dynamic-button>{{args.text}}</dynamic-button>',
  }),
  argTypes: {
    href: {
      control: 'text',
    },
    target: {
      control: 'select',
      options: ['_blank', '_self', '_parent', '_top'],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DynamicButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Hello World',
    href: 'https://www.google.de',
  },
};

export const Link: Story = {
  args: {
    text: 'Hello World',
    href: 'https://www.google.de',
  },
};

export const Target: Story = {
  args: {
    text: 'Hello World',
    href: 'https://www.google.de',
    target: '_blank',
  },
};

export const Route: Story = {
  args: {
    text: 'Hello World',
    to: { path: 'https://www.google.de' },
  },
};
