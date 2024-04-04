import { describe, expect, it, render, screen } from '@app/tester';

import SigninForm from '../SigninForm';

describe('SigninForm', () => {

    it('should render correctly', () => {
        render(<SigninForm />);

        const form = screen.getByRole('form');
        expect(form).toBeInTheDocument();

        const email = screen.getByRole('textbox');
        expect(email).toBeInTheDocument();

        const password = screen.getByLabelText(/password/i);
        expect(password).toBeInTheDocument();

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    it('should match snapshot', () => {
        const { asFragment } = render(<SigninForm />);
        expect(asFragment()).toMatchSnapshot();
    });

});