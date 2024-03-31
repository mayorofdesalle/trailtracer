import styled from 'styled-components';

import { fadeIn } from '@components/anims';
import Container from '@components/ui/Container';

/**
 * Page
 * @description
 * Styled container for the page content.
 **/
const Page = styled(Container)`
	animation: ${fadeIn} 500ms;
`;

export default Page;