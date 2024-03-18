import { useSelector } from 'react-redux';

import darkBackgroundImgFHD from '@assets/images/backgroundDarkFHD.png';
import darkBackgroundImg2K from '@assets/images/backgroundDark2K.png';
import darkBackgroundImg4K from '@assets/images/backgroundDark4K.png';
import lightBackgroundImgFHD from '@assets/images/backgroundLightFHD.png';
import lightBackgroundImg2K from '@assets/images/backgroundLight2K.png';
import lightBackgroundImg4K from '@assets/images/backgroundLight4K.png';

/**
 * Image
 * @description
 * This is the image for the background.
 * It is used as a fallback for webkit browsers.
 **/
const Image = () => {
    const preference = useSelector(state => state.theme.preference);
    const srcSet = preference
        ? `${darkBackgroundImgFHD} 1920w, ${darkBackgroundImg2K} 2160w, ${darkBackgroundImg4K} 3840w`
        : `${lightBackgroundImgFHD} 1920w, ${lightBackgroundImg2K} 2160w, ${lightBackgroundImg4K} 3840w`;

    return (
        <img src={preference ? darkBackgroundImgFHD : lightBackgroundImgFHD} srcSet={srcSet} alt='Background texture' />
    );
};

export default Image;