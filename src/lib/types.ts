
export type SongData = {
    img: string,
    songInfo: SongInfo, // change later
    hintsUrl: string,
    resultUrl: string,
    hints: HintData[],
}

export type SongInfo = {
    title: string;
    titleJP: string;
    artist: string;
    artistJP: string;
    ogImage: string;
    youtubeLink: string;
    sonolusLink: string;
    audioClip: string;
    difficultyLevel: string;
    bpm: string;
}

export type HintData = {
    name: string;
    hint: string;
    solution: string;
}

export type HintStatus = 'LOCKED'|'HINTS'|'OPEN';
export type Hint = {
    done: boolean, // crossed out, revealed task
    hint: boolean  // additional info
}

export type HintPermission = {
    status: HintStatus,
    hints: Hint[]
}
