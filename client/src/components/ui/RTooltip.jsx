import { Tooltip } from 'react-tooltip';
import styled from 'styled-components';

/**
 * RTooltip
 * @description
 * Styled tooltip component from the react-tooltip library.
 **/
const RTooltip = styled(Tooltip).attrs(
  { className: 'tooltip', classNameArrow: 'arrow' })`
    
    &.tooltip {
        width: fit-content;
        color: ${({ theme }) => theme.colors.text};
        background-color: ${({ theme }) => theme.colors.secondary};
        border: 2px solid ${({ theme }) => theme.colors.background};
        border-radius: max(0.25rem, 0.25dvh, 0.25dvw);
        z-index: 999;
        opacity: 1;
  }
`;

export default RTooltip;