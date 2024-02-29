/** function getImageUrl(name)
 * @param {string} name - The name of the image to get the URL of.
 * @returns {string} The URL of the image.
 * @description
 * Returns the URL of the image with the given name.
**/
const getImageUrl = (name) => {
    return new URL(`../assets/images/${name}.svg`, import.meta.url).href;
};

export default getImageUrl;