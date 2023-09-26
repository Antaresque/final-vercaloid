import type { SongData, HintPermission } from "$lib/types";
import { data, perms, songInfo } from "./data";

export const loadData = (): SongData[] => {
    return perms.map((permsElement, index) => {
        const dataElement = data[index];
        const songInfoElement = songInfo[index];

        if(permsElement.status === 'LOCKED' || permsElement.status === 'HINTS') {
            const hints = permsElement.hints.map((hintPerms, innerIndex) => {
                const hintsData = dataElement.hints[innerIndex];
                if(!hintPerms.hint)
                    hintsData.hint = '';
                if(!hintPerms.done)
                    hintsData.solution = '';

                return hintsData;
            });

            return { img: dataElement.img, hintsUrl: dataElement.hintsUrl, resultUrl: '', songInfo: [], hints: hints };
        }
        else {
            return { img: dataElement.img, hintsUrl: dataElement.hintsUrl, resultUrl: dataElement.resultUrl, songInfo: songInfoElement, hints: dataElement.hints };
        }
    })
}

