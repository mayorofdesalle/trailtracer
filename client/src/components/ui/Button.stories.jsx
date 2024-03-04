import Button from './Button';

export default {
    title: 'Components/UI/Button',
    component: Button,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};

export const DefaultButton = () => <Button>Click me</Button>;