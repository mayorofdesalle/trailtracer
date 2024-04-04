import { describe, expect, it, render, screen } from '@app/tester';

import { ActionBoxFirst, ActionBoxSecond } from '../ActionBox';

describe('ActionBoxFirst', () => {

    it('should render correctly', () => {
        render(<ActionBoxFirst data-testid='action-box-1' />);
        const actionBox = screen.getByTestId('action-box-1');

        expect(actionBox).toBeInTheDocument();
        expect(actionBox).toHaveStyle('grid-area: ActionBox1');
        expect(actionBox.firstChild).toHaveRole('img');
        expect(actionBox).toHaveTextContent(/CTA/i);
    });

});

describe('ActionBoxSecond', () => {

    it('should render correctly', () => {
        render(<ActionBoxSecond data-testid='action-box-2' />);
        const actionBox = screen.getByTestId('action-box-2');

        expect(actionBox).toBeInTheDocument();
        expect(actionBox).toHaveStyle('grid-area: ActionBox2');
        expect(actionBox.lastChild).toHaveRole('img');
        expect(actionBox).toHaveTextContent(/CTA/i);
    });

});