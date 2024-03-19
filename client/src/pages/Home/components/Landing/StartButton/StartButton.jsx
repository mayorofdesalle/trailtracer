import { memo } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import Button from '@components/ui/Button';
import Text from '@components/ui/Text';
import { glassMorph } from '@components/misc/Mixins';

import StartButtonContainer from './StartButtonContainer';

/**
 * StartButtonInner
 * @description
 * This is a styled Button component creating the base for the StartButton.
 */
const StartButtonInner = styled(Button)`
    width: 100%;
    height: 100%;
    border: 2px solid ${({ theme }) => theme.colors.primaryTransparent};
    color: ${({ theme }) => theme.colors.text};

    ${glassMorph}

    &:hover {
        border-color: ${({ theme }) => theme.colors.backgroundTransparent};
    }
`;

/**
 * StartButton
 * @description
 * This is a function component that acts as a CTA to get started using the website.
 */
const StartButton = memo(() => {
    const size = useSelector((state) => state.gridPlaceholder.StartButton);
    const { t } = useTranslation();

    return (
        size &&
        <StartButtonContainer $height={size.height} $width={size.width} $top={size.offsetTop}>
            <StartButtonInner>
                <Text $heading>{t('landing.start')}</Text>
            </StartButtonInner>
        </StartButtonContainer>
    );
});

export default StartButton;
