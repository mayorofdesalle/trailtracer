import { describe, expect, it, render, screen } from '@app/tester';

import { Icon } from '@components/ui';

import TextInput from '../TextInput';

describe('TextInput', () => {

    it('should render correctly with no props', () => {
        render(<TextInput />);
        const textInput = screen.getByRole('textbox');
        expect(textInput).toBeInTheDocument();
    });

    it('should render correctly with all props', () => {
        render(<TextInput error={{ message: 'Error' }} type="email" required clearable disabled validate />);
        const textInput = screen.getByRole('textbox');
        expect(textInput).toBeInTheDocument();
    });

    it('should render with icon', () => {
        render(<TextInput><Icon /></TextInput>);
        const textInput = screen.getByRole('textbox');
        expect(textInput).toBeInTheDocument();
        expect(textInput.nextElementSibling).toBeInTheDocument();
        expect(textInput.nextElementSibling.tagName).toBe('svg');
    });
});