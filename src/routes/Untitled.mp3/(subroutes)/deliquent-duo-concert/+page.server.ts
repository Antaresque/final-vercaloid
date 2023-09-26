import { loadPerms } from '$lib/server/data';
import { loadData } from '$lib/server/access_check';

export function load({ params }) {
    const perms = loadPerms();
    const songInfo = loadData();

    return {
        perms: perms[0],
        songInfo: songInfo[0]
    };
}