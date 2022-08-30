export default function capitalizeFirstLetter(word) {

    if (typeof(word) != 'string') {
        return word
    }

    const firstLetter = word[0].toUpperCase();

    const otherLetter = word.slice(1).toLowerCase();

    const result = firstLetter.concat(otherLetter);
    
    return result;
}