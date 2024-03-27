import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { glassMorph } from '@components/style/mixins';
import Button from '@components/ui/Button';
import Text from '@components/ui/Text';

import StartButtonContainer from './StartButtonContainer';

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
 * Styled button that forwards to the signup page.
 */
const StartButton = () => {
    const size = useSelector((state) => state.gridSizeProvider.StartButton);
    const { t } = useTranslation();

    return (
        size?.width > 0 &&
        <StartButtonContainer $height={size.height} $width={size.width} $top={size.offsetTop}>
            <StartButtonInner>
                <Text $heading>{t('landingPage.start')}</Text>
            </StartButtonInner>
        </StartButtonContainer>
    );
};

export default StartButton;
