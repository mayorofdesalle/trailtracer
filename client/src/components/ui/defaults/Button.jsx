import styled from 'styled-components';
import { hoverScaling } from '../../misc/Mixins';
import { blurryBackground } from '../../misc/Mixins';

const Button = styled.button`
    position: relative;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border: none;
    border-radius: 5px;
    padding: 2rem;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: ${({ theme }) => theme.fontSizes.xSmall};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    touch-action: manipulation;
    transition: 200ms ease-in-out;

    ${blurryBackground}
    ${hoverScaling}
`;

export default Button;