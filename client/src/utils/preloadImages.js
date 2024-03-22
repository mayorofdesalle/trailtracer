
/**
 * function preloadImages(id, href, srcset, callback)
 * @param {string} id - The id of the image to preload.
 * @param {string} href - The href of the image to preload.
 * @param {string} srcset - The srcset of the image to preload.
 * @param {function} callback - The callback function to run after the image has been preloaded.
 * @description
 * Preloads an image.
 */
const preloadImages = (id, href, srcset, callback) => {
    const existingImage = document.getElementById(id);
    if (!existingImage) {
        const link = document.createElement('link');
        link.href = href;
        link.imageSrcSet = srcset;
        link.rel = 'preload';
        link.fetchPriority = 'high';
        link.as = 'image';
        link.id = id;
        document.body.appendChild(link);
        link.onload = () => {
            if (callback) callback();
        };
    }
    if (existingImage && callback) callback();
};
export default preloadImages;