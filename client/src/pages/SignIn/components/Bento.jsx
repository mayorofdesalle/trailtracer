import { useTheme } from 'styled-components';

import Icon from '@components/ui/Icon';

import BentoGrid from './BentoGrid';
import SignupBox from './SignupBox/SignupBox';
import UserBox from './UserBox';
import SigninBox from './SigninBox/SigninBox';
import TermsBox from './TermsBox';
import HelpBox from './HelpBox';

const Bento = () => {
    const theme = useTheme();

    return (
        <BentoGrid>
            <SigninBox />

            <UserBox>
                <Icon name='user-fill' color={theme.colors.primary} />
            </UserBox>

            <TermsBox $glass />
            <HelpBox $glass />

            <SignupBox />

        </BentoGrid>
    );
};

export default Bento;