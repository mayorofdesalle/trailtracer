import { useTranslation } from 'react-i18next';
import styled, { useTheme } from 'styled-components';

import { slideFromLeft, slideFromRight } from '@components/anims';
import { Text } from '@components/ui';
import { Vector } from '@components/ui';
import { BentoBox } from '@components/ui/bento';
import { useWindowSize } from '@hooks';

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

    & > .left {
        animation: ${slideFromLeft} 1s ease-in-out;
    }

    & > .right {
        animation: ${slideFromRight} 1s ease-in-out;
    }
`;

export const ActionBoxFirst = (props) => {
    const theme = useTheme();
    const { t } = useTranslation();
    const { height, width } = useWindowSize();
    const largeScreen = width > theme.breakpoints.medium && width / height > 1;

    return (
        <ActionBox $gridArea='ActionBox1' $color={theme.colors.primary} {...props}>
            <Vector className='left' $name={largeScreen ? 'arrowUpRight' : 'arrowUp'} $color={theme.colors.tertiary} $height='7dvh' $width='7dvh' $position='top' />
            <Text $color={theme.colors.tertiary}>{t('landingPage.CTA1')}</Text>
        </ActionBox>
    );
};

export const ActionBoxSecond = (props) => {
    const theme = useTheme();
    const { t } = useTranslation();
    const { height, width } = useWindowSize();
    const largeScreen = width > theme.breakpoints.medium && width / height > 1;

    return (
        <ActionBox $gridArea='ActionBox2' $color={theme.colors.secondary} {...props}>
            <Text $color={theme.colors.primary}>{t('landingPage.CTA2')}</Text>
            <Vector className='right' $name='arrowLeft' $color={theme.colors.primary} $height={'4dvh'} $width={'8dvh'} $position='bottom' />
        </ActionBox>
    );
};