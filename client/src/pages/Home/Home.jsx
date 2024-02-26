import PageContainer from '@layout/PageContainer';

import FirstBento from './components/FirstBento/Bento';
import Slider from './components/Slider/Slider';
import StartButton from './components/StartButton/StartButton';

/**
 * Home
 * @description
 * This is the home page of the application.
 **/
const Home = () => {

	return (
		<PageContainer>
			<FirstBento>
				<Slider />
				<StartButton />
			</FirstBento>
		</PageContainer>
	);
};

export default Home;