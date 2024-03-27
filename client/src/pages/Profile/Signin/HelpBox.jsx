import { useContext } from 'react';
import styled from 'styled-components';

import BentoBox from '@components/ui/Bento/BentoBox';
import Button from '@components/ui/Button';
import Icon from '@components/ui/Icon';
import Text from '@components/ui/Text';
import PageContext from '@context/PageContext';

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

const HelpBox = () => {
    const context = useContext(PageContext);
    const theme = context.theme;
    const t = context.t;

    return (
        <HelpBoxInner as={Button} $glass>
            <Icon name='login-box-fill' color={theme.colors.primary} />
            <Text $color={theme.colors.text} $heading $ratio={0.9}>{t('signinPage.help')}</Text>
        </HelpBoxInner>
    );
};

export default HelpBox;