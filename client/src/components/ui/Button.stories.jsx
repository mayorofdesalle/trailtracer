import Button from './Button';

export default {
    title: 'Components/UI/Button',
    component: Button,
    args: {
        label: 'Button'
    },
    argTypes: {
        label: { control: 'text' }
    },
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};

export const DefaultButton = (args) => <Button>{args.label}</Button>;