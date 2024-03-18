import styled, { useTheme } from 'styled-components';

import Container from '@components/ui/Container';
import Text from '@components/ui/Text';

const HR = styled.hr`
    width: calc((100% - clamp(0.825rem, min(2dvw, 2dvh), 2.5625rem) * 9) / 2);
    height: 2px;
    background-color: ${({ theme }) => theme.colors.secondary};
`;

const SeparatorInner = styled(Container)`
    justify-content: space-around;
    height: fit-content;

    & > ${HR} {
        margin-left: 0.5rem;
    }

    & > ${HR}:first-of-type {
        margin-left: 0;
        margin-right: 0.5rem;
    }
`;

const Separator = () => {
    const theme = useTheme();
    return (
        <SeparatorInner>
            <HR /><Text $color={theme.colors.background}>or continue with</Text><HR />
        </SeparatorInner>
    );
};

export default Separator;