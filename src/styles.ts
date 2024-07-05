import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle(
  ({ theme }) => css`
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');

    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      margin: 0;
      padding: 0;
      background-color: ${theme.magnolia};
      font-family: ${theme.fontFamilyRaleway};
    }
  `,
);

export const myTheme = {
  marineBlue: 'hsl(213, 96%, 18%)',
  purplishBlue: 'hsl(243, 100%, 62%)',
  pastelBlue: 'hsl(228, 100%, 84%)',
  lightBlue: 'hsl(206, 94%, 87%)',
  strawberryRed: 'hsl(354, 84%, 57%)',
  coolGray: 'hsl(231, 11%, 63%)',
  lightGray: 'hsl(229, 24%, 87%)',
  magnolia: 'hsl(217, 100%, 97%)',
  alabaster: 'hsl(231, 100%, 99%)',
  fontFamilyRaleway: `'Ubuntu', sans-serif`,
} as const;

type MyTheme = typeof myTheme;
declare module 'styled-components' {
  export interface DefaultTheme extends MyTheme {}
}
