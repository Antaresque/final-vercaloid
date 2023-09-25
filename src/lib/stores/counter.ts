import { derived, readable, writable } from "svelte/store";

function createCounter(val = 0) {
    const { subscribe, set, update } = writable(val);

    return {
        subscribe,
        increment: () => update(n => n+1),
        decrement: () => update(n => n-1),
        reset: () => set(val)
    }
}

export const counter$ = createCounter(0);