"use strict";
exports.__esModule = true;
exports.isAnagram = void 0;
var decodeAnagramWord = function (anagramWord) {
    return anagramWord.toLowerCase().split("").sort(function (a, b) { return (a > b) ? 1 : -1; }).join("");
};
var isAnagram = function (word1, word2) {
    // It is not an anagram if its the same word in both strings
    if (word1 === word2) {
        return false;
    }
    else if (typeof word1 !== 'string' || typeof word2 !== 'string') {
        return false;
    }
    var words1 = decodeAnagramWord(word1);
    var words2 = decodeAnagramWord(word2);
    return words1.length !== words2.length ? false : words1 !== words2 ? false : true;
};
exports.isAnagram = isAnagram;
