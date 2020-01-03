const draftTranscriptSample = [
    {
        "text": "This is a sample first line.",
        "type": "paragraph",
        "data": {
            "speaker": "Speaker 1",
            "words": [
                {
                    "start": 0,
                    "end": 1,
                    "text": "This"
                },
                {
                    "start": 1,
                    "end": 2,
                    "text": "is"
                },
                {
                    "start": 2,
                    "end": 3,
                    "text": "a"
                },
                {
                    "start": 3,
                    "end": 4,
                    "text": "sample"
                },
                {
                    "start": 4,
                    "end": 5,
                    "text": "first"
                },
                {
                    "start": 5,
                    "end": 6,
                    "text": "line."
                }
            ],
            "start": 0
        },
        "entityRanges": [
            {
                "start": 0,
                "end": 1,
                "text": "This",
                "offset": 0,
                "length": 4,
                "key": expect.any(String),//"ss8pm4p"
            },
            {
                "start": 1,
                "end": 2,
                "text": "is",
                "offset": 5,
                "length": 2,
                "key": expect.any(String),//"ss8pm4p"
            },
            {
                "start": 2,
                "end": 3,
                "text": "a",
                "offset": 8,
                "length": 1,
                "key": expect.any(String),//"ss8pm4p"
            },
            {
                "start": 3,
                "end": 4,
                "text": "sample",
                "offset": 10,
                "length": 6,
                "key": expect.any(String),//"ss8pm4p"
            },
            {
                "start": 4,
                "end": 5,
                "text": "first",
                "offset": 17,
                "length": 5,
                "key": expect.any(String),//"ss8pm4p"
            },
            {
                "start": 5,
                "end": 6,
                "text": "line.",
                "offset": 23,
                "length": 5,
                "key": expect.any(String),//"ss8pm4p"
            }
        ]
    },
    {
        "text": "This is a sample second line",
        "type": "paragraph",
        "data": {
            "speaker": "Speaker 2",
            "words": [
                {
                    "start": 6,
                    "end": 7,
                    "text": "This"
                },
                {
                    "start": 7,
                    "end": 8,
                    "text": "is"
                },
                {
                    "start": 8,
                    "end": 9,
                    "text": "a"
                },
                {
                    "start": 9,
                    "end": 10,
                    "text": "sample"
                },
                {
                    "start": 10,
                    "end": 11,
                    "text": "second"
                },
                {
                    "start": 11,
                    "end": 12,
                    "text": "line"
                }
            ],
            "start": 6
        },
        "entityRanges": [
            {
                "start": 6,
                "end": 7,
                "text": "This",
                "offset": 0,
                "length": 4,
                "key": expect.any(String),//"ss8pm4p"
            },
            {
                "start": 7,
                "end": 8,
                "text": "is",
                "offset": 5,
                "length": 2,
                "key": expect.any(String),//"ss8pm4p"
            },
            {
                "start": 8,
                "end": 9,
                "text": "a",
                "offset": 8,
                "length": 1,
                "key": expect.any(String),//"ss8pm4p"
            },
            {
                "start": 9,
                "end": 10,
                "text": "sample",
                "offset": 10,
                "length": 6,
                "key": expect.any(String),//"ss8pm4p"
            },
            {
                "start": 10,
                "end": 11,
                "text": "second",
                "offset": 17,
                "length": 6,
                "key": expect.any(String),//"ss8pm4p"
            },
            {
                "start": 11,
                "end": 12,
                "text": "line",
                "offset": 24,
                "length": 4,
                "key": expect.any(String),//"ss8pm4p"
            }
        ]
    },
    
];
export default draftTranscriptSample;
