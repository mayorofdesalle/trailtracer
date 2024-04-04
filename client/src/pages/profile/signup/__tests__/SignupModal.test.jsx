import { describe, expect, it, render, screen } from '@app/tester';

import SignupModal from '../SignupModal';

describe('SignupModal', () => {

    it('should render correctly', () => {
        render(<SignupModal />);
        const signupModal = screen.getByRole('dialog');
        expect(signupModal).toBeInTheDocument();
        expect(signupModal).toHaveStyle({ gridArea: 'SignupModal' });

        const form = screen.getByRole('form');
        expect(form).toBeInTheDocument();

        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(5);
        buttons.forEach(button => expect(button).toBeInTheDocument());
    });

    it('should match snapshot', () => {
        const { asFragment } = render(<SignupModal />);
        expect(asFragment()).toMatchSnapshot();
    });

});