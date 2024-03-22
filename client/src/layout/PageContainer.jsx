import { useState, useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled, { useTheme } from 'styled-components';

import useWindowSize from '@hooks/useWindowSize';
import { randomize } from '@features/backgroundSlice';
import Container from '@components/ui/Container';

import Navbar from './Navbar/Navbar';
import Background from './Background/Background';
import DisplayWarning from './DisplayWarning';

const ContentWrapper = styled(Container)`
	position: relative;
	height: 100dvh;
	width: 100dvw;

	max-width: 196rem;
	max-height: 148rem;
`;

const ContentContainer = styled(Container)`
	box-sizing: content-box;
	flex-direction: column;
	--margin: 1rem;
	top: var(--margin);
	left: var(--margin);
	height: calc(100% - 2 * var(--margin));
	width: calc(100% - 2 * var(--margin));
	border: 2px solid ${({ theme }) => theme.colors.primaryTransparent};
	overflow: hidden;
`;

/**
 * PageContainer
 * @description
 * Styled container  to contain the whole page.
 **/
const PageContainer = () => {
	const dispatch = useDispatch();
	const theme = useTheme();

	const [previousLocation, setPreviousLocation] = useState('');
	const location = useLocation();

	const { height, width } = useWindowSize();
	const aspectRatio = width / height;

	useEffect(() => {
		if (location.pathname !== previousLocation) {
			setPreviousLocation(location.pathname);
			dispatch(randomize());
		}
	}, [previousLocation, location, dispatch]);

	return (
		<Container>
			<Background />
			<ContentWrapper>
				<ContentContainer>
					{height < theme.breakpoints.small && aspectRatio > 1.25 ? <DisplayWarning /> :
						<>
							<Navbar />
							<Outlet />
						</>
					}
				</ContentContainer>
			</ContentWrapper>
		</Container>
	);
};

export default PageContainer;
