import PropTypes from 'prop-types';
import { Children, useCallback, useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { FormContext } from '@context';

import Button from '../Button';
import Icon from '../Icon';
import RTooltip from '../R_Tooltip';
import Text from '../Text';
import { BaseTextInput, BaseTextInputContainer } from './BaseTextInput';
import inputRules from './inputRules';

/**
 * TextInput
 * @param {node} children - The children of the component
 * @param {object} error - The error object of the component
 * @param {string} type - The type of the input
 * @param {string} name - The name of the input
 * @param {boolean} required - Whether the input is required
 * @param {boolean} disabled - Whether the input is disabled
 * @param {boolean} validate - Whether the input should be validated
 * @param {object} props - The rest of the native props of the component
 * @description
 * Default styled text input component.
 */
const TextInput = ({ children, error, type, name = type, id = type, required, clearable, disabled, validate, ...props }) => {
    const theme = useTheme();
    const { t } = useTranslation();
    const { register, setFocus, setValue, watch } = useContext(FormContext);

    const hasIconChildren = useMemo(() => Children.toArray(children).map(child => child.type.name === 'Icon').length > 0, [children]);
    const watchInput = clearable && watch(name);

    const clearInput = useCallback((e) => {
        setValue(name, '');
        setFocus(name);
    }, []);

    return (
        <BaseTextInputContainer>
            <label htmlFor={id} hidden>{t(`forms.${name}`)}</label>
            {error &&
                <RTooltip id={id} place='left' openEvents={{ focus: true }} closeEvents={{ blur: true }}>
                    <Text>{t(error.message)}</Text>
                </RTooltip>}
            <BaseTextInput type={type} id={id} placeholder={t(`forms.${name}`)} autoComplete={name}
                data-tooltip-id={id} $hasLeftIcon={hasIconChildren} $hasRightIcon={clearable}
                {...register(name, inputRules(name, required, disabled, validate))} {...props} />
            {children}
            {watchInput &&
                <Button onClick={clearInput}>
                    <Icon name='close' />
                </Button>}
        </BaseTextInputContainer>
    );
};

TextInput.propTypes = {
    children: PropTypes.node,
    type: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    error: PropTypes.object,
    required: PropTypes.bool,
    clearable: PropTypes.bool,
    disabled: PropTypes.bool,
    validate: PropTypes.bool
};

export default TextInput;

