import type { Meta, StoryObj } from '@storybook/vue3';

import PopupMenu from './PopupMenu.vue';

const menuItems = [
  {
    name: 'Wichtelwehr',
    icon: 'fire',
    href: 'https://www.google.de',
    children: [
      {
        name: 'Übungsplan',
        icon: 'fire',
        href: 'https://www.google.de',
      },
    ],
  },
  {
    name: 'Jugendfeuerwehr',
    icon: 'fire',
    href: 'https://www.google.de',
    children: [
      {
        name: 'Übungsplan',
        icon: 'fire',
        href: 'https://www.google.de',
      },
    ],
  },
];

const meta = {
  component: PopupMenu,
  render: (args: any) => ({
    components: { PopupMenu },
    setup() {
      return { args };
    },
    template: `
      <popup-menu v-bind="args">
        Hover Me
      </popup-menu>`,
  }),
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof PopupMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    menuItems,
  },
};
