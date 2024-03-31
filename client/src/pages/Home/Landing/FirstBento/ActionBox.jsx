import { useTranslation } from 'react-i18next';
import styled, { useTheme } from 'styled-components';

import { slideFromLeft, slideFromRight } from '@components/anims';
import BentoBox from '@components/ui/Bento/BentoBox';
import Text from '@components/ui/Text';
import Vector from '@components/ui/Vector';
import useWindowSize from '@hooks/useWindowSize';

/**
 * ActionBox
 * @description
 * Styled bento box to contain the CTA content.
 **/
const ActionBox = styled(BentoBox)`
    grid-area: ${({ $gridArea }) => $gridArea};
    flex-direction: column;
    justify-content: space-around;
    overflow: hidden;

    & > #R {
        animation: ${slideFromRight} 1s ease-in-out;
    }

    & > #L {
        animation: ${slideFromLeft} 1s ease-in-out;
    }
`;

export const ActionBoxFirst = () => {
    const theme = useTheme();
    const { t } = useTranslation();
    const { height, width } = useWindowSize();
    const largeScreen = width > theme.breakpoints.medium && width / height > 1;

    return (
        <ActionBox $gridArea='ActionBox1' $color={theme.colors.primary}>
            <Vector id='L' $name={largeScreen ? 'arrowUpRight' : 'arrowUp'} $color={theme.colors.tertiary} $height='7dvh' $width='7dvh' $position='top' />
            <Text $color={theme.colors.tertiary}>{t('landingPage.CTA1')}</Text>
        </ActionBox>
    );
};

export const ActionBoxSecond = () => {
    const theme = useTheme();
    const { t } = useTranslation();

    return (
        <ActionBox $gridArea='ActionBox2' $color={theme.colors.secondary} >
            <Text $color={theme.colors.primary}>{t('landingPage.CTA2')}</Text>
            <Vector id='R' $name='arrowLeft' $color={theme.colors.primary} $height={'4dvh'} $width={'8dvh'} $position='bottom' />
        </ActionBox>
    );
};