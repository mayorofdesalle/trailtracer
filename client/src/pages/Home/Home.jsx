import { useEffect, useRef, useState } from 'react';

import PageContainer from '@layout/PageContainer';

import ScrollWrapper from './ScrollWrapper';
import FirstBento from './components/FirstBento/Bento';
import Slider from './components/Slider/Slider';
import StartButton from './components/StartButton/StartButton';

/**
 * Home
 * @description
 * This is the home page of the application.
 **/
const Home = () => {
	const scrollWrapper = useRef();
	const [pageScroll, setPageScroll] = useState(0);

	useEffect(() => {
		// This is a workaround for the scroll behaviour when dragging the Slider.
		// When the button is being dragged, the scroll behaviour is set to 'auto' not to cause a stutter.
		// When the button is released, the scroll behaviour is set back to 'smooth'.
		let scrollBehaviour = 'smooth';
		if (document.body.getElementsByClassName('isDragging').length > 0) {
			scrollBehaviour = 'auto';
		}
		scrollWrapper.current?.scrollTo({ left: pageScroll, behavior: scrollBehaviour });
	}, [pageScroll]);

	return (
		<PageContainer>
			<ScrollWrapper ref={scrollWrapper}>
				<FirstBento />
				<FirstBento />
				<FirstBento />
				<FirstBento />
			</ScrollWrapper>
			<Slider wrapperWidth={scrollWrapper.current?.getBoundingClientRect().width} setPageScroll={setPageScroll} />
			<StartButton />
		</PageContainer>
	);
};

export default Home;