import styled from 'styled-components';

import BentoBox from '@components/ui/Bento/BentoBox';

/**
 * NewsImageBox
 * @description
 * This is a styled bento box that is used to display the media related to the news description.
 **/
const NewsImageBox = styled(BentoBox)`
    grid-area: NewsImageBox;
    overflow: hidden;
`;

export default NewsImageBox;