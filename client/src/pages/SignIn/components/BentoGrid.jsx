import styled from 'styled-components';

import Grid from '@components/ui/Bento/BentoGrid';

/**
 * BentoGrid
 * @description
 * This is a styled container that is used to provide the grid layout of the bento.
 **/
const BentoGrid = styled(Grid)`
    grid-template-columns: 2fr 3fr 1.25fr 0.75fr;
    grid-template-rows: 5fr 1fr 2fr;
    grid-template-areas:
        'ImageBox   FrameBox    SigninBox    SigninBox'
        'SignupBox  FrameBox    SigninBox    SigninBox'
        'SignupBox  FrameBox    TermsBox     HelpBox';

    /* Medium screens and downwards */
    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) or (max-aspect-ratio: 1) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 2fr 1fr 0.5fr;
        grid-template-areas:
            'SigninBox  SigninBox   SigninBox'
            'TermsBox   ImageBox     HelpBox'
            'SignupBox  SignupBox   SignupBox';
    }
`;

export default BentoGrid;