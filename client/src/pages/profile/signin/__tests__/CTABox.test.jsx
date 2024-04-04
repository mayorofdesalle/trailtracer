import { describe, expect, it, render, screen } from '@app/tester';

import CTABox from '../CTABox';

describe('CTABox', () => {

    it('should render correctly', () => {
        render(<CTABox />);
        const ctaBox = screen.getByRole('complementary');
        expect(ctaBox).toBeInTheDocument();
        expect(ctaBox).toHaveStyle({ gridArea: 'CTABox' });

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

});