import { useTranslation } from 'react-i18next';
import styled, { useTheme } from 'styled-components';

import { slideFromBottom } from '@components/style/anims';
import { pseudoBentoArrowTop } from '@components/ui/Bento/Arrows';
import BentoBox from '@components/ui/Bento/BentoBox';
import Text from '@components/ui/Text';

const HeroDescriptionBoxInner = styled(BentoBox)`
    grid-area: HeroDescriptionBox;
    --arrowColor: ${({ theme }) => theme.colors.primary};
    ${pseudoBentoArrowTop}

    &::before {
        animation: ${slideFromBottom} 1s ease-in-out;
    }
`;

/**
 * HeroDescriptionBox
 * @description
 * Styled bento box to contain the hero description.
 **/
const HeroDescriptionBox = () => {
    const theme = useTheme();
    const { t } = useTranslation();

    return (
        <HeroDescriptionBoxInner $glass>
            <Text $heading $color={theme.colors.text}>
                {t('landingPage.title')}
            </Text>
        </HeroDescriptionBoxInner>
    );
};

export default HeroDescriptionBox;