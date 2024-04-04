import { useTranslation } from 'react-i18next';
import styled, { keyframes, useTheme } from 'styled-components';

import { Container, Icon, Text } from '@components/ui';

const orientate = (themeColors) => keyframes`
    0%, 25% {
        transform: rotate(-90deg);
        fill: ${themeColors.secondary};
    }

    50% {
        transform: rotate(0);
        fill: ${themeColors.primary};
    }
`;

const WarningContainer = styled(Container)`
    padding: clamp(4rem, min(8dvw, 8dvh), 8rem);
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};

    & > svg {
        height: 100%;
        width: 100%;
        animation: ${({ theme }) => orientate(theme.colors)} 2s ease-in-out infinite alternate;
    }
`;
/**
 * DisplayWarning
 * @description
 * Component to display a warning message to the user if the content is not optimized for the aspect ratio at that resolution.
 */
const DisplayWarning = (props) => {
    const theme = useTheme();
    const { t } = useTranslation();

    return (
        <WarningContainer role='status' {...props}>
            <Icon name='phone-fill' color={theme.colors.primary} />
            <Text $heading $color={theme.colors.secondary} $ratio={1.5}>{t('displayWarning')}</Text>
        </WarningContainer>
    );
};

export default DisplayWarning;