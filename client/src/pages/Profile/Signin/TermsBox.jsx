import { useContext } from 'react';
import styled from 'styled-components';

import BentoBox from '@components/ui/Bento/BentoBox';
import Icon from '@components/ui/Icon';
import Text from '@components/ui/Text';
import PageContext from '@context/PageContext';

const TermsBoxInner = styled(BentoBox)`
    grid-area: TermsBox;
    padding: 8%;
    flex-direction: column;
    justify-content: space-around;

    & > svg {
        height: 4dvh;
        width: 4dvh;
    }
`;

const TermsBox = () => {
    const context = useContext(PageContext);
    const theme = context.theme;
    const t = context.t;
    const largeScreen = context.largeScreen;

    return (
        <TermsBoxInner $glass>
            {largeScreen && <Icon name='article-fill' color={theme.colors.primary} />}
            <Text $color={theme.colors.text} $ratio={0.9}>
                {t('signinPage.termsPrefix')} <a href=''>{t('signinPage.terms')}</a> {t('signinPage.termsSuffix')}
            </Text>
        </TermsBoxInner>
    );
};

export default TermsBox;