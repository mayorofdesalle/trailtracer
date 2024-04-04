import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { useTheme } from 'styled-components';

import { slideFromBottom } from '@components/anims';
import { Button } from '@components/ui';
import { Text } from '@components/ui';
import { BentoBox } from '@components/ui/bento';
import { pseudoBentoArrowTop } from '@components/ui/bento/mixins';
import { useWindowSize } from '@hooks';
import SignupModal from '@pages/profile/signup/SignupModal';

/**
 * CTABox
 * @description
 * Styled bento box to contain the CTA content.
 **/
const CTABoxInner = styled(BentoBox)`
    grid-area: CTABox;
    flex-direction: column;
    justify-content: space-around;

    --arrowColor: ${({ theme }) => theme.colors.secondary};
    ${pseudoBentoArrowTop}

    &::before {
        animation: ${slideFromBottom} 1s ease-in-out;
    }

    & > ${Button} {
        width: 80%;
        padding: 0.25rem;
    }

    & > .explanation {
        width: 80%;
    }
`;

const CTABox = (props) => {
    const theme = useTheme();
    const { t } = useTranslation();
    const { height, width } = useWindowSize();
    const largeScreen = width > theme.breakpoints.medium && width / height > 1;

    const [isOpen, setIsOpen] = useState(false);

    const toggle = useCallback(() => setIsOpen((isOpen) => !isOpen), []);

    return (
        <>
            <CTABoxInner $glass {...props} role='complementary'>
                <Text $color={theme.colors.primary} $heading $ratio={!largeScreen && 0.8}>{t('signinPage.signupTitle')}</Text>
                {largeScreen && (
                    <Text className='explanation' $color={theme.colors.text}>
                        {t('signinPage.explanation')}
                    </Text>
                )}
                <Button $bgColor={theme.colors.secondary} onClick={toggle}>
                    <Text $color={theme.colors.text} $heading>{t('signinPage.signup')}</Text>
                </Button>
            </CTABoxInner>
            {isOpen && <SignupModal close={toggle} />}
        </>
    );
};

export default CTABox;