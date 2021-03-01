const decodeAnagramWord = (anagramWord: string): string => {
  return anagramWord.toLowerCase().split(``).sort((a: string, b: string) => (a > b) ? 1 : -1).join(``);
}

export const isAnagram = (word1: string, word2: string): boolean => {

  // It is not an anagram if its the same word in both strings
 if (word1 === word2) {
   return false;
 } else if (typeof word1 !== 'string' || typeof word2 !== 'string') {
   return false;
 }

  const words1: string = decodeAnagramWord(word1);
  const words2: string = decodeAnagramWord(word2);
  return words1.length !== words2.length ? false : words1 !== words2 ? false : true;
}
