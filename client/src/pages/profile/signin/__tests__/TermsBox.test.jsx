import { describe, expect, it, render, screen } from '@app/tester';
import userEvent from '@testing-library/user-event';

import TermsBox from '../TermsBox';

describe('TermsBox', () => {

    it('should render correctly', () => {
        render(<TermsBox />);
        const termsBox = screen.getByRole('note');

        expect(termsBox).toBeInTheDocument();
        expect(termsBox).toHaveStyle({ gridArea: 'TermsBox' });
        expect(termsBox).toHaveTextContent(/terms/i);

        const icon = screen.getByRole('img');
        expect(icon).toBeInTheDocument();

        const link = screen.getByRole('link');
        expect(link).toBeInTheDocument();
    });

    it('should match snapshot', () => {
        const { asFragment } = render(<TermsBox />);
        expect(asFragment()).toMatchSnapshot();
    });

});