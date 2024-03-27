import { useContext } from 'react';
import styled from 'styled-components';

import { slideFromBottom } from '@components/style/anims';
import { pseudoBentoArrowTop } from '@components/ui/Bento/Arrows';
import BentoBox from '@components/ui/Bento/BentoBox';
import Button from '@components/ui/Button';
import Text from '@components/ui/Text';
import PageContext from '@context/PageContext';

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

    & > #explanation {
        width: 80%;
    }
`;

const CTABox = () => {
    const context = useContext(PageContext);
    const theme = context.theme;
    const t = context.t;
    const largeScreen = context.largeScreen;

    return (
        <CTABoxInner $glass>
            <Text $color={theme.colors.primary} $heading $ratio={!largeScreen && 0.8}>{t('signinPage.signupTitle')}</Text>
            {largeScreen && (
                <Text id='explanation' $color={theme.colors.text}>
                    {t('signinPage.explanation')}
                </Text>
            )}
            <Button $bgColor={theme.colors.secondary}>
                <Text $color={theme.colors.text} $heading>{t('signinPage.signup')}</Text>
            </Button>
        </CTABoxInner>
    );
};

export default CTABox;