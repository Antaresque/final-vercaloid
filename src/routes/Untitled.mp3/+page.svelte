<script lang='ts'>
    import { onMount } from "svelte";
    import type { PageData } from "./$types";
    import Crystal from './Crystal.svelte';
    import MelodyController from "./MelodyController";

    export let data: PageData;

    onMount(() => { 
        const isAnimationDone = window.localStorage.getItem('snowAnimation');
        if(isAnimationDone !== 'true') {
             data.info[3].perms.status = 'HINTS';
        }
    });

</script>

<div class='center'>
    <div class='gallery'>
        {#each data.info as el, index}
            <Crystal perms={el.perms} index={index} songData={el.songInfo} />
        {/each}	
    </div>
</div>


<style>
    .center {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    .gallery {
        --s: 20vh; /* controls the size */

        display: grid;
        gap: 10px;
        grid: repeat(2,var(--s)) / repeat(2,var(--s));
        place-items: center;
        transform: rotate(45deg);
    }
</style>
