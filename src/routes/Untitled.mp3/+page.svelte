<script lang='ts'>
    import type { PageData } from "./$types";

    import Crystal from './Crystal.svelte';

    export let data: PageData;

    let arr = [2, 2, 2, 2]
</script>

<div class='center'>
    <div class='gallery'>
        {#each arr as available, index}
            <Crystal locked={available} index={index}/>
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
