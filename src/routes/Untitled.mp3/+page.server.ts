import { loadPerms } from './../../lib/server/data';
import { loadData } from './../../lib/server/access_check';

export function load({ params }) {
    const perms = loadPerms();
    const songInfo = loadData();
    const enablePuzzle = perms.every(_ => _.status == 'LOCKED');

    console.log(perms);
    console.log(songInfo);

    return {
        info: perms.map((_, i) => ({
            perms: _,
            songInfo: songInfo[i]
        })), // zip
        enablePuzzle: enablePuzzle
    }
}