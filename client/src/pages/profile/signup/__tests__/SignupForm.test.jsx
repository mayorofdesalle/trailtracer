import { describe, expect, it, render, screen } from '@app/tester';

import SignupForm from '../SignupForm';

describe('SignupForm', () => {

    it('should render correctly', () => {
        render(<SignupForm />);

        const form = screen.getByRole('form');
        expect(form).toBeInTheDocument();

        const email = screen.getByRole('textbox');
        expect(email).toBeInTheDocument();

        const password = screen.getByLabelText(/password/i);
        expect(password).toBeInTheDocument();

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

});