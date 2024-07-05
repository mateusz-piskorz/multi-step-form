import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, myTheme } from './styles';
import { Analytics } from '@vercel/analytics/react';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <App />
      <Analytics />
    </ThemeProvider>
  </React.StrictMode>,
);
