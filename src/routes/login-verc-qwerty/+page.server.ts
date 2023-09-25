import { toBase64 } from '$lib/server/util/crypt'

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const pass = data.get('pass');

        const hashed = await toBase64(pass);

        await cookies.set('hash', hashed, { path: '/'});
	}
}