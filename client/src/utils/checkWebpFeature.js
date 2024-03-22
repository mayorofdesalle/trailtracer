// From Google Developers @ https://developers.google.com/speed/webp/faq#how_can_i_detect_browser_support_for_webp

/**
 * function checkWebpFeature(feature, callback)
 * @param {string} feature
 * @param {function} callback
 * @description
 * Checks if the browser supports WebP images.
 */
const checkWebpFeature = (feature, callback) => {
    const kTestImages = {
        lossy: 'UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA',
        lossless: 'UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==',
        alpha: 'UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==',
        animation: 'UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA'
    };
    const img = new Image();
    img.onload = () => {
        const result = (img.width > 0) && (img.height > 0);
        callback(feature, result);
    };
    img.onerror = () => {
        callback(feature, false);
    };
    img.src = `data:image/webp;base64,${kTestImages[feature]}`;
};

export default checkWebpFeature;