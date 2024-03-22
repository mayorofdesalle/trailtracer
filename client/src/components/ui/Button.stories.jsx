import { fn } from '@storybook/test';

import { colors } from '@components/style/themes';

import Text from './Text';
import Button from './Button';

export default {
    component: Button,
    args: {
        label: 'Button',
        bgColor: null,
        animColor1: null,
        animColor2: null,
        textColor: null,
        onClick: fn()
    },
    argTypes: {
        label: { control: 'text' },
        bgColor: {
            options: colors
        },
        animColor1: {
            options: colors
        },
        animColor2: {
            options: colors
        },
        textColor: {
            options: colors
        }
    },
    parameters: {
        layout: 'centered',
        controls: {
            exclude: ['register', 'type', 'children', 'disabled', 'type', 'error', 'onClick']
        }
    },
    tags: ['autodocs']
};

export const DefaultButton = (args, context) => {
    const defaultTextColor = context.globals.theme === 'light' ? colors.white : colors.black;
    const defaultAnimColors = context.globals.theme === 'light' ? [colors.darkGreen, colors.coral] : [colors.mint, colors.coral];

    return (
        <Button $bgColor={args.bgColor} $animColors={[args.animColor1 || defaultAnimColors[0], args.animColor2 || defaultAnimColors[1]]} onClick={args.onClick}>
            <Text $color={args.textColor || defaultTextColor} $heading>{args.label}</Text>
        </Button>
    );
};