import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  taskQueue: 'async',
  globalStyle: 'src/global/app.css',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null,
      baseUrl: 'https://myapp.local/',
    },
  ],
};
