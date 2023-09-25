import { genSalt, hash, compare } from 'bcrypt';

export async function hashPassword(password: string) {
    const salt = await genSalt(10);
    return await hash(password, salt);
}

export async function comparePassword(password: string, hashed: string) {0
    return await compare(password, hashed);
}

export async function toBase64(text: string) {
    return Buffer.from(text).toString('base64');
}

export async function fromBase64(data: string) {
    return Buffer.from(data, 'base64').toString('ascii');
}