import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { glassMorph } from '@components/mixins';
import { Button } from '@components/ui';
import { Container } from '@components/ui';
import { Text } from '@components/ui';
import SignupModal from '@pages/profile/signup/SignupModal';

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

const StartButtonContainer = styled(Container)`
    position: absolute;
    height: ${({ $height }) => $height}px;
    width: ${({ $width }) => $width}px;
    top: ${({ $top }) => $top}px;
`;

/**
 * StartButton
 * @description
 * Styled button that forwards to the signup page.
 */
const StartButton = (props) => {
    const size = useSelector((state) => state.gridSizeProvider.StartButton);
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const toggle = useCallback(() => setIsOpen((isOpen) => !isOpen), []);

    return (
        <>
            {size?.width > 0 &&
                <StartButtonContainer $height={size.height} $width={size.width} $top={size.offsetTop} {...props}>
                    <StartButtonInner onClick={toggle}>
                        <Text $heading>{t('landingPage.start')}</Text>
                    </StartButtonInner>
                </StartButtonContainer>}
            {isOpen && <SignupModal close={toggle} />}
        </>
    );
};

export default StartButton;
