import Bento from './components/Bento';
import preloadImages from '@utils/preloadImages';

/**
 * SignIn
 * @description
 * Sign in page of the application.
 **/
const SignIn = () => {
    preloadImages('biker2', '/src/assets/images/biker2.svg');

    return (
        <Bento />
    );
};

export default SignIn;