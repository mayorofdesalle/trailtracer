import { useTranslation } from 'react-i18next';
import styled, { useTheme } from 'styled-components';

import { Button, Icon, Text } from '@components/ui';
import { BentoBox } from '@components/ui/bento';

const HelpBoxInner = styled(BentoBox)`
    grid-area: HelpBox;
    padding: 8%;
    flex-direction: column;
    justify-content: space-around;

    & > svg {
        height: 4dvh;
        width: 4dvh;
    }
`;

const HelpBox = (props) => {
    const theme = useTheme();
    const { t } = useTranslation();

    return (
        <HelpBoxInner as={Button} $glass {...props}>
            <Icon name='login-box-fill' color={theme.colors.primary} />
            <Text $color={theme.colors.text} $heading $ratio={0.9}>{t('signinPage.help')}</Text>
        </HelpBoxInner>
    );
};

export default HelpBox;