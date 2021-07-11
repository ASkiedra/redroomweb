const separateWords = text => {
    if (typeof text !== 'string')
        return ['', ''];

    let index = text.indexOf(' ');

    return [text.substring(0, index), text.substring(index)];
};

export default separateWords;