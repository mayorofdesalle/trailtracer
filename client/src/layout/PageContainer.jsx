import Border from '../components/ui/defaults/Border';
import Navbar from './Navbar';
import Footer from './Footer';
import { PropTypes } from 'prop-types';

const PageContainer = ({ children }) => {
    return (
        <>
            <Border />
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

PageContainer.propTypes = {
    children: PropTypes.node
};

export default PageContainer;