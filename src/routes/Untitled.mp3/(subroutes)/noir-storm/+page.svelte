<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData
    const img = data.songInfo.img;

    const strike = (index: number) => (data.perms.hints[index].done) ? 'strikethrough' : '';

</script>


<div class='center'>
    <div class='gallery'>
        <div class='top left'> 
            <p class={strike(0)}>{data.songInfo.hints[0].name}</p>
            <span>
                {#if data.perms.hints[0].done}
                    {data.songInfo.hints[0].solution}
                {:else if data.songInfo.hints[0].hint !== ''}
                    {data.songInfo.hints[0].hint}
                {/if}
            </span>
        </div>
        <div class='top right'>
            <p class={strike(1)}>{data.songInfo.hints[1].name}</p>
            <span>
                {#if data.perms.hints[1].done}
                    {data.songInfo.hints[1].solution}
                {:else if data.songInfo.hints[1].hint !== ''}
                    {data.songInfo.hints[1].hint}
                {/if}
            </span>
        </div>
        <img src={img} class='image'>
        <div class='bottom left'> 
            <p class={strike(2)}>{data.songInfo.hints[2].name}</p>
            <span>
                {#if data.perms.hints[2].done}
                    {data.songInfo.hints[2].solution}
                {:else if data.songInfo.hints[2].hint !== ''}
                    {data.songInfo.hints[2].hint}
                {/if}
            </span>
        </div>
        <div class='bottom right'>
            <p class={strike(3)}>{data.songInfo.hints[3].name}</p>
            <span>
                {#if data.perms.hints[3].done}
                    {data.songInfo.hints[3].solution}
                {:else if data.songInfo.hints[3].hint !== ''}
                    {data.songInfo.hints[3].hint}
                {/if}
            </span>
        </div>
    </div>
</div>

<style>
    .center {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        overflow: visible !important;
    }

    .gallery {
        position: absolute;
        overflow: visible !important;
    }

    .gallery > div {
        position: absolute;
        color: white;
        background-color: #4a4a4a;
        height: 100px;
        width: clamp(0px, calc(50vw - 25px), 525px); 
        
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 1px;
        overflow: visible !important;
        
        --scale: 100px;
        box-sizing: border-box;
    }

    .gallery > div.top {
        top: 0px;
    }

    .gallery > div.bottom {
        bottom: 0px;
    }

    @media only screen and (max-width: 700px) {
    .gallery > div {
        height: 150px;
    }
    .gallery > div.top {
        top: -100px;
    }

    .gallery > div.bottom {
        bottom: -100px;
    }

    .gallery > div.left > p, .gallery > div.left > span {
        text-align: left;
        margin-right: 30px;
    }
    .gallery > div.right > p, .gallery > div.right > span {
        text-align: right;
        margin-left: 30px;
    }
    }

    .gallery > div.left {
        left: clamp(-335px, calc((500px - 100vw)/2 - 35px), 0px);
        align-items: flex-start;
    }

    .gallery > div.right {
        right: clamp(-335px, 0px, calc((500px - 100vw)/2 - 35px));
        align-items: flex-end;
    }

    .gallery > div.top.left {
        clip-path: polygon(0 0, 100% 0%, calc(100% - var(--scale)) 100%, 0 100%);
    }
    .gallery > div.top.right {
        clip-path: polygon(0 0, 100% 0%, 100% 100%, var(--scale) 100%);
    }

    .gallery > div.bottom.left {
        clip-path: polygon(0 0, calc(100% - var(--scale)) 0%, 100% 100%, 0 100%);
    }
    .gallery > div.bottom.right {
        clip-path: polygon(var(--scale) 0, 100% 0%, 100% 100%, 0 100%);
    }

    .image {
        aspect-ratio: 1;
        object-fit: cover;
        clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
        filter: opacity(100%) blur(0px);
        width: 400px;
    }

    span {
        font-size: 0.75rem;
        color: #999999;
    }

    .left > span {
        text-align: start;
        margin-right: 35px;
    }

    .right > span {
        text-align: end;
        margin-left: 35px;
    }

    .strikethrough {
        text-decoration: line-through;
    }
</style>