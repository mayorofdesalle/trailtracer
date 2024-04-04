import { describe, expect, it, render, screen } from '@app/tester';

import NewsBox from '../NewsBox';

describe('NewsBox', () => {

    it('should render correctly', () => {
        render(<NewsBox data-testid='news-box' />);
        const newsBox = screen.getByTestId('news-box');

        expect(newsBox).toBeInTheDocument();
        expect(newsBox).toHaveStyle('grid-area: NewsBox');
    });

});