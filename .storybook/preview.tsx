import React from 'react';
import { GlobalStyle, theme } from '../src/styles';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { FormProvider } from '../src/context/form';
import { FORM_STEPS } from '../src/constants/formSteps';

const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <FormProvider formSteps={FORM_STEPS}>
            <Story />
          </FormProvider>
        </ThemeProvider>
      );
    },
  ],

  parameters: {
    backgrounds: {
      default: 'white',
      values: [
        {
          name: 'white',
          value: '#fff',
        },
        {
          name: 'dark',
          value: '#333',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
