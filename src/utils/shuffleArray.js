/**
 * Shuffle Array (Fisher–Yates shuffle)
 * @param {array} array
 * @returns {array} shuffledArray
 */

function shuffleArray(array) {
    const shuffledArray = [...array];

    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        [shuffledArray[i], shuffledArray[j]] = [
            shuffledArray[j],
            shuffledArray[i],
        ];
    }

    return shuffledArray;
}

export default shuffleArray;
