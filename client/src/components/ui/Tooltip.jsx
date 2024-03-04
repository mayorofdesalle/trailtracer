import { Tooltip } from 'react-tooltip';
import styled from 'styled-components';

const StyledTooltip = styled(Tooltip).attrs(
    { className: 'tooltip', classNameArrow: 'arrow' })`

    &.tooltip {
        font-size: ${({ theme }) => theme.fontSizes.large};
        font-weight: ${({ theme }) => theme.fontWeights.xBold};
        color: ${({ theme }) => theme.colors.text};
        background-color: ${({ theme }) => theme.colors.secondary};
        --webkit-backdrop-filter: blur(0.25rem);
        backdrop-filter: blur(0.25rem);
        border: 2px solid ${({ theme }) => theme.colors.secondaryTransparent};
        border-radius: 0.25rem;
        padding: 0.5rem;
        opacity: 1;

    & > .arrow { 
        height: 0.75svh;
        width: 0.75svh;
        background-color: ${({ theme }) => theme.colors.text};
        transform: rotate(45deg);
        border-radius: 0.125rem;
    }
  }
`;

export default StyledTooltip;