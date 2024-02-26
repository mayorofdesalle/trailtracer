import { forwardRef } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

import Container from '@components/ui/Container';

import Border from './Border';
import Navbar from './Navbar/Navbar';
import Background from './Background/Background';

/**
 * ContentContainer
 * @description
 * This is a styled container that is used to contain the content of the page.
 **/
const ContentContainer = styled(Container)`
	position: relative;
	height: 100%;
	width: 100%;
	max-width: 160rem;
`;
/**
 * PageContainer
 * @description
 * This is a styled container that is used to contain the whole page.
 **/
const PageContainer = forwardRef(function PageContainer({ children }, ref) {
	return (
		<Container>
			<Background />
			<ContentContainer ref={ref}>
				<Border />
				<Navbar />
				{children}
			</ContentContainer>
		</Container>
	);
});

PageContainer.propTypes = {
	children: PropTypes.node,
};

export default PageContainer;
