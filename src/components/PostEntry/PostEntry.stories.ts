import type { Meta, StoryObj } from '@storybook/vue3';

import PostEntry from './PostEntry.vue';
import DynamicButton from '../DynamicButton/DynamicButton.vue';

const meta = {
  component: PostEntry,
  render: (args: any) => ({
    components: { PostEntry, DynamicButton },
    setup() {
      return { args };
    },
    template: `
      <div style="width: 50%;">
        <post-entry 
          :img-src="args.imgSrc" 
          :img-alt="args.imgAlt" 
          :variant="args.variant"
        >
          <template #title>
            Maiwanderung
          </template>
          Die Wanderung am 1. Mai eines jeden Jahres ist ein Brauch, den wir bei der 
          Feuerwehr Traisa bereits seit Jahrzehnten pflegen. So ging es auch in diesem Jahr
          wieder auf Umwegen zum Traaser Hüttchen, wo uns das Waldfest der Chorgemeinde Traisa erwartet
          wieder auf Umwegen zum Traaser Hüttchen, wo uns das Waldfest der Chorgemeinde Traisa erwartet
          wieder auf Umwegen zum Traaser Hüttchen, wo uns das Waldfest der Chorgemeinde Traisa erwartet
          <template #actions>
            <DynamicButton>
              WEITERLESEN
            </DynamicButton>
          </template>
        </post-entry>
      </div>
    `,
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof PostEntry>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imgSrc: 'http://wordpress.feuerwehr-traisa.de/wp-content/uploads/2023/05/IMG_5254.jpeg',
    imgAlt: 'Alt text',
  },
};

export const Small: Story = {
  args: {
    imgSrc: 'http://wordpress.feuerwehr-traisa.de/wp-content/uploads/2023/05/IMG_5254.jpeg',
    imgAlt: 'Alt text',
    variant: 'small',
  },
};
