import { describe, expect, it, render, screen } from '@app/tester';

import HeroDescriptionBox from '../HeroDescriptionBox';

describe('HeroDescriptionBox', () => {

    it('should render correctly', () => {
        render(<HeroDescriptionBox data-testid='hero-description-box' />);
        const heroDescriptionBox = screen.getByTestId('hero-description-box');

        expect(heroDescriptionBox).toBeInTheDocument();
        expect(heroDescriptionBox).toHaveStyle('grid-area: HeroDescriptionBox');
        expect(heroDescriptionBox).toHaveTextContent(/title/i);
    });

});