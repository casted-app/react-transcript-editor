import castedToDraft from './index';
import draftTranscriptSample from './sample/castedToDraftJs.sample.js';
import castedDiarizationTranscript from './sample/castedDiarization.sample.json';

describe('castedToDraft', () => {
  const result = castedToDraft(castedDiarizationTranscript);
  it('Should be defined', () => {
    console.log(result)
    expect(result).toBeDefined();
  });

  it('Should be equal to expected value', () => {
    expect(result).toEqual(draftTranscriptSample);
  });
});

