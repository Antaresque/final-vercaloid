import type { HintPermission, HintStatus } from "$lib/types";

export let perms: HintPermission[] = [
    { status: 'LOCKED', hints: [
        { done: false, hint: false },
        { done: false, hint: false },
        { done: false, hint: false },
        { done: false, hint: false },
    ]},
    { status: 'LOCKED', hints: [
        { done: false, hint: false },
        { done: false, hint: false },
        { done: false, hint: false },
        { done: false, hint: false },
    ]},
    { status: 'LOCKED', hints: [
        { done: false, hint: false },
        { done: false, hint: false },
        { done: false, hint: false },
        { done: false, hint: false },
    ]},
    { status: 'LOCKED', hints: [
        { done: false, hint: false },
        { done: false, hint: false },
        { done: false, hint: false },
        { done: false, hint: false },
    ]}
];

export const data = [
    { img: 'http://i.imgur.com/6IhplpS.jpg', hintsUrl: 'Untitled.mp3/delinquent-duo', resultUrl: 'Untitled.mp3/delinquent-duo-final', songInfo: [], hints: [
        { name: "Family outing", hint: '', solution: 'Have a result of a sibling song with one of the siblings in the result' },
        { name: "A mascot concert", hint: '', solution: 'Have a result for Miku with one of her solo songs' },
        { name: "A duo of glowsticks", hint: '', solution: 'Have at least two people together in a Virtual Show room' },
        { name: "Showtime is over", hint: '', solution: 'Have a picture of losing a Showtime Ruler show, with Failed' }
    ]},
    { img: 'jacket_duo.jpg', hintsUrl: 'Untitled.mp3/delinquent-duo', resultUrl: 'delinquent-duo-final', songInfo: [], hints: [
        { name: "Family outing", hint: '', solution: 'Have a result of a sibling song with one of the siblings in the result' },
        { name: "A mascot concert", hint: '', solution: 'Have a result for Miku with one of her solo songs' },
        { name: "A duo of glowsticks", hint: '', solution: 'Have at least two people together in a Virtual Show room' },
        { name: "Showtime is over", hint: '', solution: 'Have a picture of losing a Showtime Ruler show, with Failed' }
    ]},
    { img: 'jacket_duo.jpg', hintsUrl: 'delinquent-duo', resultUrl: 'delinquent-duo-final', songInfo: [], hints: [
        { name: "Family outing", hint: '', solution: 'Have a result of a sibling song with one of the siblings in the result' },
        { name: "A mascot concert", hint: '', solution: 'Have a result for Miku with one of her solo songs' },
        { name: "A duo of glowsticks", hint: '', solution: 'Have at least two people together in a Virtual Show room' },
        { name: "Showtime is over", hint: '', solution: 'Have a picture of losing a Showtime Ruler show, with Failed' }
    ]},
    { img: 'jacket_duo.jpg', hintsUrl: 'delinquent-duo', resultUrl: 'delinquent-duo-final', songInfo: [], hints: [
        { name: "Family outing", hint: '', solution: 'Have a result of a sibling song with one of the siblings in the result' },
        { name: "A mascot concert", hint: '', solution: 'Have a result for Miku with one of her solo songs' },
        { name: "A duo of glowsticks", hint: '', solution: 'Have at least two people together in a Virtual Show room' },
        { name: "Showtime is over", hint: '', solution: 'Have a picture of losing a Showtime Ruler show, with Failed' }
    ]},
];

export const songInfo = [
    { title: '', titleJP: '', artist: '', artistJP: '', ogImage: 'https://i.imgur.com/zx4QPhe.jpeg' },
    {},
    {},
    {}
];

export const loadPerms = () => perms;

export const setPerms = (value: HintPermission[]) => perms = value;
export const changeStatus = (status: HintStatus, index: number) => {
    
}