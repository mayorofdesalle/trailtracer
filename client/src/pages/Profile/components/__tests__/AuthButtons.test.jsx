import { describe, expect, it, render, screen } from '@app/tester';

import AuthButtons from '../AuthButtons';

describe('AuthButtons', () => {

    it('should render correctly', () => {
        render(<AuthButtons />);
        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(3);
        buttons.forEach(button => expect(button).toBeInTheDocument());
    });

    it('should match snapshot', () => {
        const { asFragment } = render(<AuthButtons />);
        expect(asFragment()).toMatchSnapshot();
    });

});