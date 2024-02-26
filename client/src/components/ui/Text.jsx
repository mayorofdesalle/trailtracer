import { useMemo } from 'react';
import styled, { css } from 'styled-components';

// Constants
const HEADING_MULTIPLIER = 1.23;

/**
 * function adjustFontSize({sizeNames, breakpoints, fontSizes}, $heading, $ratio)
 * @param {Array} sizeNames - The array of strings that represent the names of the font sizes.
 * @param {Object} breakpoints - The object that contains the names of the breakpoints and their values.
 * @param {Object} fontSizes - The object that contains the names of the font sizes and their values.
 * @param {Boolean} $heading - A boolean that determines if the text is a heading or not.
 * @param {Number} $ratio - A number that is used to adjust the font size by a certain ratio.
 * @returns {Object} A styled-components css object that contains the media queries for the font sizes.
 * @description
 * This function adjusts the font size of the text based on the screen size.
 * It uses the theme object to get the font sizes and breakpoints.
 * It also adjusts the font size based on the heading prop and the ratio prop.
 * The heading prop is used to determine if the text is a heading or not.
 * The ratio prop is used to adjust the font size by a certain ratio.
 **/
const adjustFontSize = ({ sizeNames, breakpoints, fontSizes }, $heading, $ratio) => {
    const computedFontSizes = {};

    for (const [key, value] of Object.entries(fontSizes)) {
        computedFontSizes[key] = `${parseFloat(value.slice(0, -3)) * ($ratio ? $ratio : 1) * ($heading ? HEADING_MULTIPLIER : 1)}rem`;
    }

    let queries = '';

    for (const size of sizeNames) {
        queries += `@media all and (min-width: ${breakpoints[size]}) {
                font-size: ${computedFontSizes[size]}; }\n
            `;
    }

    return css`${queries}`;
};

/**
 * Text
 * @param {String} $color - The color of the text
 * @param {Boolean} $heading - If the text is a heading or not
 * @description
 * This is a styled span that is used to display text. It is used to create a more visually appealing text component.
 **/
const Text = styled.span`
    text-decoration: none;
    border-radius: 0;
    text-align: center;
    vertical-align: middle;
    font-family: ${({ theme, $heading }) => $heading ? theme.fonts.heading : theme.fonts.text};
    font-weight: ${({ theme, $heading }) => $heading ? theme.fontWeights.bold : theme.fontWeights.regular};
    color: ${({ $color }) => $color};
    ${({ theme, $heading, $ratio }) => useMemo(() => adjustFontSize(theme, $heading, $ratio), [theme, $heading, $ratio])};
`;

export default Text;

// Text Modifiers
export const Prim = styled.span`
    color: ${({ theme }) => theme.colors.primary};
`;

export const Sec = styled.span`
    color: ${({ theme }) => theme.colors.secondary};
`;

export const Undr = styled.span`
    text-decoration-line: underline;
    text-decoration-color: ${({ $color }) => $color};
    text-decoration-style: ${({ $style }) => $style};
`;

export const Ovr = styled.span`
    text-decoration-line: overline;
    text-decoration-color: ${({ $color }) => $color};
    text-decoration-style: ${({ $style }) => $style};
`;

export const Thru = styled.span`
    text-decoration-line: line-through;
    text-decoration-color: ${({ $color }) => $color};
    text-decoration-style: ${({ $style }) => $style};
`;