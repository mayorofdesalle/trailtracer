import styled from 'styled-components';

import { fadeIn } from '@components/anims';
import { Container } from '@components/ui';

/**
 * Page
 * @description
 * Styled container for the page content.
 **/
const Page = styled(Container).attrs({ role: 'main' })`
	animation: ${fadeIn} 500ms;
`;

export default Page;