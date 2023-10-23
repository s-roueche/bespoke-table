import type { Preview } from '@storybook/react';
import '../stories/styles/reset.css';
import '../stories/styles/global.css';
import '../stories/styles/animation.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
