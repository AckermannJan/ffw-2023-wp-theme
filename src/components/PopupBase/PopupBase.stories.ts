import type { Meta, StoryObj } from '@storybook/vue3';

import PopupBase from './PopupBase.vue';

const placementTypes = [
  'top',
  'bottom',
  'right',
  'left',
  'auto',
  'top-start',
  'top-end',
  'bottom-start',
  'bottom-end',
  'right-start',
  'right-end',
  'left-start',
  'left-end',
  'auto-start',
  'auto-end',
];

const meta = {
  component: PopupBase,
  render: (args: any) => ({
    components: { PopupBase },
    setup() {
      return { args };
    },
    template: `
      <popup-base :placement="args.placement" :base-design="args.baseDesign" :child-has-focus="args.childHasHover">
        <template #activator="{ on }">
          <div v-on="on" tabindex="0">Hover Me</div>
        </template>
        Tooltip
      </popup-base>`,
  }),
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placement: {
      options: placementTypes,
      control: { type: 'select' },
    },
  },
  args: {
    childHasFocus: false,
    baseDesign: false,
  },
} satisfies Meta<typeof PopupBase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const BaseDesign: Story = {
  args: {
    baseDesign: true,
    placement: 'right',
  },
};
export const Top: Story = {
  args: {
    placement: 'top',
  },
};
export const Right: Story = {
  args: {
    placement: 'right',
  },
};
export const Bottom: Story = {
  args: {
    placement: 'bottom',
  },
};
export const Left: Story = {
  args: {
    placement: 'left',
  },
};

export const ChildHasFocus: Story = {
  render: (args: any) => ({
    components: { PopupBase },
    setup() {
      return { args };
    },
    template: `
      <popup-base :placement="args.placement" :base-design="args.baseDesign" :child-has-focus="args.childHasHover">
        <template #activator="{ on }">
          <div v-on="on" tabindex="0">Hover Me</div>
        </template>
        <div tabindex="0">Tooltip</div>
      </popup-base>`,
  }),
  args: {
    childHasFocus: true,
  },
};
