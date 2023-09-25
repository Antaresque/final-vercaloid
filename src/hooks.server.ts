import { env } from '$env/dynamic/private';
import { comparePassword, fromBase64 } from '$lib/server/util/crypt';

export const handle = async ({event, resolve}) => {
    const cookies = event.cookies;

    const isAuth = await validate(cookies);
    event.locals.authorized = isAuth;

    return await resolve(event);
}

const validate = async (cookies) => {
    const cookie = cookies.get('hash');
    if(!cookie)
        return false;

    const target = env.PRIVATE_PASSWORD;
    const pass = await fromBase64(cookie);
    const isAuth = await comparePassword(pass, target);

    if(!isAuth)
        cookies.delete('hash');

    return isAuth;
}