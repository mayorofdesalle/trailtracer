import { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';

import useWindowSize from '@hooks/useWindowSize';
import Text from '@components/ui/Text';
import Vector from '@components/ui/Vector';

import GridPlaceholder from '../GridPlaceholder';
import BentoGrid from './BentoGrid';
import HeroImageBox from './HeroImageBox';
import HeroDescriptionBox from './HeroDescriptionBox';
import ActionBox from './ActionBox';
import NewsImageBox from './NewsImageBox';
import NewsBox from './NewsBox';
import TopTrailBox from './TopTrailBox';
import PopularBox from './PopularBox';

/**
 * Bento
 * @description
 * This is the first bento of the landing page.
 **/
const Bento = () => {
    const theme = useTheme();
    const { t } = useTranslation();
    const { height, width } = useWindowSize();
    const largeScreen = width > theme.breakpoints.medium && width / height > 1;

    return (
        <BentoGrid>
            <HeroImageBox />

            <HeroDescriptionBox $glass>
                <Text $heading $color={theme.colors.text}>
                    {t('landingPage.title')}
                </Text>
            </HeroDescriptionBox>

            <ActionBox $gridArea='ActionBox1' $color={theme.colors.primary}>
                <Vector id='L' $name={largeScreen ? 'arrowUpRight' : 'arrowUp'} $color={theme.colors.tertiary} $height='7dvh' $width='7dvh' $position='top' />
                <Text $color={theme.colors.tertiary}>{t('landingPage.CTA1')}</Text>
            </ActionBox>

            <ActionBox $gridArea='ActionBox2' $color={theme.colors.secondary} >
                <Text $color={theme.colors.primary}>{t('landingPage.CTA2')}</Text>
                <Vector id='R' $name='arrowLeft' $color={theme.colors.primary} $height={'4dvh'} $width={'8dvh'} $position='bottom' />
            </ActionBox>

            {largeScreen && (
                <>
                    <NewsImageBox $color={theme.colors.primary} />
                    <NewsBox $glass />
                    <TopTrailBox $color={theme.colors.primary} />
                    <PopularBox $glass />
                </>
            )}

            <GridPlaceholder gridArea='Slider' />
            <GridPlaceholder gridArea='StartButton' />
        </BentoGrid>
    );
};

export default Bento;
