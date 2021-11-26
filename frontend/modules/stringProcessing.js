import _ from 'lodash';

export const replaceSpaces = (
    string, replacement,
) => (
    _.replace(
        string,
        /\s+/g,
        replacement,
    )
);

export const trimEachWord = string => (
    replaceSpaces(
        _.trim(string), ' ',
    )
);

export const mapWords = (
    string, mapIteratee,
) => {
    let result;
    const trimmedString = trimEachWord(string);
    if (trimmedString) {
        result = _(trimmedString)
            .split(' ')
            .map(mapIteratee)
            .join(' ');
    } else {
        result = '';
    }
    return result;
};

export const prependToEachWord = (
    string, prependedPrefix,
) => (
    mapWords(
        string,
        word => (
            `${prependedPrefix}${word}`
        ),
    )
);

export const appendToEachWord = (
    string, appendedPrefix,
) => (
    mapWords(
        string,
        word => (
            `${word}${appendedPrefix}`
        ),
    )
);
