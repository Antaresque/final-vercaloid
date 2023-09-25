export const prerender = false;

import { data, perms } from '../../lib/server/access_check';
import { redirect } from '@sveltejs/kit';

export function load({ params, locals }) {
    if(!locals.authorized)
        throw redirect(303, '/login');

    const objects = data.map((val, i) => ({
        text: val,
        perms: perms[i]
    }));

    return {
        objects: objects
    }
}