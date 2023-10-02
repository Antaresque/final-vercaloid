import { loadPerms } from '$lib/server/data';
import { loadData } from '$lib/server/access_check';

export function load({ params }) {
    const perms = loadPerms();
    const songInfo = loadData();

    return {
        perms: perms[1],
        songInfo: songInfo[1]
    };
}