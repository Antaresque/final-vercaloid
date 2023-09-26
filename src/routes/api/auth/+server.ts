import { setPerms } from '$lib/server/data';
import { comparePassword } from '$lib/server/util/crypt'
import { text, json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

// add auth here
export async function POST({ request, locals } : RequestEvent) 
{
    if(!locals.authorized)
        return json("not auth");

    const perms = await request.json();
    console.log(JSON.stringify(perms));
    setPerms(perms);
    return json("success");
}