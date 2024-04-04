import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { Container } from '@components/ui';
import { Text } from '@components/ui';

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
const Separator = ({ color, ...props }) => {
    const { t } = useTranslation();

    return (
        <SeparatorInner {...props} role='separator'>
            <HR role='none' /><Text $color={color}>{t('signinPage.auths')}</Text><HR role='none' />
        </SeparatorInner>
    );
};

Separator.propTypes = {
    color: PropTypes.string
};

export default Separator;