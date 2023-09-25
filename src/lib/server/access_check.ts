export let perms = [false, false, false];

export const data = ["test", "test2", "test3"];

export const displayData = () => data.map(
    (_, i) => !!perms[i] ? data[i] : undefined
);

export const changePerms = (value: boolean, index: number) => {
    perms[index] = value;
}

export const setPerms = (value: boolean[]) => perms = value;