import { expect, it, render, screen } from '@app/tester/tester';

import Icon from '../Icon';

it('Should render correctly with all props', async () => {
    const result = render(<Icon id='sun-fill' name='sun-fill' color='yellow' />);
    const { container } = result;
    const icon = screen.getByTitle('sun-fill');
    expect(icon).toBeDefined();
    await expect(result).toMatchSnapshot();
});