/**
 * Convert DraftJS to Casted format
 * 
 */
export default (blockData) => {
    const results = []
    let group = -1

    blockData.blocks.forEach((block) => {
        if (block.data.words !== undefined) {
            group++

            let speaker = block.data.speaker
            if(speaker) {
                if(speaker.startsWith('Speaker ')) { // Speaker is prepended when processing file
                    speaker = speaker.replace('Speaker ', '') 
                } else if(speaker.startsWith('TBC ')) { // placeholder used when speaker not in original file
                    speaker = ''
                }
            }

            block.data.words.forEach((word) => {
                const tmpWord = {
                    word: word.text,
                    startTime: word.start * 1000,
                    endTime: word.end * 1000,
                    group: group
                }

                if(speaker) {
                    tmpWord.speaker = speaker
                }

                results.push(tmpWord)
            })
        }
    })

    return JSON.stringify(results)
}