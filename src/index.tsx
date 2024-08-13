import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';
import { FormProvider } from './context/form';
import { FORM_STEPS } from './constants/formSteps';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <FormProvider formSteps={FORM_STEPS}>
        <App />
      </FormProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
