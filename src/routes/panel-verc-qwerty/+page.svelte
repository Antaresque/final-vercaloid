<script lang="ts">
    import { invalidate } from "$app/navigation";
    import type { HintStatus } from "$lib/types";
    import type { PageData } from "./$types";

    export let data: PageData;

    let perms = data.perms;

    async function update() {
        console.log(JSON.stringify(perms));

        const result = await fetch("/api/auth", {
            method: "POST",
            body: JSON.stringify(perms),
        })

        console.log(await result.json());

        invalidate(() => true);
    }
</script>

<div>
    {#each perms as el, i}
        <div class='flex-row'>
            <h2>Song {i+1}</h2>
            
            <br>
            
            <label>
                <input type="radio" id='LOCKED' bind:group={perms[i].status} value='LOCKED'/>
                LOCKED 
            </label>
            <label>
                <input type="radio" id='HINTS' bind:group={perms[i].status} value='HINTS' />
                HINTS ONLY
            </label>
            <label>
                <input type="radio" id='OPEN' bind:group={perms[i].status} value='OPEN' />
                OPEN (not done)
            </label>

            <br>
            <ul>
                {#each el.hints as hint, j} 
                <li>
                    <label>
                        <input type='checkbox' id={i+' '+j} bind:checked={hint.done}>
                        Is hint {j+1} done?
                    </label>
                </li>
                {/each}
                
            </ul>
        </div>
    {/each}


    <button on:click={update} style="padding: 5px">UPDATE</button>
</div>

<style>
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        height: 100vh;
        color: white;
    }

    .flex-row {
        flex-direction: column;
        align-items: flex-start;
        margin-left: 10px;
        margin-right: 10px;
    }
</style>