import { useRef } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

import Container from '@components/ui/Container';
import useResize from '@hooks/useResize';
import PageContext from '@context/PageContext';

import Navbar from './Navbar/Navbar';
import Background from './Background/Background';

/**
 * ContentWrapper
 * @description
 * This is a styled container that is used to contain the content of the page.
 **/
const ContentWrapper = styled(Container)`
	position: relative;
	height: 100svh;
	width: 100svw;
	max-width: 160rem;
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
 * This is a styled container that is used to contain the whole page.
 * It also provides the size of the page to its children.
 **/
const PageContainer = ({ children }) => {
	const contentContainer = useRef();
	const size = useResize(contentContainer);

	return (
		<Container>
			<Background />
			<ContentWrapper>
				<ContentContainer ref={contentContainer}>
					<Navbar />
					<PageContext.Provider value={{ size }}>
						{children}
					</PageContext.Provider>
				</ContentContainer>
			</ContentWrapper>
		</Container>
	);
};

PageContainer.propTypes = {
	children: PropTypes.node,
};

export default PageContainer;
