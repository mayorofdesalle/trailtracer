import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import Theme from '@components/style/theme';
import GlobalStyle from '@components/style/globalStyle';

export const decorators = [
  withThemeFromJSXProvider({
    Provider: Theme,
    GlobalStyle
  })
];

export const parameters = {
  matchers: {
    color: /(background|color)$/i,
    date: /Date$/,
  }
}
