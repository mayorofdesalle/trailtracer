import { describe, expect, it, render, screen } from '@app/tester';
import userEvent from '@testing-library/user-event';

import ThemeToggle from '../ThemeToggle';

describe('ThemeToggle', () => {

    it('should render correctly', () => {
        render(<ThemeToggle data-testid='theme-toggle' />);
        const toggle = screen.getByTestId('theme-toggle');
        expect(toggle).toBeInTheDocument();
        expect(toggle).toHaveTextContent(/theme/i);

        const icon = screen.getByRole('img');
        expect(icon).toBeInTheDocument();

        const button = screen.getByRole('switch');
        expect(button).toBeInTheDocument();
    });

    it('should toggle theme', async () => {
        const user = userEvent.setup();

        render(<ThemeToggle />);
        const button = screen.getByRole('switch');
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('aria-checked', 'false');

        await user.click(button);
        expect(button).toHaveAttribute('aria-checked', 'true');

        await user.click(button);
        expect(button).toHaveAttribute('aria-checked', 'false');
    });

    it('should match snapshot', () => {
        const { asFragment } = render(<ThemeToggle />);
        expect(asFragment()).toMatchSnapshot();
    });

});