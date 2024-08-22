import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-viewport',
    '@whitespace/storybook-addon-html',
    '@etchteam/storybook-addon-status',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../../../proprietary/design-tokens/src'],
  refs: {
    'nl-rvo-design-system': {
      title: 'RVO Design System',
      url: 'https://nl-design-system.github.io/rvo/',
      expanded: false,
    },
    'utrecht-design-system': {
      title: 'Utrecht Design System',
      url: 'https://nl-design-system.github.io/utrecht/storybook/',
      expanded: false,
    },
    'rijkshuisstijl-community-design-system': {
      title: 'Rijkshuisstijl Design System',
      url: 'https://rijkshuisstijl-community.vercel.app/',
      expanded: false,
    },
  },
};

export default config;
