import styled from 'styled-components';

import { darkTheme, lightTheme } from '@components/style/themes';
import BentoBox from '@components/ui/Bento/BentoBox';

const BackgroundDecorator = (Story, context) => {
    return (
        <BentoBox $color={context.globals.theme === 'light' ? lightTheme.colors.background : darkTheme.colors.background} style={{ padding: '4rem' }}>
            <Story {...context} />
        </BentoBox>
    );
};

export default BackgroundDecorator;