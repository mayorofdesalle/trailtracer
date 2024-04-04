import { describe, expect, it, render, screen } from '@app/tester';

import Text, { Undr, Ovr, Thru } from '../Text';

describe('Text', () => {

    it('should render correctly with no props', async () => {
        render(<Text>Text</Text>);
        const text = screen.getByText('Text');
        expect(text).toBeInTheDocument();
    });

    it('should render correctly with all props', async () => {
        render(<Text $color='black' $heading>AllPropsText</Text>);
        const text = screen.getByText('AllPropsText');
        expect(text).toBeInTheDocument();
    });

});

describe('Undr', () => {

    it('should render correctly with no props', async () => {
        render(<Text><Undr>UnderlinedText</Undr></Text>);
        const text = screen.getByText('UnderlinedText');
        expect(text).toBeInTheDocument();
        expect(text).toHaveStyle('text-decoration-line: underline');
    });

    it('should render correctly with all props', async () => {
        render(<Text><Undr $color='black' $style='wavy'>UnderlinedAllPropsText</Undr></Text>);
        const text = screen.getByText('UnderlinedAllPropsText');
        expect(text).toBeInTheDocument();
        expect(text).toHaveStyle('text-decoration-line: underline');
    });
});

describe('Ovr', () => {

    it('should render correctly with no props', async () => {
        render(<Text><Ovr>OverlinedText</Ovr></Text>);
        const text = screen.getByText('OverlinedText');
        expect(text).toBeInTheDocument();
        expect(text).toHaveStyle('text-decoration-line: overline');
    });

    it('should render correctly with all props', async () => {
        render(<Text><Ovr $color='black' $style='wavy'>OverlinedAllPropsText</Ovr></Text>);
        const text = screen.getByText('OverlinedAllPropsText');
        expect(text).toBeInTheDocument();
        expect(text).toHaveStyle('text-decoration-line: overline');
    });

});

describe('Thru', () => {

    it('should render correctly with no props', async () => {
        render(<Text><Thru>ThruText</Thru></Text>);
        const text = screen.getByText('ThruText');
        expect(text).toBeInTheDocument();
        expect(text).toHaveStyle('text-decoration-line: line-through');
    });

    it('should render correctly with all props', async () => {
        render(<Text><Thru $color='black' $style='wavy'>ThruAllPropsText</Thru></Text>);
        const text = screen.getByText('ThruAllPropsText');
        expect(text).toBeInTheDocument();
        expect(text).toHaveStyle('text-decoration-line: line-through');
    });

});