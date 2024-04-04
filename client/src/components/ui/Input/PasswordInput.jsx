import PropTypes from 'prop-types';
import { Children, useCallback, useContext, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { FormContext } from '@context';

import Container from '../Container';
import Button from '../Button';
import Icon from '../Icon';
import RTooltip from '../R_Tooltip';
import Text from '../Text';
import { BaseTextInput, BaseTextInputContainer } from './BaseTextInput';
import inputRules from './inputRules';

/**
 * PasswordInput
 * @param {node} children - The children of the component
 * @param {boolean} required - Whether the input is required
 * @param {boolean} disabled - Whether the input is disabled
 * @param {boolean} validate - Whether the input should be validated
 * @param {object} props - The rest of the native props of the component
 * @description
 * Default styled password input component.
 */
const PasswordInput = ({ children, name = 'password', id = 'password', error, required, disabled, validate, ...props }) => {
    const theme = useTheme();
    const { t } = useTranslation();
    const { register, setFocus, setValue, watch } = useContext(FormContext);

    const hasIconChildren = useMemo(() => Children.toArray(children).map(child => child.type.name === 'Icon').length > 0, [children]);

    const [isHidden, setIsHidden] = useState(true);
    const watchPassword = watch(name);

    const toggleHidden = useCallback(() => setIsHidden((isHidden) => !isHidden), []);

    return (
        <BaseTextInputContainer>
            <label htmlFor={id} hidden>{t(`forms.${name}`)}</label>
            {error &&
                <RTooltip id={id} place='left' openEvents={{ focus: true }} closeEvents={{ blur: true }}>
                    <Text>{t(error.message)}</Text>
                </RTooltip>}
            <BaseTextInput type={isHidden ? 'password' : 'text'} name={name} id={id} placeholder={t(`forms.${name}`)} autoComplete={name}
                data-tooltip-id={id} $hasLeftIcon={hasIconChildren} $hasRightIcon
                {...register(name, inputRules(name, required, disabled, validate))} {...props} />
            {children}
            {watchPassword &&
                <Button onClick={toggleHidden} role='switch'>
                    <Icon name={isHidden ? 'eye-fill' : 'eye-off-fill'} color={theme.colors.primary} />
                </Button>}
        </BaseTextInputContainer>
    );
};

PasswordInput.propTypes = {
    children: PropTypes.node,
    name: PropTypes.string,
    id: PropTypes.string,
    error: PropTypes.object,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    validate: PropTypes.bool
};

export default PasswordInput;

