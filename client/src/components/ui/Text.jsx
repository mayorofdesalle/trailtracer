import styled from 'styled-components';

// Constants
const HEADING_MULTIPLIER = 1.3;

/**
 * Text
 * @param {String} $color - The color of the text
 * @param {Boolean} $heading - If the text is a heading or not
 * @description
 * This is a styled div that is used to display text. It is used to create a more visually appealing text component.
 **/
const Text = styled.div`
    text-decoration: none;
    text-align: center;
    vertical-align: middle;

    font-size:
    calc(clamp(0.825rem, min(2dvw, 2dvh), 2.5625rem)
    * ${({ $heading }) => $heading ? HEADING_MULTIPLIER : 1}
    * ${({ $ratio }) => $ratio || 1});

    font-family: ${({ theme, $heading }) => $heading ? theme.fonts.heading : theme.fonts.text};
    font-weight: ${({ theme, $heading }) => $heading ? theme.fontWeights.bold : theme.fontWeights.regular};
    line-height: ${({ $heading }) => $heading ? 1.25 : 1};
    font-display: fallback;
    color: ${({ theme, $color }) => $color || theme.colors.text};
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

export const Uppr = styled.span`
    text-transform: uppercase;
`;