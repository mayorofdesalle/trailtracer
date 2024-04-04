import { describe, expect, it, render, screen } from '@app/tester';

import SigninBox from '../SigninBox';

describe('SigninBox', () => {

    it('should render correctly', () => {
        render(<SigninBox />);

        const email = screen.getByRole('textbox');
        expect(email).toBeInTheDocument();

        const password = screen.getByLabelText(/password/i);
        expect(password).toBeInTheDocument();

        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(4);
        buttons.forEach(button => expect(button).toBeInTheDocument());
    });

});