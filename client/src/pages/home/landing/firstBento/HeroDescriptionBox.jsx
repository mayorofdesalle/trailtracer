import { useTranslation } from 'react-i18next';
import styled, { useTheme } from 'styled-components';

import { slideFromBottom } from '@components/anims';
import { Text } from '@components/ui';
import { BentoBox } from '@components/ui/bento';
import { pseudoBentoArrowTop } from '@components/ui/bento/mixins';

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
const HeroDescriptionBox = (props) => {
    const theme = useTheme();
    const { t } = useTranslation();

    return (
        <HeroDescriptionBoxInner $glass {...props}>
            <Text $heading $color={theme.colors.text}>
                {t('landingPage.title')}
            </Text>
        </HeroDescriptionBoxInner>
    );
};

export default HeroDescriptionBox;