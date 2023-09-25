<script lang="ts">
    import { invalidate } from "$app/navigation";
    import type { PageData } from "./$types";

    export let data: PageData;

    async function update() {
        const perms = data.objects.map(_ => _.perms);

        const result = await fetch("/api/auth", {
            method: "POST",
            body: JSON.stringify(perms),
        })

        console.log(await result.json());

        invalidate(() => true);
    }
</script>

<div>
    <div>
        <ul>
            {#each data.objects as obj, index}
                <li>
                    <input type="checkbox" name={index.toString()} bind:checked={obj.perms}>
                    {obj.text}
                </li>
            {/each}
        </ul>
    </div>

    <button on:click={update}>UPDATE</button>
</div>