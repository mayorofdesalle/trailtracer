import { describe, expect, it, render, screen } from '@app/tester';

import { Icon } from '@components/ui';
import PasswordInput from '../PasswordInput';

describe('PasswordInput', () => {

    it('should render correctly with no props', () => {
        render(<PasswordInput />);
        const passwordInput = screen.getByLabelText(/password/i);
        expect(passwordInput).toBeInTheDocument();
    });

    it('should render correctly with all props', () => {
        render(<PasswordInput error={{ message: 'Error' }} required disabled validate />);
        const passwordInput = screen.getByLabelText(/password/i);
        expect(passwordInput).toBeInTheDocument();
    });

    it('should render with icon', () => {
        render(<PasswordInput><Icon /></PasswordInput>);
        const passwordInput = screen.getByLabelText(/password/i);
        expect(passwordInput).toBeInTheDocument();
        expect(passwordInput.nextElementSibling).toBeInTheDocument();
        expect(passwordInput.nextElementSibling.tagName).toBe('svg');
    });
});