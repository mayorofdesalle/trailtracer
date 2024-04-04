import { describe, expect, it, render, screen } from '@app/tester';

import HeroImageBox from '../HeroImageBox';

describe('HeroImageBox', () => {

    it('should render correctly', () => {
        render(<HeroImageBox data-testid='hero-image-box' />);
        const heroImageBox = screen.getByTestId('hero-image-box');

        expect(heroImageBox).toBeInTheDocument();
        expect(heroImageBox).toHaveStyle('grid-area: HeroImageBox');
        expect(heroImageBox.firstChild).toHaveRole('img');
    });

});