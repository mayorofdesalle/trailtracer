import i18n from 'i18next';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { components } from 'react-select';
import styled from 'styled-components';

import Container from '@components/ui/Container';
import Icon from '@components/ui/Icon';
import RSelect from '@components/ui/RSelect';
import Text from '@components/ui/Text';

const { Option, SingleValue } = components;

const LanguageOption = ({ data, ...props }) => (
    <Option {...props}>
        <Icon name={data.value} />
        <span>{data.label}</span>
    </Option>
);

LanguageOption.propTypes = {
    data: PropTypes.object.isRequired
};

const LanguageSingleValue = ({ data, ...props }) => (
    <SingleValue {...props}>
        <Icon name={data.value} />
        <span>{data.label}</span>
    </SingleValue>
);

LanguageSingleValue.propTypes = {
    data: PropTypes.object.isRequired
};

const LanguageSelectorInner = styled(RSelect)`
    width: 100%;
    margin-top: clamp(0.25rem, min(0.5dvw, 0.5dvh), 1rem);

    .Select__option, .Select__single-value {
        display: flex;
        align-items: center;

        & > svg {
            border-radius: max(0.25dvh, 0.25dvw, 0.25rem);
            margin-left: clamp(0.125rem, min(0.5dvw, 0.5dvh), 0.5rem);
        }

        & > span {
            padding-left: clamp(0.125rem, min(0.5dvw, 0.5dvh), 0.5rem);
        }
    }

    .Select__menu {
        overflow-y: auto;
        max-height: 300%;
    }
`;

const LanguageSelectorContainer = styled(Container)`
    height: fit-content;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
`;

/**
 * LanguageSelector
 * @description
 * Manual selector for the app language.
 **/
const LanguageSelector = () => {
    const { t } = useTranslation();
    const languages = useMemo(() => i18n.supportedLanguages.map((language) => ({ value: language.code, label: language.name })), []);
    const defaultValue = useMemo(() => languages.indexOf(languages.find((language) => language.value === i18n.resolvedLanguage)), [languages]);

    return (
        <LanguageSelectorContainer>
            <Text $heading $ratio={0.5}>{t('forms.language')}</Text>
            <LanguageSelectorInner
                defaultValue={languages[defaultValue]}
                options={languages}
                components={{ Option: LanguageOption, SingleValue: LanguageSingleValue }}
                onChange={(selected) => i18n.changeLanguage(selected.value)}
                isSearchable={false} />
        </LanguageSelectorContainer>
    );
};

export default LanguageSelector;
