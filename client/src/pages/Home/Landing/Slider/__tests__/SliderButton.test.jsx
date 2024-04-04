import { describe, expect, it, render, screen, vi } from '@app/tester';

import SliderButton from '../SliderButton';

describe('SliderButton', () => {

    it('should render correctly', () => {
        render(<SliderButton onDrag={vi.fn()} onStop={vi.fn()} />);
        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
        expect(button.firstChild).toBeInTheDocument();
        expect(button.firstChild).toHaveRole('img');
        expect(button.lastChild).toBeInTheDocument();
        expect(button.lastChild).toHaveRole('img');
    });

    it('should match snapshot', () => {
        const { asFragment } = render(<SliderButton onDrag={vi.fn()} onStop={vi.fn()} />);
        expect(asFragment()).toMatchSnapshot();
    });

});