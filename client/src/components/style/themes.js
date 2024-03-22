import { hexToRgba } from '@utils/conversions';

/**
 * Theme configuration for styled-components
 */
const theme = {
    fonts: {
        heading: 'neighbor, hellofont-id-shanlanti, sans-serif',
        text: 'niveau-grotesk, ten-mincho-antique, sans-serif',
    },

    fontWeights: {
        regular: '400',
        bold: '700',
        black: '900',
    },

    breakpoints: {
        xSmall: '0',
        small: '576',
        medium: '992',
        large: '1920',
        xLarge: '2560'
    },
};

export const colors = {
    mint: '#EBFFF5',
    mintTransparent: hexToRgba('#EBFFF5', 0.43),
    coral: '#EF6F6C',
    coralTransparent: hexToRgba('#EF6F6C', 0.43),
    darkGreen: '#435049',
    darkGreenTransparent: hexToRgba('#435049', 0.43),
    black: '#000000',
    blackTransparent: hexToRgba('#000000', 0.43),
    white: '#FCFFFD',
    whiteTransparent: hexToRgba('#FCFFFD', 0.43),
};

export const darkTheme = {
    ...theme,
    colors: {
        primary: colors.mint,
        primaryTransparent: colors.mintTransparent,
        secondary: colors.coral,
        secondaryTransparent: colors.coralTransparent,
        tertiary: colors.darkGreen,
        tertiaryTransparent: colors.darkGreenTransparent,
        background: colors.black,
        backgroundTransparent: colors.blackTransparent,
        text: colors.white,
        textTransparent: colors.whiteTransparent,
    }
};

export const lightTheme = {
    ...theme,
    colors: {
        primary: colors.darkGreen,
        primaryTransparent: colors.darkGreenTransparent,
        secondary: colors.coral,
        secondaryTransparent: colors.coralTransparent,
        tertiary: colors.mint,
        tertiaryTransparent: colors.mintTransparent,
        background: colors.white,
        backgroundTransparent: colors.whiteTransparent,
        text: colors.black,
        textTransparent: colors.blackTransparent,
    }
};
