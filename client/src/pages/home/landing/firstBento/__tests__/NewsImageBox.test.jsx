import { describe, expect, it, render, screen } from '@app/tester';

import NewsImageBox from '../NewsImageBox';

describe('NewsImageBox', () => {

    it('should render correctly', () => {
        render(<NewsImageBox data-testid='news-image-box' />);
        const newsImageBox = screen.getByTestId('news-image-box');

        expect(newsImageBox).toBeInTheDocument();
        expect(newsImageBox).toHaveStyle('grid-area: NewsImageBox');
    });

    it('should match snapshot', () => {
        const { asFragment } = render(<NewsImageBox />);
        expect(asFragment()).toMatchSnapshot();
    });

});