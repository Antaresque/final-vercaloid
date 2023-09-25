<script>
	import { page } from '$app/stores';
</script>

<div class='center'>
    <h1>{$page.status}</h1>
    {#if $page.status == 404}
        <br>
        <h2>unknown audio file selected</h2>
    {/if}
</div>

<style>
    .center {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100vh;
    }

    h1, h2 {
        color: white;
        user-select: none;
    }
</style>