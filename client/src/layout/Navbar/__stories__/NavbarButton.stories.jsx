import { fn } from '@storybook/test';

import { colors } from '@components/style/themes';

import NavbarButton from '../NavbarButton';

export default {
    component: NavbarButton,
    args: {
        icon: 'user',
        bgColor: null,
        animColor1: null,
        animColor2: null,
        textColor: null,
        onClick: fn()
    },
    argTypes: {
        icon: {
            options: ['user', 'sun', 'moon', 'translate'],
            control: { type: 'select' },
        },
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

export const DefaultNavbarButton = (args, context) => {
    const defaultAnimColors = context.globals.theme === 'light' ? [colors.darkGreen, colors.coral] : [colors.mint, colors.coral];

    return (
        <NavbarButton $bgColor={args.bgColor} $animColors={[args.animColor1 || defaultAnimColors[0], args.animColor2 || defaultAnimColors[1]]}
            icon={args.icon} onClick={args.onClick} />
    );
};