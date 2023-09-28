import type { HintPermission, HintStatus } from "$lib/types";

export let perms: HintPermission[] = [
    { status: 'OPEN', hints: [
        { done: true, hint: false },
        { done: true, hint: false },
        { done: true, hint: false },
        { done: true, hint: false },
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
    { img: 'http://i.imgur.com/6IhplpS.jpg', hintsUrl: 'Untitled.mp3/delinquent-duo', resultUrl: 'Untitled.mp3/delinquent-duos-concert', songInfo: {}, hints: [
        { name: "Family outing", hint: '', solution: 'Have a picture of two siblings together out on the town' },
        { name: "A mascot concert", hint: '', solution: 'Have a result for Miku with one of her solo songs' },
        { name: "A duo of glowsticks", hint: '', solution: 'Have at least two people together in a Virtual Show room' },
        { name: "Showtime is over", hint: '', solution: 'Have a picture of losing a Showtime Ruler show, with Failed' }
    ]},
    { img: 'jacket_duo.jpg', hintsUrl: 'Untitled.mp3/delinquent-duo', resultUrl: 'delinquent-duo-final', songInfo: {}, hints: [
        { name: "Family outing", hint: '', solution: 'Have a result of a sibling song with one of the siblings in the result' },
        { name: "A mascot concert", hint: '', solution: 'Have a result for Miku with one of her solo songs' },
        { name: "A duo of glowsticks", hint: '', solution: 'Have at least two people together in a Virtual Show room' },
        { name: "Showtime is over", hint: '', solution: 'Have a picture of losing a Showtime Ruler show, with Failed' }
    ]},
    { img: 'jacket_duo.jpg', hintsUrl: 'delinquent-duo', resultUrl: 'delinquent-duo-final', songInfo: {}, hints: [
        { name: "Family outing", hint: '', solution: 'Have a result of a sibling song with one of the siblings in the result' },
        { name: "A mascot concert", hint: '', solution: 'Have a result for Miku with one of her solo songs' },
        { name: "A duo of glowsticks", hint: '', solution: 'Have at least two people together in a Virtual Show room' },
        { name: "Showtime is over", hint: '', solution: 'Have a picture of losing a Showtime Ruler show, with Failed' }
    ]},
    { img: 'jacket_duo.jpg', hintsUrl: 'delinquent-duo', resultUrl: 'delinquent-duo-final', songInfo: {}, hints: [
        { name: "Family outing", hint: '', solution: 'Have a result of a sibling song with one of the siblings in the result' },
        { name: "A mascot concert", hint: '', solution: 'Have a result for Miku with one of her solo songs' },
        { name: "A duo of glowsticks", hint: '', solution: 'Have at least two people together in a Virtual Show room' },
        { name: "Showtime is over", hint: '', solution: 'Have a picture of losing a Showtime Ruler show, with Failed' }
    ]},
];

export const songInfo = [
    { title: 'Yattare! Ongassen', titleJP: 'やったれ！音合戦', artist: 'marasy', artistJP: 'まらしぃ', ogImage: 'http://i.imgur.com/zx4QPhe.jpg', 
      youtubeLink: 'https://www.youtube.com/watch?v=vsbaSbm09SM', sonolusLink: 'https://cc.sevenc7c.com/charts/3szZ4zLB9aGsquMEEgnH7BU',
      audioClip: 'https://puu.sh/JQUu3/0516212026.mp3', difficultyLevel: '32', progress: 75
    },
    { title: 'Yattare! Ongassen', titleJP: 'やったれ！音合戦', artist: 'marasy', artistJP: 'まらしぃ', ogImage: 'http://i.imgur.com/zx4QPhe.jpg', 
      youtubeLink: 'https://www.youtube.com/watch?v=vsbaSbm09SM', sonolusLink: 'https://cc.sevenc7c.com/charts/3szZ4zLB9aGsquMEEgnH7BU',
      audioClip: 'https://puu.sh/JQUu3/0516212026.mp3', difficultyLevel: '32', bpm: '190', progress: 0
    },
    { title: 'Yattare! Ongassen', titleJP: 'やったれ！音合戦', artist: 'marasy', artistJP: 'まらしぃ', ogImage: 'http://i.imgur.com/zx4QPhe.jpg', 
      youtubeLink: 'https://www.youtube.com/watch?v=vsbaSbm09SM', sonolusLink: 'https://cc.sevenc7c.com/charts/3szZ4zLB9aGsquMEEgnH7BU',
      audioClip: 'https://puu.sh/JQUu3/0516212026.mp3', difficultyLevel: '32', bpm: '190', progress: 0
    },
    { title: 'Yattare! Ongassen', titleJP: 'やったれ！音合戦', artist: 'marasy', artistJP: 'まらしぃ', ogImage: 'http://i.imgur.com/zx4QPhe.jpg', 
      youtubeLink: 'https://www.youtube.com/watch?v=vsbaSbm09SM', sonolusLink: 'https://cc.sevenc7c.com/charts/3szZ4zLB9aGsquMEEgnH7BU',
      audioClip: 'https://puu.sh/JQUu3/0516212026.mp3', difficultyLevel: '32', bpm: '190', progress: 0
    }
];

export const loadPerms = () => perms;
export const loadDataRaw = () => data;

export const setPerms = (value: HintPermission[]) => perms = value;
export const changeStatus = (status: HintStatus, index: number) => {
    
}
