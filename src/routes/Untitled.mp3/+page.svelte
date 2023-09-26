<script lang='ts'>
    import { onMount } from "svelte";
    import type { PageData } from "./$types";
    import Crystal from './Crystal.svelte';
    import MelodyController from "./MelodyController";

    export let data: PageData;

    let arr = [2, 2, 2, 2];
    const mldController = new MelodyController();

    // check completion of puzzle
    onMount(() => { 
        if(data.enablePuzzle == true) {
            const completion = window.localStorage.getItem('puzzleCompleted');
            if(completion === 'true') {
                data.enablePuzzle = false;
                data.info[0].perms.status = 'HINTS';
            }              
        }
    });

    const tap = (event: CustomEvent<any>) => {
        if(!data.enablePuzzle)
            return;
            
        const index = event.detail.index;
        const result = mldController.click(index);

        if(result) {
            data.enablePuzzle = false;
            data.info[0].perms.status = 'HINTS';
            window.localStorage.setItem('puzzleCompleted', 'true');
        }
    }

</script>

<div class='center'>
    <div class='gallery'>
        {#each data.info as el, index}
            <Crystal perms={el.perms} index={index} songData={el.songInfo} on:tap={tap}/>
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
