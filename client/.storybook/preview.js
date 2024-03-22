import { ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import GlobalStyle from '@components/style/GlobalStyle';
import { darkTheme, lightTheme } from '@components/style/themes';
import BackgroundDecorator from './BackgroundDecorator';

export const decorators = [
  BackgroundDecorator,
  withThemeFromJSXProvider({
    themes: {
      dark: darkTheme,
      light: lightTheme,
    },
    defaultTheme: 'dark',
    Provider: ThemeProvider,
    GlobalStyles: GlobalStyle
  })
];

export const parameters = {
  matchers: {
    color: /(background|color)$/i,
    date: /Date$/,
  },
};

export const globalTypes = {
  blabla: { bla: 'bla' }
};