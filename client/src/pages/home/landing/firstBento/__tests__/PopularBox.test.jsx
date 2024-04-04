import { describe, expect, it, render, screen } from '@app/tester';

import PopularBox from '../PopularBox';

describe('PopularBox', () => {

    it('should render correctly', () => {
        render(<PopularBox data-testid='popular-box' />);
        const popularBox = screen.getByTestId('popular-box');

        expect(popularBox).toBeInTheDocument();
        expect(popularBox).toHaveStyle('grid-area: PopularBox');
    });

});