/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';

if (import.meta.env.DEV) {
  const { default: wdyr } = await import(
    '@welldone-software/why-did-you-render'
  );

  wdyr(React, {
    include: [/.*/],
    trackHooks: true,
    trackAllPureComponents: true,
  });
}
