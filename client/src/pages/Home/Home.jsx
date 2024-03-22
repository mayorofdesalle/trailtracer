import Landing from './components/Landing/Landing';
import preloadImages from '@utils/preloadImages';

/**
 * Home
 * @description
 * Home page of the application.
 **/
const Home = () => {
	preloadImages('biker', '/src/assets/images/biker.svg');

	return (
		<Landing />
	);
};

export default Home;