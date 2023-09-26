export const prerender = false;

import { data, perms } from '../../lib/server/data';
import { redirect } from '@sveltejs/kit';

export function load({ params, locals }) {
    if(!locals.authorized)
        throw redirect(303, '/login-verc-qwerty');

    return {
        data: data,
        perms: perms,
    }
}