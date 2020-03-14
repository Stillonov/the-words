/**
 * Load image
 * @param {string} url
 * @returns {Object} shuffledArray
 */

const loadImage = url =>
    new Promise(resolve => {
        const image = new Image();

        image.addEventListener('load', () => {
            resolve(image);
        });

        image.src = url;
    });

export default loadImage;
