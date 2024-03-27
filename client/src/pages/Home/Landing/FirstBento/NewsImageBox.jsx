import styled from 'styled-components';

import BentoBox from '@components/ui/Bento/BentoBox';

/**
 * NewsImageBox
 * @description
 * Styled bento box to display the media related to the news description.
 **/
const NewsImageBox = styled(BentoBox)`
    grid-area: NewsImageBox;
    overflow: hidden;
`;

export default NewsImageBox;