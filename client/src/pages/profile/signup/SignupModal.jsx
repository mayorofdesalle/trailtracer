import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styled, { useTheme } from 'styled-components';

import { glassMorph } from '@components/mixins';
import { Button, Container, Icon, Text } from '@components/ui';
import { BentoBox, BentoGrid } from '@components/ui/bento';

import AuthButtons from '@pages/profile/components/AuthButtons';
import Separator from '@pages/profile/components/Separator';
import SignupForm from './SignupForm';

const SignupBentoGrid = styled(BentoGrid)`
    position: absolute;
	--margin: 1rem;
	top: var(--margin);
	left: var(--margin);
	height: calc(100% - 2 * var(--margin));
	width: calc(100% - 2 * var(--margin));
    ${glassMorph}
    border: none;
    z-index: 9999;

    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 10fr 1fr;
    grid-template-areas:
        '. .           .'
        '. SignupModal .'
        '. .           .';

    /* Medium screens and downwards */
    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) or (max-aspect-ratio: 1) {
        grid-template-columns: auto 1fr auto;
        grid-template-rows: auto 1fr auto;
    }
`;

const SignupModalInner = styled(BentoBox)`
    grid-area: SignupModal;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background};
    outline: 2px solid ${({ theme }) => theme.colors.primaryTransparent};
    flex-direction: column;
    justify-content: space-around;

    & > * {
        width: 80%;
    }
    
    & > ${Button} {
        position: absolute;
        right: clamp(1rem, min(2dvw, 2dvh), 4rem);
        top: clamp(1rem, min(2dvw, 2dvh), 4rem);
        padding: 0;
        --size: clamp(1.5rem, min(3dvw, 3dvh), 6rem);
        width: var(--size);
        height: var(--size);
    }
`;

const Wrapper = styled(Container)`
    height: fit-content;
    flex-direction: column;
`;

const SignupModal = ({ close, ...props }) => {
    const theme = useTheme();
    const { t } = useTranslation();

    return (
        <SignupBentoGrid>
            <SignupModalInner role='dialog'>
                <Button onClick={close}>
                    <Icon name="close-large" />
                </Button>
                <Wrapper>
                    <Text $color={theme.colors.primary} $heading $ratio={1.5}>{t('signupModal.title')}</Text>
                    <Text $color={theme.colors.text}>{t('signupModal.subtitle')}</Text>
                </Wrapper>
                <SignupForm />
                <Separator color={theme.colors.text} />
                <AuthButtons />
            </SignupModalInner>
        </SignupBentoGrid>
    );
};

SignupModal.propTypes = {
    close: PropTypes.func
};

export default SignupModal;