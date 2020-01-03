import castedToDraft from './index.mjs';
import castedDiarizationTranscript from './sample/castedDiarization.sample.json';

console.log('Starting');
console.log(JSON.stringify(castedToDraft(castedDiarizationTranscript), null, 2));
