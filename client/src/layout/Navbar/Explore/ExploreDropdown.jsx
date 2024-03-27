import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import Dropdown from '@components/ui/Dropdown';
import Text from '@components/ui/Text';

const ExploreDropdownInner = styled(Dropdown)`
    height: 200%;
    width: 100%;
    top: clamp(2.25rem, min(5dvw, 5dvh), 5.5rem);
    right: 0;
    align-items: start;
`;

/**
 * ExploreDropdown
 * @description
 * Dropdown for exploring the website.
 **/
const ExploreDropdown = forwardRef(function ExploreDropdown(props, ref) {
    const { t } = useTranslation();

    return (
        <ExploreDropdownInner ref={ref} {...props}>
            <Text $heading $ratio={0.5}>{t('forms.explore')}</Text>
        </ExploreDropdownInner>
    );
});

export default ExploreDropdown;