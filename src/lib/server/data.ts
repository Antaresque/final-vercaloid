import type { HintPermission, HintStatus } from "$lib/types";

export let perms: HintPermission[] = [
    { status: 'OPEN', hints: [
        { done: true, hint: false },
        { done: true, hint: false },
        { done: true, hint: false },
        { done: true, hint: false },
    ]},
    { status: 'OPEN', hints: [
        { done: true, hint: true },
        { done: true, hint: true },
        { done: true, hint: true },
        { done: true, hint: true },
    ]}, 
    { status: 'OPEN', hints: [
        { done: true, hint: false },
        { done: true, hint: false },
        { done: true, hint: false },
        { done: true, hint: false },
    ]},
    { status: 'HINTS', hints: [
        { done: true, hint: false },
        { done: true, hint: false },
        { done: true, hint: false },
        { done: true, hint: false },
    ]}
];

export const data = [
    { img: 'http://i.imgur.com/6IhplpS.jpg', hintsUrl: 'Untitled.mp3/delinquent-duo', resultUrl: 'Untitled.mp3/delinquent-duos-concert', songInfo: {}, hints: [
        { name: "Family outing", hint: '', solution: 'Have a picture of two siblings together out on the town' },
        { name: "A mascot concert", hint: '', solution: 'Have a result for Miku with one of her solo songs' },
        { name: "A duo of glowsticks", hint: '', solution: 'Have at least two people together in a Virtual Show room' },
        { name: "Showtime is over", hint: '', solution: 'Have a picture of losing a Showtime Ruler show, with Failed' }
    ]},
    { img: 'https://i.imgur.com/txkYRWp.png', hintsUrl: 'Untitled.mp3/noir-storm', resultUrl: 'Untitled.mp3/noir-storms-outburst', songInfo: {}, hints: [
        { name: "The palish mirror image", hint: '(requires result screenshot)', solution: 'Have a result of Haikei Doppelganger, with black&white or similar filter' },
        { name: "Half-torn songs none would sing", hint: '(requires result screenshot)', solution: 'Have a result of MGPD, with less than half of perfects' },
        { name: "Choosing a voice to pierce the silence", hint: '', solution: 'Have a screenshot of options, where the SE and BGM are muted, while voice is set to a volume above 0' },
        { name: "A false ending to endings", hint: '', solution: 'Have a screenshot during Gehenna show, without notes currently on the screen' }
    ]},
    { img: 'https://i.imgur.com/UJJ5reE.png', hintsUrl: 'Untitled.mp3/forbidden-spear', resultUrl: 'Untitled.mp3/forbidden-spears-requiem', songInfo: {}, hints: [
        { name: "A childish viral clip", hint: '(requires result screenshot)', solution: 'Have \"69\" somewhere in an Ifuudoudou result #funny' },
        { name: "+danshi", hint: '(requires result screenshot)', solution: 'Have a result on a Giga-P song with D rank #funny' },
        { name: "A sudden group explosion", hint: '', solution: 'Have a result of all members in a coop fail during the match (by misscount or by in-game screen)' },
        { name: "Flow upward, release", hint: '', solution: 'Have a picture of missing up arrow hold' }
    ]},
    { img: 'https://i.imgur.com/myiv8ER.png', hintsUrl: 'Untitled.mp3/ice-age', resultUrl: 'Untitled.mp3', songInfo: {}, hints: [
        { name: "Dawn of a thousand stars", hint: '(requires result screenshot)', solution: 'Have a result with the total combo or perfect count equal to 1000' },
        { name: "The piano shifted wrong way", hint: '(requires result screenshot)', solution: 'Have a result with at least 88 wrong way greats' },
        { name: "Blinded by snowflakes", hint: '', solution: 'Have a screenshot during Snow Miku song but played at very low speed' },
        { name: "The clock strikes midnight", hint: '', solution: 'Have a screenshot from the game at midnight' }
        
    ]},
];

export const songInfo = [
    { title: 'Yattare! Ongassen', titleJP: 'やったれ！音合戦', artist: 'marasy', artistJP: 'まらしぃ', ogImage: 'http://i.imgur.com/zx4QPhe.jpg', 
      youtubeLink: 'https://www.youtube.com/watch?v=vsbaSbm09SM', sonolusLink: 'https://cc.sevenc7c.com/charts/3szZ4zLB9aGsquMEEgnH7BU',
      audioClip: 'https://puu.sh/JQUu3/0516212026.mp3', difficultyLevel: '32', progress: 100
    },
    { title: 'MONOCHROME VOICE', titleJP: 'モノクロボイス', artist: 'cosMo@bousouP', artistJP: 'cosMo@暴走P', ogImage: 'https://i.imgur.com/0ZJQRl1.jpeg', 
      youtubeLink: 'https://www.youtube.com/watch?v=3nSO6Ad_Na4', sonolusLink: 'https://cc.sevenc7c.com/charts/AP9BgjTSZQyuhXEet4UKxMG',
      audioClip: 'https://puu.sh/JRm18/d96ab62994.mp3', difficultyLevel: '33', bpm: '240', progress: 100
    },
    { title: 'Holy Lance Explosion Boy', titleJP: '聖槍爆裂ボーイ', artist: 'rerulili', artistJP: 'れるりり', ogImage: 'https://i.imgur.com/ycAeJ8m.jpeg', 
      youtubeLink: 'https://www.youtube.com/watch?v=MqNmKnCNLyM', sonolusLink: 'https://cc.sevenc7c.com/charts/3x4c8RqNpjMV3UuPcZ9dp2t',
      audioClip: 'https://puu.sh/JRJl3/44214327bb.mp3', difficultyLevel: '33', bpm: '155', progress: 0
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
