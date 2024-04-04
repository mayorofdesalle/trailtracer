import { useTranslation } from 'react-i18next';
import styled, { useTheme } from 'styled-components';

import { Icon } from '@components/ui';
import { Text } from '@components/ui';
import { BentoBox } from '@components/ui/bento';
import { useWindowSize } from '@hooks';

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

const TermsBox = (props) => {
    const theme = useTheme();
    const { t } = useTranslation();
    const { height, width } = useWindowSize();
    const largeScreen = width > theme.breakpoints.medium && width / height > 1;

    return (
        <TermsBoxInner $glass {...props} role='note'>
            {largeScreen && <Icon name='article-fill' color={theme.colors.primary} />}
            <Text $color={theme.colors.text} $ratio={0.9}>
                {t('signinPage.termsPrefix')} <a href=''>{t('signinPage.terms')}</a> {t('signinPage.termsSuffix')}
            </Text>
        </TermsBoxInner>
    );
};

export default TermsBox;