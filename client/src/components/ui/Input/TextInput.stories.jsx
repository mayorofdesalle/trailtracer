import { useForm } from 'react-hook-form';
import { fn } from '@storybook/test';

import { lightTheme, darkTheme } from '@components/style/themes';

import Icon from '../Icon';
import TextInput from './TextInput';

export default {
    component: TextInput,
    args: {
        required: false,
        onSubmit: fn()
    },
    parameters: {
        layout: 'centered',
        controls: {
            exclude: ['register', 'type', 'children', 'disabled', 'type', 'error', 'validate', 'watch', 'onSubmit']
        }
    },
    tags: ['autodocs']
};

export const DefaultTextInput = (args) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: { text: '' }
    });

    return (
        <form onSubmit={handleSubmit(args.onSubmit)} errors={errors.text}>
            <TextInput register={register} type='text' required={args.required} />
        </form>
    );
};

export const EmailTextInput = (args, context) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: { email: '' }
    });

    return (
        <form onSubmit={handleSubmit(args.onSubmit)} errors={errors.email}>
            <TextInput register={register} type='email' required={args.required}>
                <Icon name='at-fill' color={context.globals.theme === 'light' ? lightTheme.colors.primary : darkTheme.colors.primary} />
            </TextInput>
        </form>

    );
};

export const PasswordTextInput = (args, context) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: { password: '' }
    });

    return (
        <form onSubmit={handleSubmit(args.onSubmit)} errors={errors.password}>
            <TextInput register={register} type='password' watch={watch} errors={errors.password} required={args.required}>
                <Icon name='key-fill' color={context.globals.theme === 'light' ? lightTheme.colors.primary : darkTheme.colors.primary} />
            </TextInput>
        </form>
    );
};