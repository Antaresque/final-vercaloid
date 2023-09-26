
export type SongData = {
    img: string,
    songInfo: any, // change later
    hintsUrl: string,
    resultUrl: string,
    hints: HintData[],
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