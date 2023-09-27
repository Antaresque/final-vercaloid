import type { SongData, SongInfo, HintPermission, HintData } from "$lib/types";
import { loadDataRaw, loadPerms, songInfo } from "./data";

export const loadData = (): SongData[] => {
    const perms = loadPerms();
    const data = loadDataRaw();
    return perms.map((permsElement, index) => {
        const dataElement = data[index];
        const songInfoElement = songInfo[index];

        if(permsElement.status === 'LOCKED' || permsElement.status === 'HINTS') {
            const hints = permsElement.hints.map((hintPerms, innerIndex) => {
                const hintsData = {...dataElement.hints[innerIndex]};
                if(hintPerms.done === false)
                    hintsData.solution = '';

                return hintsData;
            });

            return { img: dataElement.img, hintsUrl: dataElement.hintsUrl, resultUrl: '', songInfo: {}, hints: hints };
        }
        else {
            return { img: dataElement.img, hintsUrl: dataElement.hintsUrl, resultUrl: dataElement.resultUrl, songInfo: songInfoElement, hints: dataElement.hints };
        }
    })
}

