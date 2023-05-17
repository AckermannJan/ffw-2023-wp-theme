import type { Meta, StoryObj } from '@storybook/vue3'

import TitleHeader from './TitleHeader.vue'

const meta = {
  component: TitleHeader,
  render: (args: any) => ({
    components: { TitleHeader },
    setup() {
      return { args }
    },
    template: '<title-header  />'
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof TitleHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const CenterText: Story = {
  args: {
    textAlign: 'center'
  }
}

export const RightText: Story = {
  args: {
    textAlign: 'right'
  }
}
