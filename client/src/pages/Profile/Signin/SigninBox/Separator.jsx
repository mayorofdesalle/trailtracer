import { useContext } from 'react';
import styled from 'styled-components';

import Container from '@components/ui/Container';
import Text from '@components/ui/Text';
import PageContext from '@context/PageContext';

const HR = styled.hr`
    width: 100%;
    height: 2px;
    margin-left: clamp(0.5rem, min(1dvw, 1dvh), 2rem);
    background-color: ${({ theme }) => theme.colors.secondary};
`;

const SeparatorInner = styled(Container)`
    justify-content: space-around;
    height: fit-content;

    & > ${HR}:first-of-type {
        margin-left: 0;
        margin-right: clamp(0.5rem, min(1dvw, 1dvh), 2rem);
    }

    & > ${Text} {
        flex-shrink: 0;
    }
`;

/**
 * Separator
 * @description
 * Horizontal rule with text in the middle.
 * **/
const Separator = () => {
    const context = useContext(PageContext);
    const theme = context.theme;
    const t = context.t;

    return (
        <SeparatorInner>
            <HR /><Text $color={theme.colors.background}>{t('signinPage.auths')}</Text><HR />
        </SeparatorInner>
    );
};

export default Separator;