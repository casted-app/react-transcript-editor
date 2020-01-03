/**
* Converts Casted Json to DraftJs
* see `sample` folder for example of input and output as well as `example-usage.js`
*/

import generateEntitiesRanges from '../generate-entities-ranges/index.js';


/**
 * Normalizes words so they can be used in
 * the generic generateEntitiesRanges() method
 **/
const normalizeWord = (currentWord) => {

  return {
    start: currentWord.startTime / 1000,
    end: currentWord.endTime / 1000,
    text: currentWord.word.trim(),
  };
};

/**
 * groups words list from Casted JSON.
 * @param {array} words - array of words objects from Casted
 */
const groupWordsInParagraphs = words => {
  const results = [];

  words.forEach((word) => {
    const normalized = normalizeWord(word)

    if (results[word.group]) {
      results[word.group].text += ' ' + normalized.text
      results[word.group].words.push(normalized)
    } else {
      let paragraph = {
        words: [],
        text: '',
        speaker: null
      };

      paragraph.words.push(normalized)
      paragraph.text = normalized.text

      if (word.speaker) {
        paragraph.speaker = word.speaker
      }

      results.push(paragraph)
    }
  })

  return results;
};

const castedToDraft = castedJson => {
  const results = [];
  const wordsByParagraphs = groupWordsInParagraphs(castedJson);

  wordsByParagraphs.forEach((paragraph, i) => {
    const draftJsContentBlockParagraph = {
      text: paragraph.text,
      type: 'paragraph',
      data: {
        speaker: paragraph.speaker ? `Speaker ${paragraph.speaker}` : `TBC ${i}`,
        words: paragraph.words,
        start: parseFloat(paragraph.words[0].start)
      },
      // the entities as ranges are each word in the space-joined text,
      // so it needs to be compute for each the offset from the beginning of the paragraph and the length
      entityRanges: generateEntitiesRanges(paragraph.words, 'text') // wordAttributeName
    };
    results.push(draftJsContentBlockParagraph);
  });

  return results;
};

export default castedToDraft;
