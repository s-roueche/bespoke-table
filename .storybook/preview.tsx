import type { Preview } from '@storybook/react';
import '../stories/styles/reset.css';
import '../stories/styles/global.css';
import '../stories/styles/animation.css';
import React from 'react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'centered',
  },
  loaders: [
    async () => ({
      roverResponse: await (
        await fetch(
          'https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=' +
            process.env.STORYBOOK_API_NASA_KEY,
          { cache: 'force-cache' },
        )
      ).json(),
    }),
  ],
  decorators: [
    (Story) => (
      <div style={{ width: '900px' }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
