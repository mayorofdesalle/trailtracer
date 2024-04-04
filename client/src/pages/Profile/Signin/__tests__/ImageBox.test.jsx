import { describe, expect, it, render, screen } from '@app/tester';

import ImageBox from '../ImageBox';

describe('ImageBox', () => {

    it('should render correctly', () => {
        render(<ImageBox data-testid='image-box' />);
        const imageBox = screen.getByTestId('image-box');
        expect(imageBox).toHaveStyle({ gridArea: 'ImageBox' });

        expect(imageBox).toBeInTheDocument();
        expect(imageBox.firstChild).toHaveRole('img');
    });

});