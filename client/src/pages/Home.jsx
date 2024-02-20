import PageContainer from '../layout/PageContainer';
import Background from '../components/ui/defaults/Background';
import FirstBento from '../components/ui/home/FirstBento';

const Home = () => {
    return (
        <PageContainer>
            <Background />
            <FirstBento />
        </PageContainer>
    );
};

export default Home;