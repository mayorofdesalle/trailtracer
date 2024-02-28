import { useRef } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

import Container from '@components/ui/Container';
import useResize from '@hooks/useResize';
import PageContext from '@context/PageContext';

import Navbar from './Navbar/Navbar';
import Background from './Background/Background';

/**
 * ContentContainer
 * @description
 * This is a styled container that is used to contain the content of the page (within the border).
 **/
const ContentContainer = styled(Container)`
	position: relative;
	height: 100svh;
	width: 100svw;
	max-width: 160rem;
	
	// Border
	&::before {
		content: '';
		pointer-events: none;
		box-sizing: border-box;
		position: absolute;
		--margin: 1rem;
		top: var(--margin);
		left: var(--margin);
		height: calc(100% - 2 * var(--margin));
		width: calc(100% - 2 * var(--margin));
		border: 2px solid ${({ theme }) => theme.colors.primaryTransparent};
		border-radius: 10px;
		z-index: 9999;
	}
`;

const OverflowMasker = styled(Container)`
	--margin: 1rem;
	top: var(--margin);
	left: var(--margin);
	height: calc(100% - 2 * var(--margin));
	width: calc(100% - 2 * var(--margin));
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
			<ContentContainer ref={contentContainer}>
				<OverflowMasker>
					<PageContext.Provider value={{ size }}>
						<Navbar />
						{children}
					</PageContext.Provider>
				</OverflowMasker>
			</ContentContainer>
		</Container>
	);
};

PageContainer.propTypes = {
	children: PropTypes.node,
};

export default PageContainer;
