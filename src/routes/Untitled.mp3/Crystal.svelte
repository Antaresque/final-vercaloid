<script lang='ts'>
    import '$lib/styles/shaking.css';
	import { createEventDispatcher } from 'svelte';
    import type { HintPermission, HintStatus, SongData } from '$lib/types';
    import { goto } from '$app/navigation';

	const dispatch = createEventDispatcher();

    export let perms: HintPermission;
    export let index: number;
    export let songData: SongData;

    const redirectHints = () => goto(songData.hintsUrl);
    const redirectResult = () => goto(songData.resultUrl);

    const basicClass = 'image'
    let cssClass = (index: number) => [`${basicClass} up`, `${basicClass} right`, `${basicClass} left`, `${basicClass} down`][index];

    function addClassTemporarily(e: MouseEvent & { currentTarget: EventTarget & HTMLDivElement; }) {
        e.currentTarget.classList.remove('shaking');
        e.currentTarget.offsetWidth;
        e.currentTarget.classList.add('shaking');
        dispatch('tap', { index });
    }
</script>

{#if perms.status == 'LOCKED'}
    <div class='lock' on:click={addClassTemporarily}></div>
{:else if perms.status == 'HINTS'}
    <img src={songData.img} class={cssClass(index)} on:click={redirectHints}>
{:else}
    <img class={cssClass(index)} src={songData.songInfo.image} on:click={redirectResult}>
{/if}

<style>
    .lock {
        width: 100%; 
        aspect-ratio: 1;
        object-fit: cover;
        background: linear-gradient(45deg, black, #2e2e2e);
        opacity: 1;

        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        user-select: none;
    }
    
    .i-lock {
        width: 50%;
        aspect-ratio: 1;
        transform: rotate(-45deg);
        filter: invert(86%) sepia(2%) saturate(13%) hue-rotate(328deg) brightness(81%) contrast(82%);
    }
    
    .lock:hover {
        filter: brightness(1)
    }

    .image {
        width: 141%; /* 100%*sqrt(2) = 141% */
        aspect-ratio: 1;
        object-fit: cover;
        transform: rotate(-45deg);
        clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
        filter: opacity(30%) blur(0.5px);
        transition: all .4s ease-in;
    }

    .image:hover {
        cursor: pointer;
        filter: opacity(100%) blur(0);
    }

    .image-blur {
        filter: opacity(50%) blur(24px);
    }

    .image-blur:hover {
        cursor: pointer;
        filter: opacity(100%) blur(16px);
    }

    .down:hover {
        transform: scale(207%) rotate(-45deg) translateY(-25%);
        z-index: 10;
    }

    .up:hover {
        transform: scale(207%) rotate(-45deg) translateY(25%);
        z-index: 10;
    }
</style>