import { describe, expect, it, render, screen } from '@app/tester';

import BentoBox from '../BentoBox';
import { pseudoBentoArrowTop, pseudoBentoArrowBottom, pseudoBentoArrowLeft, pseudoBentoArrowRight } from '../mixins';
import styled from 'styled-components';

describe('BentoBox', () => {

    it('should render correctly with no props', () => {
        render(<BentoBox data-testid='bento-box' />);
        const box = screen.getByTestId('bento-box');
        expect(box).toBeInTheDocument();
    });

    it('should render correctly with color', () => {
        render(<BentoBox $color='black' data-testid='color-bento-box' />);
        const box = screen.getByTestId('color-bento-box');
        expect(box).toBeInTheDocument();
    });

    it('should render correctly with glass effect', () => {
        render(<BentoBox $glass data-testid='glass-bento-box' />);
        const box = screen.getByTestId('glass-bento-box');
        expect(box).toBeInTheDocument();
    });

});